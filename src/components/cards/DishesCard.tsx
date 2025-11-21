import { NavLink } from "react-router-dom";
import { dishes } from "../../data/dishes";

function DishesCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
      {dishes.length > 0 ? (
        dishes
          .sort(() => Math.random() - 0.4)
          .slice(0, 4)
          .map((dish) => {
            return (
              <NavLink
                to={`/product/${dish.id}`}
                key={dish.id}
                className="card bg-card-100  shadow-sm cursor-pointer transition-all duration-400 hover:scale-105 hover:shadow-xl border relative group"
              >
                <figure className="h-56 w-full overflow-hidden">
                  <img
                    src={dish.productImg}
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
                          name={`rating-${dish.id}`}
                          className="mask mask-star-2 bg-orange-400"
                          aria-label={`${i + 1} star`}
                          defaultChecked={i === 4}
                        />
                      ))}
                    </div>
                  </div>
                  <p>{dish.productDesc}</p>
                  <div className="card-actions  opacity-100 group-hover:opacity-0">
                    <div className="py-2 px-5 rounded-4xl bg-muted">
                      Size: {dish.productSize}
                    </div>
                    <div className="py-2 px-5 rounded-4xl bg-muted font-semibold">
                      $ {dish.productPrice}
                    </div>
                  </div>

                  <button
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 py-2 px-6 rounded-4xl
               bg-primary text-white font-bold transition-all duration-300
               opacity-0 group-hover:opacity-100 cursor-pointer"
                  >
                    Add to Basket
                  </button>
                </div>
              </NavLink>
            );
          })
      ) : (
        <div className="grid place-items-center min-h-[400px] col-span-full">
          <h3 className="text-center font-bold text-3xl text-error">
            products are not available
          </h3>
        </div>
      )}
    </div>
  );
}

export default DishesCard;
