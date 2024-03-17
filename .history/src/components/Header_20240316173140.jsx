import { HStack , Button} from "@chakra-ui/react"
import { Link } from "react-router-dom"


const Header = () => {
    return (
<HStack p={"4"} bgColor={"black"} shadow={"base"}  >
<Button colorScheme='blue' variant='ghost' > 
<Link to={"/"}   >Home</Link>
</Button>
<Button colorScheme='blue' variant='ghost' >
<Link to={"/coins"}   >Coins</Link>
</Button>
<Button colorScheme='blue' variant='ghost' > 
<Link to={"/exchanges"}>Exchanges</Link>
</Button>
</HStack>
    )
}

export default Header