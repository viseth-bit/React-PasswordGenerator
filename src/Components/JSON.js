import { useState } from "react";
import ReactJson from "react-json-view";

function JSONView() {
  const [jsonObject, setJsonObject] = useState(undefined);
  return (
    <div>
      <div style={{ paddingLeft: "50px" }}>
        <h3>Click to paste JSON from clipboard</h3>
        <div style={{ padding: 20 }}>
          <button
            className="btn btn-light "
            onClick={async () => {
              let clipboard = navigator.clipboard
                .readText()
                .then((clipBoardText) => {
                  try {
                    console.log(clipBoardText);
                    let clipboardObject = JSON.parse(clipBoardText);
                    console.log(JSON.stringify(JSONView));
                    setJsonObject(clipboardObject);
                  }
                  catch {alert("Not JSON");}
                  
                  
                  


                });
            }}
          >
            {" "}
            Clipboard{" "}
          </button>
        </div>
      </div>

      {jsonObject && (
        <div style={{ padding: 10 }}>
          <ReactJson
            collapsed={1}
            indentWidth={1}
            theme="monokai"
            className="jsonObjectContainer"
            src={jsonObject}
          />
        </div>
      )}
    </div>
  );
}
export default JSONView;
