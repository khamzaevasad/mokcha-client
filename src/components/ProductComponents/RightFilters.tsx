function RightFilters() {
  return (
    <div className="flex justify-end gap-3 top-24 py-2">
      <button className="px-5 py-2 bg-accent text-white cursor-pointer transition-all duration-300 shadow-sm hover:scale-110">
        New
      </button>
      <button className="px-5 py-2 bg-accent text-white cursor-pointer transition-all duration-300 shadow-sm hover:scale-110">
        PRICE
      </button>
      <button className="px-5 py-2 bg-accent text-white cursor-pointer transition-all duration-300 shadow-sm hover:scale-110">
        VIEWS
      </button>
    </div>
  );
}

export default RightFilters;
