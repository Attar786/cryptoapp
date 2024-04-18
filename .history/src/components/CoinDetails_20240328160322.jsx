import {Container, Box} from '@chakra-ui/react'
import Loader from './Loader';
const CoinDetails = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  {/* const [page, setPage] = useState(1); */}
  const [currency, setCurrency] = useState("pkr");
  // const currencySymbol = currency==="pkr" ? "pkr" : currency==="eur" ? "€" : "$";  
  return (
<Container maxW={"container.xl"}>
{
  loading? <loader/> :(
<>

<Box w={"full"}>

</Box>

</>


)  }

</Container>

    )
}

export default CoinDetails