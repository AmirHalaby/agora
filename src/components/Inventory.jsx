import React, { Component } from 'react';
import { observer , inject } from 'mobx-react'

class Inventory extends Component {
    constructor() {
        super();
        this.state = {
        name : '' ,
        price : '' ,
        quantity :''

        }
    }
    handleChangeName = (e) => {
        
        this.setState({
            name: e.target.value
        })
      }
      handleChangePrice = (e) => {
        this.setState({
            price: e.target.value
        })
      }
      handleChangeQuantity = (e) => {
            this.setState({
                quantity: e.target.value
            })
      }
      addItem = () => {
          if (this.state.quantity > 0 && this.state.price > 0 && this.state.name != "") {
            this.props.Market.addItem(this.state.name , this.state.price , this.state.quantity)
            this.setState({
                name : '' ,
                price : '' ,
                quantity :''
            })
          }
          
      }
    render() {
        return (
            <div>
                <label>Name</label>
                <input onChange={this.handleChangeName} value={this.state.name}  />
                <label>Price</label>
                <input onChange={this.handleChangePrice} value={this.state.price} type={'number'}  pattern="/^[0-9\b]+$/"/>
                <label>Quantity</label>
                <input onChange={this.handleChangeQuantity} value={this.state.quantity} type={'number'} pattern="/^[0-9\b]+$/"/>
                <button onClick={this.addItem}>Add</button>
                <div>{this.props.Market.numItems}</div>
            </div>
        );
    }
}
export default inject("Market")(observer(Inventory))


