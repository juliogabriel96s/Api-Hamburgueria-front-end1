import React, { useRef, useState} from "react";
import { Container, Image, InputLabel, Input, Box} from "./style";
import H1 from '../../components/title'
import Button from "../../components/button";
import CodeBurguer from '../../assets/CodeBurguer.svg'

import axios from "axios";
import { useNavigate } from "react-router-dom";

const App = () =>{
const inputOrder = useRef()
const inputName = useRef()
const [orders, setOrder] = useState([])

const navigate = useNavigate()

  const addNewOrder = async() =>{
const {data: newOrder} = await axios.post('http://localhost:3001/order',{
  order: inputOrder.current.value,
  clientName: inputName.current.value
})

setOrder([...orders, newOrder])

navigate('/pedidos')

}
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



<Button onClick={addNewOrder}>Novo pedido</Button>
</Container>
  )
}

export default App;
