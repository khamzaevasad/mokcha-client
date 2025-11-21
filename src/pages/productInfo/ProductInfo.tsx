import { useParams } from "react-router-dom";
import { dishes } from "../../data/dishes";
import RecommendedDishes from "../../components/product/RecommendedDishes";

function ProductInfo() {
  const { id } = useParams();

  const product = dishes.find((product) => product.id === Number(id));
  console.log(product);
  return (
    <div className="my-20 align-elements">
      <div className="flex gap-14 lg:flex-row flex-col">
        {/* image */}

        <figure className="flex-1 md:m r-5 aspect-[16/9] w-full max-w-[700px] overflow-hidden rounded-2xl">
          <img
            className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
            src={product?.productImg}
            alt={product?.productName}
          />
        </figure>

        {/* info */}
        <div className="flex-1 flex flex-col gap-10 py-5 px-6 bg-base-200 border rounded-2xl shadow">
          {/* main title */}
          <div>
            <h2 className="font-bold text-4xl mb-2">{product?.productName}</h2>
            <p className="text-xs text-primary/60">MOKCHA Restaurant</p>
          </div>

          {/* rating && view */}
          <div className="flex items-center justify-between">
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  name={`rating-${product?.id}`}
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
              <span>{product?.views} views</span>
            </div>
          </div>

          {/* description */}
          <div>
            <p className="text-primary/90">{product?.productDesc}</p>
          </div>
          <hr />
          {/* price */}
          <div className="flex items-center justify-between flex-col sm:flex-row">
            <div className="flex gap-3">
              <h2 className="font-bold text-3xl">Price</h2>
              <h2 className="font-bold text-3xl">${product?.productPrice}</h2>
            </div>

            <button
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
