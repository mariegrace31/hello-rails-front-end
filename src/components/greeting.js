import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.message);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);
  return (
    <div>{greeting}</div>
  );
};

export default Greeting;
