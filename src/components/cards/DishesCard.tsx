import { NavLink } from "react-router-dom";
import { retrieveHomePage } from "../../pages/home/selector";
import { useSelector } from "react-redux";
import { serverApi } from "../../lib/config";
import { PackageX } from "lucide-react";
import { ProductCollection } from "../../lib/enums/product.enum";

function DishesCard() {
  const { popularDishes } = useSelector(retrieveHomePage);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
      {popularDishes.length > 0 ? (
        popularDishes.map((dish) => {
          const imagePath = `${serverApi}/${dish.productImages[0]}`;
          const sizeVolume =
            dish.productCollection === ProductCollection.DRINK
              ? dish.productVolume + " liter"
              : "Size: " + dish.productSize.toLocaleLowerCase();
          return (
            <NavLink
              to={`/product/${dish._id}`}
              key={dish._id}
              className="card bg-card-100  shadow-sm cursor-pointer transition-all duration-400 hover:scale-105 hover:shadow-xl border relative group"
            >
              <figure className="h-56 w-full overflow-hidden">
                <img
                  src={imagePath}
                  alt={dish.productName}
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <h2 className="card-title">{dish.productName}</h2>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <input
                        key={i}
                        type="radio"
                        name={`rating-${dish._id}`}
                        className="mask mask-star-2 bg-orange-400"
                        aria-label={`${i + 1} star`}
                        defaultChecked={i === 4}
                      />
                    ))}
                  </div>
                </div>
                <p>{dish.productDesc}</p>

                {/* Views */}
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
                  <span>{dish.productViews} views</span>
                </div>

                <div className="card-actions mt-3">
                  <div className="py-2 px-5 rounded-4xl bg-muted">
                    {sizeVolume}
                  </div>
                  <div className="py-2 px-5 rounded-4xl bg-muted font-semibold">
                    $ {dish.productPrice}
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })
      ) : (
        <div className="grid place-items-center min-h-[400px] col-span-full">
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-48 h-48 mb-6 opacity-60 flex items-center justify-center">
              <PackageX className="w-24 h-24 text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No Popular Dishes
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default DishesCard;
