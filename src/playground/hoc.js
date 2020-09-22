// Higher order components -- for integrating Redux with React
//  - A React component that renders another React component
//      -- Reusing code
//      -- Manipulating props
//      -- Abstracting state

import React from 'react';
import ReactDOM from 'react-dom';

// NOT a higher order component
const Info = (props) => (
  <div className="tempDiv">
    <h1>Info</h1>
    <ul>
      <li>Some info: {props.info}</li>
    </ul>
  </div>
);

// Higher order component; using the spread operator to pass down props;
//  isAdmin used as a prop of the higher order component
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div className="divPrivate">
      {props.isAdmin && (
        <span>
          <b>WARNING</b> Private info; do not release
        </span>
      )}
      <WrappedComponent {...props} />
    </div>
  );
};

// requireAuthentication a regular function that returns a higher order component
const requireAuthentication = (WrappedComponent) => {
  return (props) => {
    if (props.isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return (
        <div className="divToBeAuthenticated">
          Please authenticate yourself before proceeding.
        </div>
      );
    }
  };
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="These are the details." />,
//   document.getElementById('app')
// );
ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="These are the details." />,
  document.getElementById('app')
);
