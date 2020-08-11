import React from 'react';
import { useDispatch } from 'react-redux'
import { removeFeature } from '../actions/featureActions'
const AddedFeature = props => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(removeFeature(props.feature))
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleClick} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
