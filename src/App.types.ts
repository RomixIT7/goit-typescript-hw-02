export interface ISearchData {
  id: number;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  likes: number;
  user: { name: string };
}

export interface ISearchResults {
  results: ISearchData[];
  total: number;
}
