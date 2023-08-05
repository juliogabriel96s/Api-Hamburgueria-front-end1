import React, {useRef, useState} from "react";
import { Container, Image, H1, InputLabel, Input, Button, Box, Order } from "./style";
import CodeBurguer from '../../assets/CodeBurguer.svg'
import Trash from '../../assets/Trash.svg'
import axios from "axios";

const App = () =>{
const inputOrder = useRef()
const inputName = useRef()
const [orders, setOrder] = useState([])

  const addNewOrder = async() =>{
const {data: newOrder} = await axios.post('http://localhost:3001/order',{
  order: inputOrder.current.value,
  clientName: inputName.current.value
})

setOrder([...orders, newOrder])

}
console.log(orders)
  return(
<Container>

<Image alt="logo-image" src={CodeBurguer}/>
<H1>Faça seu pedido!</H1>

<Box>
<InputLabel>Pedido</InputLabel>
<Input ref={inputOrder} placeholder="1 Coca-cola, 1-X Salada"/>
</Box>
<Box>
<InputLabel>Nome do cliente</InputLabel>
<Input ref={inputName} placeholder="Steve Jobs"/>
</Box>

<ul>
  {
   orders.map((order) => (
<Order key={order.id}>
  <p>{order.name}</p>
</Order>    
   ))
  }
</ul>

<Button onClick={addNewOrder}>Novo pedido</Button>
</Container>
  )
}

export default App;
