
import  axios  from "axios"
import { useEffect, useState } from "react"
import { server } from "../main"
const Exhanges = () => {


    const [exchanges, setExchanges] = useState([]);
    useEffect(() => {
      const fetchExchanges = async()=> {
        const {data} = await axios.get(`${server}/exchanges`)
    // console.log(data); 
    setExchanges(data) 
    };
    
      fetchExchanges();
    }, [])
    
 
 
    return (
    <div>Exhanges</div>
  )
}

export default Exhanges