import logo from './logo.svg';
import './App.css';
import  Item  from './components/Item';
import Inventory from './components/Inventory';
// import { Inventory } from './market/Inventory';
import { observer , inject} from 'mobx-react'

function App(props) {
  let market = props.Market
  return (
    // console.log(JSON.stringify(props) )
    <div className="App">
      <Inventory  />
      {market.items.map((i,ind) => <Item item = {i} key = {ind}/>)}      
    </div>
  );
}

export default inject("Market")(observer(App))

// export default observer(App)

