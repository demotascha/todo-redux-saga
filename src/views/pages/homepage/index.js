import React from 'react';
import { connect } from 'react-redux';


const HomePage = () => {
  return (
    <div className="g">
      <div className="g-col">
        <h1>HomePage</h1>
      </div>
    </div>
  );
};


//=====================================
//  CONNECT
//-------------------------------------

export default connect(
  null
)(HomePage);
