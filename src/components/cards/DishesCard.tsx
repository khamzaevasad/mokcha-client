import { dishes } from "../../data/Dishes";

function DishesCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
      {dishes.length > 0 ? (
        dishes.map((dish) => {
          return (
            <div
              key={dish.id}
              className="card bg-card-100  shadow-sm cursor-pointer transition-all duration-400 hover:scale-105 hover:shadow-xl border"
            >
              <figure className="h-56 w-full overflow-hidden">
                <img
                  src={dish.productImg}
                  alt="Shoes"
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
                <div className="card-actions">
                  <div className="py-2 px-5 rounded-4xl bg-muted">
                    {dish.productSize}
                  </div>
                  <div className="py-2 px-5 rounded-4xl bg-muted">
                    $ {dish.productPrice}
                  </div>
                </div>
              </div>
            </div>
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
