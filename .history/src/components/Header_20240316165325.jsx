import { HStack , Button} from "@chakra-ui/react"
import { Line } from "react-chartjs-2"
import { Link } from "react-router-dom"


const Header = () => {
    return (
<HStack p={"4"} bgColor={"black"} shadow={"base"}  >
<Button colorScheme='blue' variant='ghost' >Button</Button>
<Link to={"/"}   >Home</Link>
    
</HStack>
    )
}

export default Header