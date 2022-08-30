import { useState } from "react";

var Buffer = require("buffer/").Buffer; // note: the trailing slash is important!

function Base64 (){
    const [base64String, setBase64String] = useState("");
    const [base64Converted, setBase64Converted] = useState("");
    return(
        <div className="col-md-5" style={{ paddingLeft: "50px" }}>
        <h4 className=" text-left"> UTF8 </h4>
        <input
          className="form-control "
          value={base64String}
          onInput={(e) => {
            let encodedValue = Buffer.from(e.target.value).toString(
              "base64"
            );
            setBase64String(e.target.value);
            setBase64Converted(encodedValue);
            console.log("change in area", encodedValue);
          }}
          placeholder="Regular String"
        />
        <h4 className=" text-left" style={{marginTop:10}}> Base64 </h4>
        <input
          value={base64Converted}
          className="form-control"
          onInput={(e) => {
            let decodedValue = Buffer.from(
              e.target.value,
              "base64"
            ).toString("utf8");
            setBase64Converted(e.target.value);
            setBase64String(decodedValue);
            console.log("Change in Base64 Area", decodedValue);
          }}
          placeholder="Base64 "
        />
      </div>

    
);


}

export default Base64;