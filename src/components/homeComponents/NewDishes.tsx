import FreshMenuCard from "../cards/FreshMenuCard";

function NewDishes() {
  return (
    <div className="align-elements my-20">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-foreground text-4xl font-bold">Fresh Menu</h2>
        <div className="w-[120px] h-px border my-3"></div>
      </div>
      <FreshMenuCard />
    </div>
  );
}

export default NewDishes;
