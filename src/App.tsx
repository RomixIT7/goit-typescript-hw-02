import ReactModal from "react-modal";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import NothingFound from "./components/NothingFound/NothingFound";
import SearchBar from "./components/SearchBar/SearchBar";

import { searchImages } from "./services/api";

import { ISearchData, ISearchResults } from "./App.types";

ReactModal.setAppElement("#root");

const per_page: number = 12;

function App() {
  const [searchData, setSearchData] = useState<ISearchData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalItem, setModalItem] = useState<ISearchData | null>(null);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    async function getInfo() {
      if (query.length === 0) return;
      try {
        setLoading(true);
        const { results, total }: ISearchResults = await searchImages(
          query,
          page,
          per_page
        );
        setTotal(total);
        if (page === 1) {
          setSearchData(results);
        } else {
          setSearchData((prevData) => {
            if (Array.isArray(prevData)) {
              return [...prevData, ...results];
            } else {
              return [...results];
            }
          });
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getInfo();
  }, [query, page]);

  const onSetSearchQuery = (searchInfo: string): void => {
    setQuery(searchInfo);
    setPage(1);
  };

  const onClickLoadMoreBtn = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (searchDataItem: ISearchData): void => {
    setModalItem(searchDataItem);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            backgroundImage: "linear-gradient(darkblue, blue)",
            color: "white",
            fontSize: "24px",
            textAlign: "center",
          },
        }}
        containerStyle={{
          position: "relative",
          top: 80,
        }}
      />
      <SearchBar onSetSearchQuery={onSetSearchQuery} />
      {searchData && (
        <ImageGallery searchData={searchData} openModal={openModal} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {modalItem && (
        <ImageModal
          isModalOpen={isModalOpen}
          modalItem={modalItem}
          closeModal={closeModal}
        />
      )}
      {searchData && total && total > page * per_page && (
        <LoadMoreBtn onClickLoadMoreBtn={onClickLoadMoreBtn} />
      )}
      {searchData && searchData.length === 0 && <NothingFound />}
    </>
  );
}

export default App;
