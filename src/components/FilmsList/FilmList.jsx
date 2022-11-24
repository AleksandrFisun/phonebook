import { Link, useLocation } from 'react-router-dom';
import { List } from 'components/SharedLayout/SharedLayout.styled';
import { PropTypes } from 'prop-types';
export const FilmList = ({ filmList }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {filmList.map(({ title, id, name, poster_path }) => {
          return (
            <li key={id} style={{ width: 200 }}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : `https://img.freepik.com/premium-vector/error-404-nothing-found-banner_18591-27311.jpg?w=1060`
                  }
                  alt={title ? title : name}
                  width="200"
                />
                <p>{title ? title : name}</p>
              </Link>
            </li>
          );
        })}
      </List>
    </>
  );
};

FilmList.propTypes = {
  filmList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};
