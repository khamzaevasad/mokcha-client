function SearchTitle() {
  return (
    <div className="align-elements my-20">
      <div className="md:flex-row flex items-center justify-between flex-col">
        <h2 className="text-3xl font-bold">Our Menu</h2>
        <div>
          <label className="input border rounded-2xl min-w-[400px] md:m-0 mt-6">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default SearchTitle;
