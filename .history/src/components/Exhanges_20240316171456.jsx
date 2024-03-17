
import { axios } from "axios"
import { useEffect } from "react"
import { server } from "../main"
const Exhanges = () => {
 
    useEffect(() => {
      const fetchExchanges = async()=> {
        const {data} = await axios.get(`${server}`/exchanges)
      }
    
      fetchExchanges();
    }, [])
    
 
 
    return (
    <div>Exhanges</div>
  )
}

export default Exhanges