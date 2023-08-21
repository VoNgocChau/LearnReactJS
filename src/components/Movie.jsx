import React, { useEffect, useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/ListGroup";
import getGenres from "../services/fakeGenreService";
import MoviesTable from "./MoviesTable";
import _ from 'lodash'
const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState({ path: 'title', order: 'asc' })
  const pageSize = 4;
  const { length: count } = movies;

  // Component Didmount
  useEffect(() => {
    const fetchGenres = [{ _id: "", name: 'All Genres' }, ...getGenres()];
    setGenres(fetchGenres);
    setMovies(getMovies());
  }, []);

  const getPagedData = () => {
    const filtered = selectedItem && selectedItem._id ? movies.filter(m => m.genre._id === selectedItem._id) : movies;
    const sorter = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const paginateMovie = paginate(sorter, currentPage, pageSize);
    return { totalCount: filtered.length, data: paginateMovie }
  }

  const { totalCount, data } = getPagedData();

  const handleDelete = (movie) => {
    const movieDelete = movies.filter((m) => m._id !== movie._id);
    setMovies(movieDelete);
  };

  const handleLike = (movie) => {
    const items = [...movies];
    const index = items.indexOf(movie);
    items[index] = { ...movie };
    items[index].isLiked = !items[index].isLiked;
    setMovies(items);
  }

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  const handleSort = (path) => {
    setSortColumn(path)
  }

  const handleGenreSelect = genre => {
    setSelectedItem(genre);
    setCurrentPage(1);
  }

  return (
    <div className="row">
      <div className="col-2">
        <ListGroup items={genres} selectedItem={selectedItem} onItemSelect={handleGenreSelect} />
      </div>
      <div className="col">
        {count === 0 ? <p>There are no movies in the database.</p> : <p>Show {totalCount} movies in the database.</p>}
        <MoviesTable paginateMovie={data} sortColumn={sortColumn} onDelete={handleDelete} onLike={handleLike} onSort={handleSort} />
        <Pagination itemsCount={totalCount} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage} />
      </div>

    </div>
  );
};

export default Movie;
