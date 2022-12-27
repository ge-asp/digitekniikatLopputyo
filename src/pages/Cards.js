import {useState} from 'react';
import axios from 'axios';

const Cards = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');



  //alustetaan satunnaisen kortin haku
  const handleClick = async () => {
    setIsLoading(true);
    try {
      const {data} = await axios.get('https://api.scryfall.com/cards/random', {
        headers: {
          Accept: 'application/json',
        },
      });

      setData(data);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (

    //nappia painamalla haetaan APIsta satunnain Magic the gathering kortti
    <div>
      {err && <h2>{err}</h2>}
      
      <button onClick={handleClick}>Random card</button>
    
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            <div>
                <h2>{data.name}</h2>
                 {data.image_uris ? <img src={data.image_uris.normal} alt={data.name}></img> : <p>Click the button to generate a random card!</p>}      
                
            </div>
          )}  
    </div>
  );
};

export default Cards;
