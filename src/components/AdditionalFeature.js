import React from 'react';
import { connect,useDispatch } from 'react-redux'
import { addFeature } from '../actions/featureActions'

const AdditionalFeature = props => {
  const dispatch = useDispatch()
  const handleClick = (e) => {
  dispatch(addFeature(props.feature))
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleClick} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {addFeature})(AdditionalFeature)
