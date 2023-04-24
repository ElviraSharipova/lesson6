import React, { useEffect, useState } from 'react'

export default function Products() {

const [pr, setPr] = useState([]);


  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd8fc1d850dmsha5a022c62c586f6p106cbcjsnf6e37576149e',
        'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
      }
    };
    
    fetch('https://pizzaallapala.p.rapidapi.com/productos', options)
      .then(response => response.json())
      .then(response => {setPr(response.productos); console.log(response.productos)
        })
      .catch(err => console.error(err));
  })
  return (


    <>
     <div>Products</div>

        <div>
       
          <ul>
              {  pr.map((el)=>{ return <li> Название: {el.nombre}       </li>      })    }
          </ul>
        </div>
    </>
   
  )
}
