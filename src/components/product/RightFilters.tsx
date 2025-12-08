import { useContext } from "react";
import { ProductPageContext } from "../../context/ProductPageContext";

function RightFilters() {
  const ctx = useContext(ProductPageContext);
  if (!ctx) return null;
  const { productSearch, setProductSearch } = ctx;

  // classes
  const base =
    "px-5 py-2 bg-accent text-white cursor-pointer transition-all duration-300 shadow-sm hover:scale-110";
  const active = `bg-primary/90 ${base}`;
  const noActive = `bg-accent ${base}`;

  // handler
  const searchOrderHandler = (order: string) => {
    productSearch.page = 1;
    productSearch.order = order;
    setProductSearch((prev) => ({ ...prev, page: 1, order: order }));
  };

  return (
    <div className="flex justify-end gap-3 top-24 py-2">
      <button
        onClick={() => searchOrderHandler("createdAt")}
        className={productSearch.order === "createdAt" ? active : noActive}
      >
        New
      </button>
      <button
        onClick={() => searchOrderHandler("productPrice")}
        className={productSearch.order === "productPrice" ? active : noActive}
      >
        PRICE
      </button>
      <button
        onClick={() => searchOrderHandler("productViews")}
        className={productSearch.order === "productViews" ? active : noActive}
      >
        VIEWS
      </button>
    </div>
  );
}

export default RightFilters;
