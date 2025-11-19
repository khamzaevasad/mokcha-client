function Aside() {
  return (
    <aside className="flex flex-col gap-4 sticky top-24 mt-20">
      <button className="h-24 w-10 bg-accent cursor-pointer  text-white font-bold shadow-sm hover:scale-110 transition-all duration-300 [writing-mode:vertical-rl] rotate-180">
        DISH
      </button>

      <button className="h-24 w-10 bg-accent cursor-pointer text-white font-bold shadow-sm hover:scale-110 transition-all duration-300 [writing-mode:vertical-rl] rotate-180">
        SALAD
      </button>

      <button className="h-24 w-10 bg-accent cursor-pointer text-white font-bold shadow-sm hover:scale-110 transition-all duration-300 [writing-mode:vertical-rl] rotate-180">
        DRINK
      </button>

      <button className="h-24 w-10 bg-accent cursor-pointer text-white font-bold shadow-sm hover:scale-110 transition-all duration-300 [writing-mode:vertical-rl] rotate-180">
        DESSERT
      </button>

      <button className="h-24 w-10 bg-accent cursor-pointer text-white font-bold shadow-sm hover:scale-110 transition-all duration-300 [writing-mode:vertical-rl] rotate-180">
        OTHER
      </button>
    </aside>
  );
}

export default Aside;
