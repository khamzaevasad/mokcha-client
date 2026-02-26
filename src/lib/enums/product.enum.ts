export const ProductSize = {
  SMALL: "SMALL",
  NORMAL: "NORMAL",
  LARGE: "LARGE",
  SET: "SET",
} as const;

export type ProductSize = (typeof ProductSize)[keyof typeof ProductSize];

export const ProductVolume = {
  HALF: 0.5,
  ONE: 1,
  ONE_POINT_TWO: 1.2,
  ONE_POINT_FIVE: 1.5,
  TWO: 2,
} as const;

export type ProductVolume = (typeof ProductVolume)[keyof typeof ProductVolume];

export const ProductStatus = {
  PAUSE: "PAUSE",
  PROCESS: "PROCESS",
  DELETE: "DELETE",
} as const;

export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus];

export const ProductCollection = {
  DISH: "DISH",
  SALAD: "SALAD",
  DESSERT: "DESSERT",
  DRINK: "DRINK",
  OTHER: "OTHER",
} as const;

export type ProductCollection =
  (typeof ProductCollection)[keyof typeof ProductCollection];
