import React from "react";
import { Link } from "react-router-dom";
const User = () => {
  return (
    <div className="user">
      <Link to="/dashboard/12">
        <button>User 12</button>
      </Link>
      <Link to="/dashboard/18">
        <button>User 18</button>
      </Link>
    </div>
  );
};

export default User;
