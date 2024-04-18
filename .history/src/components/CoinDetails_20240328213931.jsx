import { Container, Box } from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { server } from '../main';
import Loader from './Loader';

const CoinDetails = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState('pkr');

  const params = useParams();

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        if (params.id) {
          const { data } = await axios.get(`${server}/coins/${params.id}`);
          setCoin(data);
        } else {
          setError(true); // Handle error when params.id is undefined
          setLoading(false);
        }
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    fetchCoin();
  }, [params.id]);

  return (
    <Container maxW={'container.xl'}>
      {loading ? (
        <Loader />
      ) : (
        <Box w={'full'} borderWidth={'1'}>
          {/* Render coin details here */}
        </Box>
      )}
    </Container>
  );
};

export default CoinDetails;
