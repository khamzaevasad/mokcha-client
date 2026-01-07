import DishesCard from "../cards/DishesCard";

function PopularDishes() {
  return (
    <div className="align-elements my-20">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-foreground text-4xl font-bold">Popular Dishes</h2>
        <div className="w-[120px] h-px border my-3"></div>
      </div>
      <DishesCard />
    </div>
  );
}

export default PopularDishes;
