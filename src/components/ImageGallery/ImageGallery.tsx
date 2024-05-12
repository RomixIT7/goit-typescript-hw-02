import { FC } from "react";

import { ISearchData } from "../../App.types";

import ImageCard from "../ImageCard/ImageCard";

import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  searchData: ISearchData[];
  openModal: (searchDataItem: ISearchData) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ searchData, openModal }) => {
  return (
    <ul className={css.imageList}>
      {Array.isArray(searchData) &&
        searchData.map((searchDataItem) => {
          return (
            <ImageCard
              key={searchDataItem.id}
              searchDataItem={searchDataItem}
              openModal={openModal}
            />
          );
        })}
    </ul>
  );
};

export default ImageGallery;
