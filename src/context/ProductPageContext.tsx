import { createContext } from "react";
import { ProductInquiry } from "../lib/types/product";

interface ProductPageContextType {
  productSearch: ProductInquiry;
  setProductSearch: React.Dispatch<React.SetStateAction<ProductInquiry>>;
}

export const ProductPageContext = createContext<ProductPageContextType | null>(
  null
);
