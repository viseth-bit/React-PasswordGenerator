import bcrypt from "bcryptjs";
import "../App.css";
import {useState} from "react";
import "react-pro-sidebar/dist/css/styles.css";

function Encrypt() {
  const [roundnum, SetRoundNum] = useState(10);
  const [textstring, SetTextString] = useState("");
  const [encrypted, setEncrypted] = useState("");
  const [hashcheck, SetHashCheck] = useState("");
  const [hashstring, setHashString] = useState("");

  const handleCompare = () => {
    bcrypt.compare(hashstring, hashcheck, function (err, isMatch) {
      if (err) {
        throw err;
      } else if (!isMatch) {
        alert("Not Match!");
      } else {
        alert("Match");
      }
    });
  };

  const handleDecrement = () => {
    SetRoundNum((prevCount) => prevCount - 1);
  };

  const handleIncrement = () => {
    SetRoundNum((prevCount) => prevCount + 1);
  };

  const handleEncrypt = () => {
    bcrypt.genSalt(roundnum, function (err, salt) {
      if (err) {
        throw err;
      } else {
        bcrypt.hash(textstring, salt, function (err, hash) {
          if (err) {
            throw err;
          } else {
            setEncrypted(hash);
          }
        });
      }
    });
  };
  return (
    <div className="mx-auto px-4 mt-12">
      <h3 style={{paddingLeft: "5px"}}>
        {"Bcrypt Hash Generator & Checker"}
      </h3>
      <div className="grid grid-cols-2">
        <div className="p-2 col-span-2 lg:col-span-1 mb-10">
          <div className="flex flex-wrap items-stretch w-full mb-4 relative">
            {/*String Input for Encrypt*/}
            <td style={{width: "100%"}}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Text Here"
                value={textstring}
                onChange={(e) => SetTextString(e.target.value)}
              />
            </td>
            <td style={{width: "100%"}}>
              {/*Bcrypt code*/}
              <button className="form-control" onClick={handleEncrypt}>
                Ecrypt
              </button>
            </td>
          </div>
          {/*Show Encrypt*/}
          <div className="flex flex-wrap items-stretch w-full mb-4 relative">
            <input
              style={{width: "100%"}}
              value={encrypted}
              className="form-control"
            />
          </div>
          {/*Round Number*/}
          <div style={{width: "110px"}}>
            <h5>Salt Round</h5>
            <div className="input-group">
              <div className="input-group-prepend">
                <button className="input-group-text" onClick={handleDecrement}>
                  -
                </button>
              </div>
              <input className="form-control" value={roundnum} />
              <div className="input-group-prepend">
                <button className="input-group-text" onClick={handleIncrement}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 col-span-2 lg:col-span-1">
          {/*Hash Input*/}
          <div className="flex flex-wrap items-stretch w-full mb-4 relative">
            <td style={{width: "100%"}}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter String to Check"
                value={hashstring}
                onChange={(e) => setHashString(e.target.value)}
              />
            </td>
            {/*Check Button*/}
            <td>
              <button className="form-control" onClick={handleCompare}>
                Check
              </button>
            </td>
          </div>
          {/*String Input*/}
          <div className="flex flex-wrap items-stretch w-full mb-4 relative">
            <input
              placeholder="Enter Hash Here"
              type="text"
              className="form-control"
              value={hashcheck}
              onChange={(e) => SetHashCheck(e.target.value)}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Encrypt;
