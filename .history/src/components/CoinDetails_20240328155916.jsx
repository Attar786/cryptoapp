import {Container} from '@chakra-ui/react'
const CoinDetails = () => {
  return (

<Container maxW={"container.xl"}>
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  {/* const [page, setPage] = useState(1); */}
  const [currency, setCurrency] = useState("pkr");
  const currencySymbol = currency==="pkr" ? "pkr" : currency==="eur" ? "€" : "$";



</Container>

    )
}

export default CoinDetails