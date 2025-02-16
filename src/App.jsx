import Header from "./components/Header";
import ProductDescriptions from "./components/ProductDescriptions";
import ProductImages from "./components/ProductImages";
import ProductAdd from "./components/ProductAdd";

function App() {
  return (
    <div className="contain flex flex-col  items-center gap-8 bg-white dark:bg-black dark:text-white">
      <Header />
      <div className="main flex flex-row px-40 py-16 gap-28">
        <ProductImages />
        <div className="w-1/2">
          <ProductDescriptions />
          <ProductAdd />
        </div>
      </div>
    </div>
  );
}

export default App;
