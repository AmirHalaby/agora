import React, { Component } from 'react';
import { observer ,inject } from 'mobx-react'

class Item extends Component {

    editPrice = () => {
        let newLocation = prompt("Update the price" , this.props.item.price) || this.props.item.price
        this.props.Market.changePrice( this.props.item.name , newLocation)
    }
    render() {
        let item = this.props.item

        return (
            <div  >
                <li onDoubleClick={this.editPrice} > 
                    {item.name + " | "} 
                    {item.price + " | "} 
                    {item.quantity }
                    <button onClick={() => {this.props.Market.buyItem(item.name)}}>buy Item</button> 
                </li>
            </div>
        );
    }
}

export default inject("Market")(observer(Item))
