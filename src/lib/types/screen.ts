import { Member } from "./member";
import { Product } from "./product";

/** REACT APP STATE **/

export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState;
  productInfoPage: ProductInfoPageState;
}

/** Home page **/

export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/** Product page **/
export interface ProductsPageState {
  restaurant: Member | null;
  products: Product[];
}

export interface ProductInfoPageState {
  chosenProduct: Product | null;
  recommendedProduct: Product[];
}

/** Order page **/
