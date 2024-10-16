import { useState, useEffect } from 'react';

const useFetchCats = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchCats = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc'
      );
      const data = await response.json();

      if (data.length === 0) {
        setError('No cats found');
      } else {
        setCats(data);
      }
    } catch (error) {
      setError('Failed to fetch cats');
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchCats();
  }, []); 

  return { cats, loading, error, fetchCats };
};

export default useFetchCats;
