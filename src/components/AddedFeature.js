import React from 'react';



// step 4: Add events and event handlers in UI

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => props.removeItem(props.feature)}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;