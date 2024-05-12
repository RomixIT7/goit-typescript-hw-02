import { FC } from "react";
import Modal from "react-modal";

import closeIcon from "../../assets/close-icon.svg";

import { ISearchData } from "../../App.types";

import css from "./ImageModal.module.css";

interface ModalStyles {
  overlay: {
    backgroundColor: string;
  };
}

const defaultStyles: ModalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
};

interface ImageModalProps {
  isModalOpen: boolean;
  modalItem: ISearchData;
  closeModal: () => void;
}

const ImageModal: FC<ImageModalProps> = ({
  isModalOpen,
  modalItem: {
    alt_description,
    urls: { regular },
    likes,
    user: { name },
  },
  closeModal,
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className={css.modal}
      style={defaultStyles}
    >
      <button type="button" onClick={closeModal} className={css.closeBtn}>
        <img src={closeIcon} width={20} height={20} />
      </button>
      <img src={regular} alt={alt_description} className={css.img} />
      <p>Author: {name}</p>
      <p>Likes: {likes}</p>
    </Modal>
  );
};

export default ImageModal;
