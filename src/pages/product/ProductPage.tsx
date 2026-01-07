import { Dispatch } from "@reduxjs/toolkit";
import { MainContent, SearchTitle, Pagination } from "../index";

import { setProducts } from "./slice";
import { Product, ProductInquiry } from "../../lib/types/product";
import { useEffect, useState } from "react";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../lib/enums/product.enum";
import { useDispatch } from "react-redux";
import { ProductPageContext } from "../../context/ProductPageContext";

/**Redux Slice & Selector**/

const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

function ProductPage() {
  const { setProducts } = actionDispatch(useDispatch());
  const [productSearch, setProductSearch] = useState<ProductInquiry>({
    page: 1,
    limit: 6,
    order: "createdAt",
    productCollection: ProductCollection.DISH,
    search: "",
  });

  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts(productSearch)
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productSearch]);

  return (
    <div className="align-elements">
      <ProductPageContext.Provider value={{ productSearch, setProductSearch }}>
        <SearchTitle />
        <MainContent />
        <Pagination />
      </ProductPageContext.Provider>
    </div>
  );
}

export default ProductPage;
