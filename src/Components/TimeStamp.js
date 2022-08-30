import {useState} from "react";
import * as React from 'react';
function TimeStamp() {

  const [timestampInteger, setTimestampInteger] = useState(new Date().valueOf());

  return (
    <div >
      <div className="col-md-5 text-left" style={{paddingLeft: "50px"}}>
        <h3>Convert TimeStamp</h3>
        <input
          style={{padding: "30px"}}
          className="form-control"
          onChange={(e) => {
            setTimestampInteger(e.target.value);
          }}
          type="number"
        />
      </div>

      {timestampInteger > 0 && (
        <div style={{padding: "50px", }}>

          <h1>
            {timestampInteger}
            <span style={{fontSize: 30, marginLeft: 35, }}>{"  Seconds from 1970"}</span>
          </h1>
          <h3>
            {new Date(Number(timestampInteger)).toString()}
          </h3>
        </div>
      )}
    </div>
  );
}

export default TimeStamp;
