import React from "react";
import PropTypes from "prop-types";
import "../css/Movie.css";
import { Link } from "react-router-dom";

class Movies extends React.Component {
  render() {
    return (
      <div className="movie">
        <Link to={{ pathname: "/movie-detail", state: this.props }}>
          <img
            src={this.props.poster}
            alt={this.props.title}
            title={this.props.title}
          />
          <div className="movie__data">
            <h3 className="movie__title">{this.props.title}</h3>
            <h5 className="movie__year">{this.props.year}</h5>
            <p className="movie__summary">
              {this.props.summary.slice(0, 180)}...
            </p>
            <ul className="movie__genres">
              {this.props.genres.map((genre, index) => {
                return (
                  <li className="movie__genre" key={index}>
                    {genre}
                  </li>
                );
              })}
            </ul>
          </div>
        </Link>
      </div>
    );
  }
}

Movies.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movies;
