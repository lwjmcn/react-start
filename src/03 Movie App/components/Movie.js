import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}) { //props 받아오기
  return (
    <div>
      <img src={coverImg} alt="cover-img"/>
      <h1>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h1>
      <p>{summary.length > 235 ? `${summary.slice(0,235)}...more` : summary}</p>
      <ul>
        {genres.map(genre => <li key={genre}>{genre}</li>)}
      </ul>
      <hr/>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;