// import React from "react";
import {VStack, Image, Heading, Text} from "@chakra-ui/react"
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Coinscards = ({id, name, img  , symbol, price , currencysymbol="Rs"}) => (
    <Link to={`/coins/${id}`} target={"blank"}>
      <VStack w={"52"} shadow={"lg"} borderRadius={"lg"} transition={"all 0.3s"}
      m={"4"} 
      css={{"&&:hover":{
  transform:"scale(1.1)"
      },
    }}
      >
        <Image src={img}  width={"10"} height={"10"} alt={"Exchanges"} />
        <Heading size={"md"} noOfLines={1}>
            {symbol}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price? `${currencysymbol}${price}`}</Text>
        </VStack>
    </Link>
);
export default Coinscards;