import { useParams } from "react-router-dom";
import { dishes } from "../../data/dishes";

function ProductInfo() {
  const { id } = useParams();

  const product = dishes.find((product) => product.id === Number(id));
  console.log(product);
  return <div>{product?.productName}</div>;
}

export default ProductInfo;
