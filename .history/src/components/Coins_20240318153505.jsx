import { Container, HStack, VStack, Heading, Text, Image } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../main";
import Error from "./Error";
// import ExchangeCard from "./ExchangeCard";
import Loader from "./Loader";
import Coinscards from "./Coinscards";
const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("pkr");
  useEffect(() => {
    const fetchCoins = async () => {
try 
{
  const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
      setCoins(data);
      console.log(data);
      setLoading(false);
} catch (error) {
  setError(true);
  setLoading(false)
}   };
    fetchCoins();
  }, [currency, page]);

if(error)
return
<Error/>
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <h1>data</h1> */}
          <HStack wrap={"wrap "}>
            {coins.map((i) => (
              <div key={i.id}>
                <Coinscards
                  key={i.id}
                  name={name.i}
                  img={i.image}
                  price={i.current_price}
                  // rank={i.trust_score_rank}
                  symbol={i.symbol}
                  url={i.url}
                />
                {i.name}
              </div>
            ))}{" "}
          </HStack>
        </>
      )}
    </Container>
  );
};
// eslint-disable-next-line react/prop-types



export default Coins;
