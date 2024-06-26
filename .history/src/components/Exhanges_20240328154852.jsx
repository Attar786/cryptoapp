import { Container, HStack, VStack, Heading, Text, Image } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../main";
import Error from "./Error";
// import ExchangeCard from "./ExchangeCard";
import Loader from "./Loader";
const Exhanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchExchanges = async () => {

try {
  const { data } = await axios.get(`${server}/exchanges`);

      setExchanges(data);
      console.log(data);
      setLoading(false);
} catch (error) {
  setError(true);
  setLoading(false)
}   };
    fetchExchanges();
  }, []);

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
          <HStack wrap={"wrap "} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <div key={i.id}>
                <ExchangeCard
                  key={i.id}
                  name={name.i}
                  img={i.image}
                  rank={i.trust_score_rank}
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
const ExchangeCard = ({ name, img  , rank, url }) => (
  <a href={url} target={"blank"}>
    <VStack w={"52"} shadow={"lg"} borderRadius={"lg"} transition={"all 0.3s"}
    m={"4"} 
    css={{"&&:hover":{
transform:"scale(1.1)"


    }}}
    
    
    >
      <Image src={img}  width={"10"} height={"10"} alt={"Exchanges"} />

      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>
      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);

// export default ExchangeCard

export default Exhanges;
