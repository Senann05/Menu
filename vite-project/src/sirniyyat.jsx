import './sirniyyat.css';
import sirniyyat from './assets/sirniyyat.png';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

function SweetItem({ name, price, image }) {
  const [clicked, setClicked] = useState(false);
  const { addToCart } = useContext(CartContext); // CartContext-dən səbətə əlavə funksiyasını götürürük

  const handleClick = () => {
    if (!clicked) {
      addToCart({ name, price, image });
    }
    setClicked(true);
  };

  return (
    <div className='pagecatalog'>
      <img src={image} className='imgpagesirniyyat' alt={name} />
      <div className='text-container'>
        <h1>{name}</h1>
        <p>{price} AZN</p>
        <button
          onClick={handleClick}
          style={{ backgroundColor: clicked ? "rgb(40, 225, 40)" : "black" }}
          className='pagesirniyyatBut'
        >
          {clicked ? "Səbətdə" : "Səbətə At"}
        </button>
      </div>
    </div>
  );
}

function Sirniyyat() {
  const sweets = [
    { name: "Paxlava", price: 22, image: sirniyyat },
    { name: "Şəkərbura", price: 22, image: sirniyyat },
    { name: "Qoğal", price: 25, image: sirniyyat },
    { name: "Badambura", price: 27, image: sirniyyat },
    { name: "Banan Şirniyyatı", price: 24, image: sirniyyat },
    { name: "Soci Paxlavası", price: 27, image: sirniyyat },
  ];

  return (
    <>
      <div className='bloklar'>
        <h1 className='pagetortlarh1'>Şirniyyatlar</h1>
        <Link className='link sebetim' to="/sebetim">
          <button className='sebetimbuts'>Səbətim</button>
        </Link>
      </div>
      <div className='containersirniyyat'>
        {sweets.map((sweet, index) => (
          <SweetItem key={index} name={sweet.name} price={sweet.price} image={sweet.image} />
        ))}
      </div>
    </>
  );
}

export default Sirniyyat;




// import './sirniyyat.css';
// import sirniyyat from './assets/sirniyyat.png';
// import { useState } from 'react';
// import {Link} from 'react-router-dom';


// function SweetItem({ name, price }) {
//   const [clicked, setClicked] = useState(false);

//   const handleClick = () => {
//     setClicked(!clicked);
//   };

//   return (
//     <div className='pagecatalog'>
//       <img src={sirniyyat} className='imgpagesirniyyat' alt={name} />
//       <div className='text-container'>
//         <h1>{name}</h1>
//         <p>{price} AZN</p>
//         <button
//           onClick={handleClick}
//           style={{ backgroundColor: clicked ? " rgb(40, 225, 40)" : "black" }}
//           className='pagesirniyyatBut'
//         >
//           {clicked ? "Sebetde" : "Sebete At"}
//         </button>
//       </div>
//     </div>
//   );
// }

// function Sirniyyat() {
//   const sweets = [
//     { name: "Paxlava", price: 22 },
//     { name: "Şəkərbura", price: 22 },
//     { name: "Qoğal", price: 25 },
//     { name: "Badambura", price: 27 },
//     { name: "Banan Şirniyyatı", price: 24 },
//     { name: "Soci Paxlavası", price: 27 },
//   ];

//   return (
//     <>
//       {/* <h1 className='pagesirniyyatlarh1'>Şirniyyatlar</h1> */}
//       <div className='bloklar'><h1 className='pagetortlarh1'>Şirniyyatlar</h1>
//       <Link className='link sebetim' to="/sebetim"><button className='sebetimbuts'>Sebetim</button></Link></div> 
//       <div className='containersirniyyat'>
//         {sweets.map((sweet, index) => (
//           <SweetItem key={index} name={sweet.name} price={sweet.price} />
//         ))}
//       </div>
//     </>
//   );
// }

// export default Sirniyyat;



// import './sirniyyat.css'
// import sirniyyat from './assets/sirniyyat.png'
// import {Link} from 'react-router-dom';

// function Sirniyyat() {
// return(
// <>
//    <h2><h1 className='pagesirniyyatlarh1'>Sirniyyatlar</h1></h2>

//    <div className='containersirniyyat'>
    
//    <div className='pagecatalog'>
//     <img src={sirniyyat} className='imgpagesirniyyat'></img>
//    <div className='text-container'>
//     <h1>Paxlava</h1>
//     <p> 22 AZN</p>
//     <button className='pagesirniyyatBut'>Sebete at</button>
//    </div></div>

//    <div className='pagecatalog'>
//     <img src={sirniyyat} className='imgpagesirniyyat'></img>
//    <div className='text-container'>
//     <h1>Sekerbura</h1>
//     <p> 22 AZN</p>
//     <button className='pagesirniyyatBut'>Sebete at</button>
//    </div></div>

//    <div className='pagecatalog'>
//     <img src={sirniyyat} className='imgpagesirniyyat'></img>
//    <div className='text-container'>
//     <h1>Qogal </h1>
//     <p> 25 AZN</p>
//     <button className='pagesirniyyatBut'>Sebete at</button>
//    </div></div>

//    <div className='pagecatalog'>
//     <img src={sirniyyat} className='imgpagesirniyyat'></img>
//    <div className='text-container'>
//     <h1>Badambura</h1>
//     <p> 27 AZN</p>
//     <button className='pagesirniyyatBut'>Sebete at</button>
//    </div></div>

//    <div className='pagecatalog'>
//     <img src={sirniyyat} className='imgpagesirniyyat'></img>
//    <div className='text-container'>
//     <h1>Banan Sirniyyati</h1>
//     <p> 24 AZN</p>
//     <button className='pagesirniyyatBut'>Sebete at</button>
//    </div></div>

//    <div className='pagecatalog'>
//     <img src={sirniyyat} className='imgpagesirniyyat'></img>
//    <div className='text-container'>
//     <h1>Soci Paxlavasi</h1>
//     <p> 27 AZN</p>
//     <button className='pagesirniyyatBut'>Sebete at</button>
//    </div></div>

// </div>
// </>
// )
// }
// export default Sirniyyat