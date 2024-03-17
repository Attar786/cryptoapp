import { Container, HStack  } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../main";
import Loader from "./Loader";
const Exhanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchExchanges = async () => {
      const { data } = await axios.get(`${server}/exchanges`);

      setExchanges(data);
      console.log(data);
      setLoading(false);
    };
    fetchExchanges();
  }, []);

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
        {/* <h1>data</h1> */}
         <HStack wrap={"wrap"}>

{exchanges.map((i) =>(
    // <div></div>
<div key= {i.id}>
  {/* {i.name} */}
  {i.name}
</div>


  ))
}
         </HStack>
        </>
      )}
    </Container>
  );
};

export default Exhanges;
