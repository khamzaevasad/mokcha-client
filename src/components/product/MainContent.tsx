import { ProductCards, Aside, RightFilters } from "../../pages/index";
function MainContent() {
  return (
    <div className="align-elements flex gap-6 mt-20">
      <Aside />
      <div className="flex-1">
        <RightFilters />
        <ProductCards />
      </div>
    </div>
  );
}

export default MainContent;
