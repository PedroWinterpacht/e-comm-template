import Logo from './pictures/logo.png';
import './App.css';
import ProductCard from './components/product/Product.tsx';

function App() {
  
  return(
    <>
    <div id='header'>
      <input type='text' id='searchHeader' placeholder='Search for an Item'></input>
      <button id='hBtn1'>New Products</button>
      <button id='hBtn2'>Deals</button>
      <button id='hBtn3'>News</button>
      <button id='hBtn4'>About Us</button>
      <button id='hBtn5'>Sign in / Sign up</button>
      <button id='hBtn6'>Check Out</button>
      <img src={Logo} id='hLogo'></img>
    </div>
    <div id='main'>
      <div id='leftTab'>
        <h5>Filters</h5>
        <br/>
        <h5>Filter by Type</h5>
      </div>

      <div id='rightTab'>
        <h2>Top Selling Items</h2>
        <ProductCard/>
      </div>

    </div>
    </>
  )
}

export default App;
