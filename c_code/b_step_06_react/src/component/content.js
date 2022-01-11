// CardList.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import '../style/CardList.scss';


export default function CardList(){
  // ---------------------------------------------
  const [cardData, setCardData] = useState([]);
  const dataUrl = './data/productData.json';

  useEffect( ()=>{
    axios.get(dataUrl)
    .then(res => setCardData(res.data))
    .catch( console.log )
  }, [])

  // ---------------------------------------------
  return (
    <div className="card_area">
      <h2>card list</h2>
      <p></p>
      <ul className="card_wrap">
        { 
        cardData.map(
          (card) => 
            <Card data={card}
                  key={card.products.product} /> 
          )
        }
      </ul>
    </div>
  )
  // ---------------------------------------------
} // CardList
