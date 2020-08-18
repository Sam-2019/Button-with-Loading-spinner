import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import "./styles.css";

const All = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const submit = () => {
    setLoading(true);

    const uri = "https://jsonplaceholder.typicode.com/users";
    axios.get(uri).then((response) => {
      console.log(response);
      if (response.status === 200) {
        console.log(response);
        console.log(response.status);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } else {
        console.log(response.status);
        setError(response.status);
      }
    });
  };

  return (
    <div className="p-1 body-background">
      <div className="m-5">
        <button onClick={submit} className="button-size" disabled={loading}>
          {loading ? <LoadingSpinner /> : "Submit"}
        </button>
      </div>
      <div className="text-danger">  {error ? `${error}` : ''}</div>
    </div>
  );
};

export default All;

const LoadingSpinner = () => (
  <div className="text-center">
    <div className="spinner-border spinner-border-sm" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);
