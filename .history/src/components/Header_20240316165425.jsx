import { HStack , Button} from "@chakra-ui/react"
import { Link } from "react-router-dom"


const Header = () => {
    return (
<HStack p={"4"} bgColor={"black"} shadow={"base"}  >
<Button colorScheme='blue' variant='ghost' >Button 
<Link to={"/"}   >Home</Link>
</Button>
<Button colorScheme='blue' variant='ghost' >Button 
<Link to={"/"}   >Home</Link>
</Button>
    
<Button colorScheme='blue' variant='ghost' >Button 
<Link to={"/"}   >Home</Link>
</Button>
    
    
</HStack>
    )
}

export default Header