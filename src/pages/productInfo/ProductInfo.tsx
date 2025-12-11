import { useParams } from "react-router-dom";
import RecommendedDishes from "../../components/product/RecommendedDishes";
import { useEffect } from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { Product } from "../../lib/types/product";
import {
  setChosenProduct,
  setRecommendedProduct,
  setRestaurant,
} from "./slice";
import { Member } from "../../lib/types/member";
import ProductService from "../../services/ProductService";
import MemberService from "../../services/MemberService";
import { useDispatch, useSelector } from "react-redux";
import { retrieveProductInfoPage } from "./selector";
import { serverApi } from "../../lib/config";
import { useApp } from "../../hooks/useApp";

/**Redux Slice & Selector**/
const actionDispatch = (dispatch: Dispatch) => ({
  setRestaurant: (data: Member) => dispatch(setRestaurant(data)),
  setChosenProduct: (data: Product) => dispatch(setChosenProduct(data)),
  setRecommendedProduct: (data: Product[]) =>
    dispatch(setRecommendedProduct(data)),
});

function ProductInfo() {
  const { setChosenProduct, setRestaurant, setRecommendedProduct } =
    actionDispatch(useDispatch());
  const { id } = useParams();
  const { chosenProduct, restaurant } = useSelector(retrieveProductInfoPage);
  const { onAdd } = useApp();

  useEffect(() => {
    if (!id) return;
    const product = new ProductService();
    const member = new MemberService();

    product
      .getProduct(id)
      .then((data) => setChosenProduct(data))
      .catch((err) => console.log(err));

    product
      .getRecommendedProducts(id)
      .then((data) => setRecommendedProduct(data))
      .catch((err) => console.log(err));

    member
      .getRestaurant()
      .then((data) => setRestaurant(data))
      .catch((err) => console.log(err));
  }, []);
  const imagePath = `${serverApi}/${chosenProduct?.productImages[0]}`;
  return (
    <div className="my-20 align-elements">
      <div className="flex gap-14 lg:flex-row flex-col">
        {/* image */}

        <figure className="flex-1 md:m r-5 aspect-[16/9] w-full max-w-[700px] overflow-hidden rounded-2xl">
          <img
            className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
            src={imagePath}
            alt={chosenProduct?.productName}
          />
        </figure>

        {/* info */}
        <div className="flex-1 flex flex-col gap-10 py-5 px-6 bg-card border rounded-2xl shadow">
          {/* main title */}
          <div>
            <h2 className="font-bold text-4xl mb-2">
              {chosenProduct?.productName}
            </h2>
            <p className="text-xs text-primary/60">
              {restaurant?.memberNick} Restaurant
            </p>
          </div>

          {/* rating && view */}
          <div className="flex items-center justify-between">
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  name={`rating-${chosenProduct?._id}`}
                  className="mask mask-star-2 bg-orange-400"
                  aria-label={`${i + 1} star`}
                  defaultChecked={i === 4}
                />
              ))}
            </div>

            <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15a3 3 0 100-6 3 3 0 000 6z"
                />
              </svg>
              <span>{chosenProduct?.productViews} views</span>
            </div>
          </div>

          {/* description */}
          <div>
            <p className="text-primary/90">{chosenProduct?.productDesc}</p>
          </div>
          <hr />
          {/* price */}
          <div className="flex items-center justify-between flex-col sm:flex-row">
            <div className="flex gap-3">
              <h2 className="font-bold text-3xl">Price</h2>
              <h2 className="font-bold text-3xl">
                ${chosenProduct?.productPrice}
              </h2>
            </div>

            <button
              onClick={(e) => {
                onAdd({
                  _id: chosenProduct?._id,
                  quantity: 1,
                  name: chosenProduct?.productName,
                  price: chosenProduct?.productPrice,
                  image: chosenProduct?.productImages[0],
                });
                e.stopPropagation();
                e.preventDefault();
              }}
              className="py-2 px-6 rounded-4xl shadow
               bg-primary text-white font-bold transition-all duration-300
               cursor-pointer hover:scale-105 hover:shadow-xl sm:m-0 mt-4"
            >
              Add to Basket
            </button>
          </div>
        </div>
      </div>

      {/* recommended */}

      <div className="my-20">
        <h2 className="font-bold text-4xl mb-2">Recommended Dishes</h2>
        <RecommendedDishes />
      </div>
    </div>
  );
}

export default ProductInfo;
