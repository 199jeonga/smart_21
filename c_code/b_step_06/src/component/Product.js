// Product.js
import React from 'react';
import '../style/Product.scss';

const poCon =   {
  "pageTitle" : "cofee",
  "pageContent" : "coffee 내용에 따른 설명",
  "products": [
    { "product":"espresso"   , "narr": "espresso 설명" },
    { "product":"americano"  , "narr": "아메리카노 설명" },
    { "product":"latte"      , "narr": "latte 설명" },
    { "product":"cafe mocca" , "narr": "cafe mocca 설명" },
    { "product":"apogato"    , "narr": "apogato 설명" }
  ]
}

export default function Product() {
  return (
    <div className='product_area'>
      <h2>product 상품 페이지</h2>
      <p>Qui ex irure adipisicing labore est dolor id laborum aliquip labore velit.</p>

      <ul>
        {
          
        }
      </ul>

    </div>
  )
}



