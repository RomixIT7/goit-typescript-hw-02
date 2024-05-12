import { FC } from "react";

import { ISearchData } from "../../App.types";

import css from "./ImageCard.module.css";

interface ImageCardProps {
  searchDataItem: ISearchData;
  openModal: (searchDataItem: ISearchData) => void;
}

const ImageCard: FC<ImageCardProps> = ({ searchDataItem, openModal }) => {
  const {
    alt_description,
    urls: { small },
    likes,
    user: { name },
  } = searchDataItem;
  return (
    <li className={css.card}>
      <img
        className={css.cardImg}
        src={small}
        alt={alt_description}
        onClick={() => openModal(searchDataItem)}
      />
      <p>Author: {name}</p>
      <p>Likes: {likes}</p>
    </li>
  );
};

export default ImageCard;
