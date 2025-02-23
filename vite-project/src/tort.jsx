import './tort.css';
import tort from './assets/tort.png';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

function CakeItem({ name, price }) {
  const [clicked, setClicked] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleClick = () => {
    setClicked(true); 
    addToCart({ name, price, image: tort });
  };

  return (
    <div className='pagecatalog'>
      <img src={tort} className='imgpagetort' alt={name} />
      <div className='text-container'>
        <h1>{name}</h1>
        <p>1kq {price} AZN</p>
        <button
          onClick={handleClick}
          style={{ backgroundColor: clicked ? "rgb(40, 225, 40)" : "black" }}
          className='pageTortBut'
          disabled={clicked}
        >
          {clicked ? "Sebetde" : "Sebete At"}
        </button>
      </div>
    </div>
  );
}

function Tort() {
  const cakes = [
    { name: "Spartak Tortu", price: 22 },
    { name: "Ballı Tort", price: 22 },
    { name: "Napalyon Tortu", price: 25 },
    { name: "Abşeron Tortu", price: 24 },
    { name: "Nağıl Tortu", price: 25 },
    { name: "Truffle Tortu", price: 22 },
    { name: "Quş Südü", price: 28 },
    { name: "Snickers Tortu", price: 27 },
    { name: "Mars Tortu", price: 27 },
    { name: "Bounty Tortu", price: 27 },
  ];

  return (
    <>
      <div className='bloklar'>
        <h1 className='pagetortlarh1'>Tortlar</h1>
        <Link className='link sebetim' to="/sebetim">
          <button className='sebetimbut'>Sebetim</button>
        </Link>
      </div>
      <div className='containerTort'>
        {cakes.map((cake, index) => (
          <CakeItem key={index} name={cake.name} price={cake.price} />
        ))}
      </div>
    </>
  );
}

export default Tort;







// import './tort.css';
// import tort from './assets/tort.png';
// import { useState } from 'react';
// import {Link} from 'react-router-dom';

// function CakeItem({ name, price }) {
//   const [clicked, setClicked] = useState(false);

//   const handleClick = () => {
//     setClicked(!clicked);
//   };

//   return (
//     <div className='pagecatalog'>
//       <img src={tort} className='imgpagetort' alt={name} />
//       <div className='text-container'>
//         <h1>{name}</h1>
//         <p>1kq {price} AZN</p>
//         <button
//           onClick={handleClick}
//           style={{ backgroundColor: clicked ? "rgb(40, 225, 40)" : "black" }}
//           className='pageTortBut'
//         >
//           {clicked ? "Sebetde" : "Sebete At"}
//         </button>
//       </div>
//     </div>
//   );
// }
// function Tort() {
//   const cakes = [
//     { name: "Spartak Tortu", price: 22 },
//     { name: "Ballı Tort", price: 22 },
//     { name: "Napalyon Tortu", price: 25 },
//     { name: "Abşeron Tortu", price: 24 },
//     { name: "Nağıl Tortu", price: 25 },
//     { name: "Truffle Tortu", price: 22 },
//     { name: "Quş Südü", price: 28 },
//     { name: "Snickers Tortu", price: 27 },
//     { name: "Mars Tortu", price: 27 },
//     { name: "Bounty Tortu", price: 27 },
//   ];

//   return (
//     <>
        
//      <div className='bloklar'><h1 className='pagetortlarh1'>Tortlar</h1>
//      <Link className='link sebetim' to="/sebetim"><button className='sebetimbut'>Sebetim</button></Link></div> 
//       <div className='containerTort'>
//         {cakes.map((cake, index) => (
//           <CakeItem key={index} name={cake.name} price={cake.price} />
//         ))}
    
//       </div>
    
//     </>
//   );
// }

// export default Tort;




// // // import './tort.css'
// // // import tort from './assets/tort.png'
// // // import { useState } from 'react'

// // // function Tort() {
// // //    const [clicked, setClicked] = useState(true);

   
// // //    const hanleClick = () => {
// // //       setClicked(!clicked);
// // //    };
   
// // // return(
// // // <>
// // //    <h2><h1 className='pagetortlarh1'>Tortlar</h1></h2>

// // //    <div className='containerTort'>
    
