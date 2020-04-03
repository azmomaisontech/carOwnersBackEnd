import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Pagination = ({ pagination, id }) => {
  return (
    <nav id="pagination">
      <ul>
        {pagination.prev && (
          <li>
            <Link to={`/cars/${id}?page=${pagination.prev.page}`}>
              Previous
            </Link>
          </li>
        )}
        {pagination.next && (
          <li>
            <Link to={`/cars/${id}?page=${pagination.next.page}`}>Next</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired
};

export default Pagination;
