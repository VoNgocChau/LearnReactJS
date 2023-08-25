import React from 'react'
import Like from './common/Like';
import Table from './common/Table';
import { Link } from 'react-router-dom';
const MoviesTable = (props) => {
  const { paginateMovie, onDelete, onLike, sortColumn, onSort } = props;
  const columns = [
    { path: 'title', label: 'Title', content: (movie) => <Link to={`/movie-form/${movie._id}`}>{movie.title}</Link> },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    { key: 'like', content: movie => <Like liked={movie.isLiked} onClick={() => onLike(movie)} /> },
    {
      key: 'delete', content: movie => <button
        className="btn btn-danger btn-sm"
        onClick={() => onDelete(movie)}
      >
        Delete
      </button>
    }
  ]

  return (
    <Table columns={columns} sortColumn={sortColumn} onSort={onSort} data={paginateMovie} />
  )
}

export default MoviesTable