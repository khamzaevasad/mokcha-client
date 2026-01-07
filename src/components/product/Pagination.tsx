import { useContext } from "react";
import { ProductPageContext } from "../../context/ProductPageContext";
import { retrieveProductPage } from "../../pages/product/selector";
import { useSelector } from "react-redux";

function Pagination() {
  const { products } = useSelector(retrieveProductPage);
  const ctx = useContext(ProductPageContext);
  if (!ctx) return null;
  const { productSearch, setProductSearch } = ctx;

  // handler
  const isNextDisabled = products.length < productSearch.limit;
  const nextPage = () => {
    setProductSearch({ ...productSearch, page: productSearch.page + 1 });
  };
  const isPrevDisabled = productSearch.page === 1;
  const previousPage = () => {
    setProductSearch((prev) => ({ ...prev, page: prev.page - 1 }));
  };

  return (
    <div className="flex items-center justify-center mb-6">
      <div className="join flex gap-0.5">
        <button
          disabled={isPrevDisabled}
          onClick={previousPage}
          className="join-item btn border-0 shadow-xs bg-accent disabled:bg-accent/50 disabled:cursor-not-allowed text-white"
        >
          «
        </button>
        <button className="join-item btn border-0 shadow-xs bg-accent text-white">
          Page {productSearch.page}
        </button>
        <button
          disabled={isNextDisabled}
          onClick={nextPage}
          className="join-item btn border-0 shadow-xs bg-accent disabled:bg-accent/50 disabled:cursor-not-allowed text-white"
        >
          »
        </button>
      </div>
    </div>
  );
}

export default Pagination;
