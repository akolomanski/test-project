export interface Product {
  image: "https://loremflickr.com/240/160";
  name: "Yellow hat";
  price: ProductPrice;
  amount: 120;
  rating: 5;
  badges: ProductBadges;
  addedToWishlist: false;
}

export interface ProductPrice {
  regular: number;
  current: number;
}

export interface ProductBadges {
  newProduct: boolean;
  collectionSale: boolean;
  lastItems: boolean;
}

export interface ProductData {
  productOfTheDay: Product;
  bestSales: [Product];
  recommendedForYou: [Product];
}
