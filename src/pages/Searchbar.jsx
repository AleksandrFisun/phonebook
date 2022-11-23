import { useEffect, useState } from 'react';
import {
  SearchHeader,
  SearchBtn,
  SearchForm,
  SearchLabel,
  SearchInput,
} from './Searchbar.styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'react-router-dom';
import { getSerchMovies } from 'API/api-services';
import { FilmList } from 'components/FilmsList/FilmList';

export default function Searchbar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState('');
  const [searchFilmList, setSearchFilmList] = useState([]);

  const handlerInput = e => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }
    getSerchMovies(searchParams.get('query')).then(data => {
      setSearchFilmList(data.results);
    });
  }, [searchParams, query]);

  const handlerSubmit = e => {
    e.preventDefault();

    if (!query.trim()) {
      toast.error('🦄 Wow so easy! Input field is empty', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    setSearchParams({ query: query });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <SearchHeader>
        <SearchForm onSubmit={handlerSubmit}>
          <SearchBtn type="submit">
            <SearchLabel>Search</SearchLabel>
          </SearchBtn>

          <SearchInput
            type="text"
            name="query"
            value={query}
            autoComplete="off"
            onChange={handlerInput}
            autoFocus
            placeholder="Search movie"
          />
        </SearchForm>
      </SearchHeader>
      {searchFilmList?.length ? <FilmList filmList={searchFilmList} /> : <></>}
    </>
  );
}
