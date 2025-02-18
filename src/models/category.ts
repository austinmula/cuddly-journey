
export interface Category {
  _id: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  title: string;
}
