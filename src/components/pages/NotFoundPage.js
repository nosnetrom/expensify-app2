import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="_404RouteWrapper">
    <p>
      404 error, baby! <Link to="/">Go home now.</Link>
    </p>
  </div>
);

export default NotFoundPage;
