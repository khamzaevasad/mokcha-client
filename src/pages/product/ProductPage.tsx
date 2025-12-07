import { MainContent, SearchTitle, Pagination } from "../index";

function ProductPage() {
  return (
    <div className="align-elements">
      <SearchTitle />
      <MainContent />
      <Pagination />
    </div>
  );
}

export default ProductPage;
