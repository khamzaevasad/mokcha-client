import { useContext, useEffect, useState } from "react";
import { ProductPageContext } from "../../context/ProductPageContext";

function SearchTitle() {
  const ctx = useContext(ProductPageContext);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    if (!ctx) return;
    const delay = setTimeout(() => {
      ctx.setProductSearch((prev) => ({
        ...prev,
        search: searchText,
      }));
    }, 500);
    return () => clearTimeout(delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <div className="align-elements my-20">
      <div className="md:flex-row flex items-center justify-between flex-col">
        <h2 className="text-3xl font-bold">Our Menu</h2>
        <div>
          {/* searchInput */}
          <div className="md:m-0 mt-4 relative w-full max-w-md ">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              type="text"
              placeholder="Search..."
              className="w-full bg-white border border-gray-300 rounded-2xl py-3 pl-5 pr-12 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
            />

            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl hover:bg-gray-100 active:scale-95 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-gray-500"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchTitle;
