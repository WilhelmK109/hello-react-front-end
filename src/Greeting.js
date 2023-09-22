import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from './store/greetingsReducer';

function Greeting() {
  const dispatch = useDispatch();
  const { loading, error, greeting } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  const handleGreeting = () => {
    dispatch(fetchGreeting());
  };

  return (
    <div>
      <h1>Random Greeting:</h1>
      <h3>{greeting}</h3>
      {loading && (
      <h4>
        Loading -
        {loading.toString()}
      </h4>
      )}
      {error && (
      <h4>
        Error -
        {error.toString()}
      </h4>
      )}
      {!loading && !error && (
        <button type="button" onClick={handleGreeting}>
          Get more greetings
        </button>
      )}
    </div>
  );
}

export default Greeting;
