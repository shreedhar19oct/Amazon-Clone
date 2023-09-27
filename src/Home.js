import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className="home_image" src="https://m.media-amazon.com/images/I/81DTLP1joqL._SX3000_.jpg" alt=""/>

        <div className='home_row'>
            <Product 
              id="123456789"
              title="boAt Rockerz 450" 
              price={1499} 
              image='https://m.media-amazon.com/images/I/315vj6oj-FL._SX300_SY300_QL70_FMwebp_.jpg' 
              rating={4}/>
            <Product 
              id="1234567987"
              title="Razer Barracuda Headset" 
              price={13522} 
              image='https://m.media-amazon.com/images/I/51X436-Q9dL._SX300_SY300_QL70_FMwebp_.jpg' 
              rating={5}/>
        </div>

        <div className='home_row'>
            <Product 
              id="123456789"
              title="OnePlus 11 5G" 
              price={9499} 
              image='https://m.media-amazon.com/images/I/41eSQvTbsaL._SX300_SY300_QL70_FMwebp_.jpg' 
              rating={5}/>
            <Product 
              id="123456798"
              title="Oppo A78 5G" 
              price={18999} 
              image='https://m.media-amazon.com/images/I/41yx-OTfNwL._SX300_SY300_QL70_FMwebp_.jpg' 
              rating={5}/>
            <Product 
              id="123456756"
              title="Xiaomi 13 Pro" 
              price={79999} 
              image='https://m.media-amazon.com/images/I/41eB+jXzGsL._SY300_SX300_.jpg' 
              rating={5}/>
        </div>

        <div className='home_row'>
            <Product 
              id="321456789"
              title="Lymio Men T-Shirt" 
              price={349} 
              image='https://m.media-amazon.com/images/I/71AEwEupFuL._UY741_.jpg' 
              rating={4}/>
        </div>

      </div>
    </div>
  )
}

export default Home
