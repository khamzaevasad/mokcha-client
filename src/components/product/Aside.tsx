import { useContext } from "react";
import { ProductPageContext } from "../../context/ProductPageContext";
import { ProductCollection } from "../../lib/enums/product.enum";

function Aside() {
  const ctx = useContext(ProductPageContext);
  if (!ctx) return null;
  const { productSearch, setProductSearch } = ctx;

  // classes
  const base =
    "h-24 w-10 cursor-pointer text-white font-bold shadow-sm hover:scale-110 transition-all duration-300 [writing-mode:vertical-rl] rotate-180";
  const noActive = `bg-accent ${base}`;
  const active = `bg-primary/90 ${base}`;

  // categories
  const categories = [
    ProductCollection.DISH,
    ProductCollection.SALAD,
    ProductCollection.DRINK,
    ProductCollection.DESSERT,
    ProductCollection.OTHER,
  ];

  // Handlers
  const searchCollectionHandler = (collection: ProductCollection) => {
    productSearch.page = 1;
    productSearch.productCollection = collection;
    setProductSearch((prev) => ({
      ...prev,
      page: 1,
      productCollection: collection,
    }));
  };
  return (
    <aside className="hidden sm:flex flex-col gap-4 sticky top-24 mt-20">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => searchCollectionHandler(cat)}
          className={
            productSearch.productCollection === cat ? active : noActive
          }
        >
          {cat}
        </button>
      ))}
    </aside>
  );
}

export default Aside;
