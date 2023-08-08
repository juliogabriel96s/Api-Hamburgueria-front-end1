import React, {useEffect, useState} from "react";
import { Container, Image, Order } from "./style";
import H1 from '../../components/title'
import Button from "../../components/button";
import Burguer from '../../assets/burger (1) 1.svg'
import Trash from '../../assets/Trash.svg'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Orders = () =>{
const [orders, setOrder] = useState([])

const navigate = useNavigate()

useEffect(() =>{
  async function fetchOrder(){
    const {data: newOrder} = await axios.get('http://localhost:3001/order')
    setOrder(newOrder)
  }
  fetchOrder()
},[])

const deleteOrder = async (OrderId) =>{
await axios.delete(`http://localhost:3001/order/${OrderId}`)
const newOrder = orders.filter(order => order.id !== OrderId)
setOrder(newOrder)
}

const goBackPage = () =>{
navigate('/')
}

  return(
<Container>

<Image alt="logo-image" src={Burguer}/>
<H1 isBack={true}>Pedidos</H1>

<ul>
  {
   orders.map((order) => (
<Order key={order.id}>
  <p className="pedido">{order.order}</p>
  <button onClick={() => deleteOrder(order.id)}><img src={Trash} alt="lata-de-lixo"/></button>
  <p className="name">{order.clientName}</p>
</Order>    
   ))
  }
</ul>

<Button isBack={true} onClick={goBackPage}>Voltar</Button>
</Container>
  )
}

export default Orders;
