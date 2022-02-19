export type Experience = {
  imgUrl: string;
  status: "Sold Out" | "Available" | "Online";
  rating: number;
  numberOfRatings: number;
  shortDescription: string;
  location: string;
  pricing: {
    unit: string;
    price: number;
    currency: string;
  };
};
