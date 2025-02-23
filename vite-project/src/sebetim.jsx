import './sebetim.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

function Sebetim() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Link className='link sebetim' to="/home"><button className='menubut'>Menu</button></Link>

      <div className='sebetimcontainer'>
        <h1 className='sebetimh1'>Sebetim</h1>

        {cart.length === 0 ? (<p className='ulsebet'>Səbət boşdur</p>) : (
          <ul className='ulsebet'>
            {cart.map((item, index) => (
              <li key={index}> {item.name} - {item.price} AZN</li>
            ))}
          </ul>)}

      </div>
    </>
  );
}

export default Sebetim;

//   import './sebetim.css'
//   import tort from './assets/tort.png'
//   import cheesecake from './assets/cheesecake.png'
//   import sirniyyat from './assets/sirniyyat.png'
//   import {Link} from 'react-router-dom';

//   function Sebetim () {
//   return(
//   <>
//   <Link className='link sebetim' to="/home"><button className='menubut'>Menu</button></Link>

//   <div className='sebetimcontainer'>

//   <div>
//   <h1 className='sebetimh1'>Sebetim</h1>

//   </div>



//   </div>
//   </>
//   );
//   }
//   export default Sebetim

//  import './sebetim.css';
//  import { useContext } from 'react';
//  import { CartContext } from './CartContext';
//  import { Link } from 'react-router-dom';

//  function Sebetim() {
//    const { cart } = useContext(CartContext);

//    return (
//      <>
//        <Link className='link sebetim' to="/home">
//          <button className='menubut'>Menu</button>
//        </Link>

//        <div className='sebetimcontainer'>
//          <h1 className='sebetimh1'>Sebetim</h1>
//          {cart.length === 0 ? (
//            <p>Sebetiniz boşdur.</p>
//          ) : (
//            <ul>
//              {cart.map((item, index) => (
//                <li key={index}>
//                  {item.name} - {item.price} AZN
//                </li>
//              ))}
//            </ul>
//          )}
//        </div>
//      </>
//    );
//  }

//  export default Sebetim;