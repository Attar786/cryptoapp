import {Container} from "@chakra-ui/react"

// import 
import  axios  from "axios"
import { useEffect, useState } from "react"
import { server } from "../main"
const Exhanges = () => {


    const [exchanges, setExchanges] = useState([]);
    useEffect(() => {
      const fetchExchanges = async()=> {
        const {data} = await axios.get(`${server}/exchanges`)
    
    setExchanges(data) 
    console.log(data); 
};
    
      fetchExchanges();
    }, [])
    
 
 
    return (

<Container maxW={"container.xl"}></Container>

)
}

export default Exhanges