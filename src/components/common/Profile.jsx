import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
            style={{ borderRadius: '50%', width: '200px', margin: '30px' }}
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2
            style={{
              textAlign: 'center',
              fontSize: '40px',
              fontFamily: 'MonetaBold',
            }}
          >
            {name}
          </h2>
          <p
            className="lead text-muted"
            style={{
              textAlign: 'center',
              fontSize: '20px',
              fontFamily: 'Moneta',
            }}
          >
            {email}
          </p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};
