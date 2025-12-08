import { Dispatch } from "@reduxjs/toolkit";
import { MainContent, SearchTitle, Pagination } from "../index";
import { Member } from "../../lib/types/member";
import { setProducts, setRestaurant } from "./slice";
import { Product } from "../../lib/types/product";
import { useEffect } from "react";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../lib/enums/product.enum";
import { useDispatch } from "react-redux";

/**Redux Slice & Selector**/

const actionDispatch = (dispatch: Dispatch) => ({
  setRestaurant: (data: Member) => dispatch(setRestaurant(data)),
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

function ProductPage() {
  const { setProducts } = actionDispatch(useDispatch());
  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 6,
        order: "createdAt",
        productCollection: ProductCollection.DISH,
        search: "",
      })
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="align-elements">
      <SearchTitle />
      <MainContent />
      <Pagination />
    </div>
  );
}

export default ProductPage;
