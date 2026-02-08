import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import { products } from "./data/products";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Product Showcase</h1>
        <p>Discover our amazing products</p>
      </header>

      <main className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </main>
    </div>
  )
}

export default App;
