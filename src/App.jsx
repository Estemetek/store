import { useState } from 'react';
import './App.css';
import FilterProductTable from './components/FilterProductTable';
import ProductTable from './components/ProductTable';
import SearchBar from './components/SearchBar';

const products = [
  //sporting goods
  {name: "Tennis", price: 99.9, type: 1},
  {name: "Badminton", price: 59.9, type: 1},
  {name: "Basketball", price: -100, type: 1},

  //electronics
  {name: "IPd Touch", price: 99.9, type: 2},
  {name: "Iphone 5", price: 399.9, type: 2},
  {name: "Nexus 7", price: 199.9, type: 2}
]

const headers = ["Sporting Goods", "Electronics"]

function App() {
  const [query, setQuery] = useState("");
  const filteredProducts = products.filter((product) => 
    product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );


  return(
    <FilterProductTable>
      <SearchBar query={query} setQuery={setQuery}/> 
      <ProductTable headers={headers} products={filteredProducts}/>
    </FilterProductTable>
  );
}

export default App
