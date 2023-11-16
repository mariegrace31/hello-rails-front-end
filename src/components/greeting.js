import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.message);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);
  return (
    <div>{greeting}</div>
  );
};

export default Greeting;
