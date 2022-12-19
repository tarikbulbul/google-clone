import { useState, useEffect} from 'react'
import API_KEY from './keys';

const CONTEXT_KEY = 'd70bb60628bab4911';

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
        .then((response) => response.json())
        .then((result) => {
            setData(result);
        });
    };

    fetchData()
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, {term});

  return { data };
};

export default useGoogleSearch;