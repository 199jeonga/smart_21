// Card.js
// import { useState } from 'react';

export default function Card({data}){

  return (
    <li>
      <div  className="img_set" 
            style={ {backgroundColor:data.imgUrl} }>
            {data.imgAlt}
      </div>
      <dl>
        <dt>{data[0].products.product}</dt>
        <dd>{data[0].products.narr}</dd>
      </dl>
      <div className="link">
        <a href={data[0].products.link}>상세보기</a>
      </div>
    </li>
  )
}