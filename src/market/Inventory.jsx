import { observable, action, makeObservable , computed} from 'mobx'
import { Item } from './Item'

export class Inventory {
    constructor() {
        this.items = []
        this.length = 0
        
        makeObservable(this,{
            items: observable,
            addItem: action ,
            changePrice: action,
            buyItem : action ,
            deleteItem : action, 
            numItems : computed ,
        })
    }
    get numItems(){
        let sum =0 ;
        this.items.map(item => sum = parseInt(sum)  +parseInt(item.quantity))
        return sum;
    }
    deleteItem = (itemName) => {
        for (let i = 0; i < this.items.length; i++) {
            if(this.items[i].name === itemName){
                this.items.splice(i,1);
            }
        }
    }
    addItem = (name, price , quantity) => {
        if(this.items.filter(i => i.name === name).length === 0){
            this.items.push(new Item(name , price , quantity))

        }else{
            let item = this.items.find(i => i.name === name);
            item.quantity =parseInt(item.quantity) + parseInt(quantity)
        }
    }   
    changePrice = (name, price) => {
        let item = this.items.find(i => i.name === name);
        item === undefined ? item.quantity=item.quantity : item.price = price
    }
    buyItem = (name) => {
        let item = this.items.find(i => i.name === name);
        item === undefined ? item.quantity=item.quantity : item.quantity--
        if(item !== undefined && item.quantity === 0 ){
            this.deleteItem(name)
        }
    }
}