// // //    <div className='pagecatalog'>
// // //     <img src={tort} className='imgpagetort'></img>
// // //    <div className='text-container'>
// // //     <h1>Spartak Tortu</h1>
// // //     <p>1kq 22 AZN</p>
// // //     <button onClick={hanleClick} style={{backgroundColor: clicked? "black": "green"}} className='pageTortBut'>{clicked? "Sebete At" : "Sebetde"}</button>
// // //    </div></div>

// // //    <div className='pagecatalog'>
// // //     <img src={tort} className='imgpagetort'></img>
// // //    <div className='text-container'>
// // //     <h1>Balli Tortu</h1>
// // //     <p>1kq 22 AZN</p>
// // //     <button onClick={hanleClick} style={{backgroundColor: clicked? "black": "green"}} className='pageTortBut'>{clicked? "Sebete At" : "Sebetde"}</button>
// // //    </div></div>

// // //    <div className='pagecatalog'>
// // //     <img src={tort} className='imgpagetort'></img>
// // //    <div className='text-container'>
// // //     <h1>Napalyon Tortu</h1>
// // //     <p>1kq 25 AZN</p>
// // //     <button onClick={hanleClick} style={{backgroundColor: clicked? "black": "green"}} className='pageTortBut'>{clicked? "Sebete At" : "Sebetde"}</button>
// // //    </div></div>

// // //    <div className='pagecatalog'>
// // //     <img src={tort} className='imgpagetort'></img>
// // //    <div className='text-container'>
// // //     <h1>Abseron Tortu</h1>
// // //     <p>1kq 24 AZN</p>
// // //     <button onClick={hanleClick} style={{backgroundColor: clicked? "black": "green"}} className='pageTortBut'>{clicked? "Sebete At" : "Sebetde"}</button>
// // //    </div></div>

// // //    <div className='pagecatalog'>
// // //     <img src={tort} className='imgpagetort'></img>
// // //    <div className='text-container'>
// // //     <h1>Nagil Tortu</h1>
// // //     <p>1kq 25 AZN</p>
// // //     <button onClick={hanleClick} style={{backgroundColor: clicked? "black": "green"}} className='pageTortBut'>{clicked? "Sebete At" : "Sebetde"}</button>
// // //    </div></div>

// // //    <div className='pagecatalog'>
// // //     <img src={tort} className='imgpagetort'></img>
// // //    <div className='text-container'>
// // //     <h1>Tryufel Tortu</h1>
// // //     <p>1kq 22 AZN</p>
// // //     <button onClick={hanleClick} style={{backgroundColor: clicked? "black": "green"}} className='pageTortBut'>{clicked? "Sebete At" : "Sebetde"}</button>
// // //    </div></div>

// // //    <div className='pagecatalog'>
// // //     <img src={tort} className='imgpagetort'></img>
// // //    <div className='text-container'>
// // //     <h1>Qus Sudu</h1>
// // //     <p>1kq 28 AZN</p>
// // //     <button onClick={hanleClick} style={{backgroundColor: clicked? "black": "green"}} className='pageTortBut'>{clicked? "Sebete At" : "Sebetde"}</button>
// // //    </div></div>

// // //    <div className='pagecatalog'>
// // //     <img src={tort} className='imgpagetort'></img>
// // //    <div className='text-container'>
// // //     <h1>Snickers Tortu</h1>
// // //     <p>1kq 27 AZN</p>
// // //     <button onClick={hanleClick} style={{backgroundColor: clicked? "black": "green"}} className='pageTortBut'>{clicked? "Sebete At" : "Sebetde"}</button>
// // //    </div></div>

// // //    <div className='pagecatalog'>
// // //     <img src={tort} className='imgpagetort'></img>
// // //    <div className='text-container'>
// // //     <h1>Mars Tortu</h1>
// // //     <p>1kq 27 AZN</p>
// // //     <button onClick={hanleClick} style={{backgroundColor: clicked? "black": "green"}} className='pageTortBut'>{clicked? "Sebete At" : "Sebetde"}</button>
// // //    </div></div> 

// // //    <div className='pagecatalog'>
// // //     <img src={tort} className='imgpagetort'></img>
// // //    <div className='text-container'>
// // //     <h1>Bounty Tortu</h1>
// // //     <p>1kq 27 AZN</p>
// // //     <button onClick={hanleClick} style={{backgroundColor: clicked? "black": "green"}} className='pageTortBut'>{clicked? "Sebete At" : "Sebetde"}</button>
// // //    </div></div>

// // // </div>
// // // </>
// // // )
// // // }
// // // export default Tort