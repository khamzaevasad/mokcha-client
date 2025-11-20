function Statistics() {
  return (
    <div className="py-10 bg-card shadow">
      <div className="flex items-center justify-between align-elements md:flex-row flex-col">
        <div className="flex items-center justify-center flex-col">
          <h3 className="text-accent font-bold md:text-6xl text-4xl">12</h3>
          <p className="text-primary text-xl mt-2">Restaurant</p>
        </div>

        <div className="border border-accent md:h-28 md:w-px md:m-0 h-px w-32 my-4"></div>

        <div className="flex items-center justify-center flex-col">
          <h3 className="text-accent font-bold md:text-6xl text-4xl">200+</h3>
          <p className="text-primary text-xl mt-2">Clients</p>
        </div>
        <div className="border border-accent md:h-28 md:w-px md:m-0 h-px w-32 my-4"></div>
        <div className="flex items-center justify-center flex-col">
          <h3 className="text-accent font-bold md:text-6xl text-4xl">50+</h3>
          <p className="text-primary text-xl mt-2">Menu</p>
        </div>
        <div className="border border-accent md:h-28 md:w-px md:m-0 h-px w-32 my-4"></div>
        <div className="flex items-center justify-center flex-col">
          <h3 className="text-accent font-bold md:text-6xl text-4xl">8</h3>
          <p className="text-primary text-xl mt-2">Experience</p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
