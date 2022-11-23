import { Img } from 'components/MovieCard/MovieCard.styled';
import { PropTypes } from 'prop-types';
export const CastItem = ({ cast }) => {
  const { character, name, profile_path } = cast;
  return (
    <>
      <Img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : `https://img.freepik.com/premium-vector/error-404-nothing-found-banner_18591-27311.jpg?w=1060`
        }
        alt={name}
      />
      <h3>{name}</h3>
      <p>Character: {character}</p>
    </>
  );
};

CastItem.propTypes = {
  cast: PropTypes.shape({
    character: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }),
};
