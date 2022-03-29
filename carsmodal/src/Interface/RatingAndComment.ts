
export interface Rating {
  Type: string;
  Rating: number;
  color: string;
}

export interface CustomerRating {
  name: string;
  stars: number;
  mainComment: string;
  rating: Rating[];
  comment: string;
  purchase: string;
  drivenFor: string;
}

export interface RatingAndComment {
  avgRating: number;
  toatalRating: number;
  totalRiviews: number;
  avgCircleRating: Rating[];
  customerRatings: CustomerRating[];
}
