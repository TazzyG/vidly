import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
    count: 0
  };
  handleDelete = movie => {};

  render() {
    return (
      <div className="container">
        <span> Showing {this.formatCount()} movies in the database </span>
        <table>
          <thead>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            Rate
            <th>
              <th />
            </th>
          </thead>
          <tbody>
            <td>placeholder-title</td>
            <td>placeholder-genre</td>
            <td>placeholder-stock</td>
            <td>place-holder Rate</td>
            <td>
              <button className="btn btn-danger m-2">Delete</button>
            </td>
          </tbody>
        </table>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
export default Movies;
