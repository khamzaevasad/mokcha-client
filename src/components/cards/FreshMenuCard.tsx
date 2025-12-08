import { useSelector } from "react-redux";
import { retrieveHomePage } from "../../pages/home/selector";
import { serverApi } from "../../lib/config";
import { ProductCollection } from "../../lib/enums/product.enum";

function FreshMenuCard() {
  const { newDishes } = useSelector(retrieveHomePage);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
      {newDishes.length > 0 ? (
        newDishes.map((menu) => {
          const imagePath = `${serverApi}/${menu.productImages[0]}`;
          const sizeVolume =
            menu.productCollection === ProductCollection.DRINK
              ? menu.productVolume + " liter"
              : "Size: " + menu.productSize.toLocaleLowerCase();
          return (
            <div
              key={menu._id}
              className="card bg-card-100 shadow-sm cursor-pointer transition-all duration-400 hover:scale-105 hover:shadow-xl border relative"
            >
              {/* "NEW" label */}
              <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md z-10">
                NEW
              </div>

              {/* Image */}
              <figure className="h-56 w-full overflow-hidden relative">
                <img
                  src={imagePath}
                  alt={menu.productName}
                  className="object-cover w-full h-full"
                />
              </figure>

              {/* Card Body */}
              <div className="card-body">
                {/* Title and Rating */}
                <div className="flex justify-between items-center">
                  <h2 className="card-title text-lg font-semibold">
                    {menu.productName}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {menu.productDesc}
                </p>

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
                  <span>{menu.productViews} views</span>
                </div>

                {/* Price and Size */}
                <div className="card-actions mt-3">
                  <div className="py-2 px-5 rounded-4xl bg-muted text-sm font-medium">
                    {sizeVolume}
                  </div>
                  <div className="py-2 px-5 rounded-4xl bg-muted text-sm font-semibold">
                    ${menu.productPrice}
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

export default FreshMenuCard;
