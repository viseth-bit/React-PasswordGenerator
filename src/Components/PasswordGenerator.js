import { useEffect, useState } from "react";
import { MdOutlineContentCopy, MdRefresh } from "react-icons/md";
import "../App.css";
const numbers = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const specialCharacters = "?_-y%.S,q/B<Z+|";

function PasswordGenerator() {
  const [Password, SetPassword] = useState("");
  const [PasswordLength, setPasswordLength] = useState(13);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const handleGeneratePassword = (e) => {
    let characterList = "";
    if (includeLowercase) {
      characterList = characterList + lowerCaseLetters;
    }
    if (includeUppercase) {
      characterList = characterList + upperCaseLetters;
    }
    if (includeNumbers) {
      characterList = characterList + numbers;
    }
    if (includeSymbols) {
      characterList = characterList + specialCharacters;
    }
    SetPassword(createPassword(characterList));
  };
  const createPassword = (characterList) => {
    let Password = "";
    const characterListLength = characterList.length;
    for (let i = 0; i < PasswordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      Password = Password + characterList.charAt(characterIndex);
    }
    return Password;
  };
  useEffect(() => {
    return handleGeneratePassword();
  }, [PasswordLength]);
  return (
    <div style={{ paddingLeft: "50px" }}>
      <h2>Password Generator</h2>

      <div style={{ paddingLeft: "0px" }} class="input-group col-sm-5">
        <input value={Password} class="form-control" />
        <div class="input-group-append">
          <button
            onClick={() => {
              navigator.clipboard.writeText(Password);
            }}
            class="btn btn-light"
          >
            {" "}
            <MdOutlineContentCopy />
          </button>
          <button
            onClick={handleGeneratePassword}
            class="btn btn-light"
          >
            {" "}
            <MdRefresh />
          </button>
        </div>
      </div>
      <p>Customize your password</p>
      <table>
        <tr>
          <td style={{position: "relative", minHeight:"60px", verticalAlign:" top"}} >
            <input
              className="btn btn-light"
              maxLength="5"
              size="2"
              value={PasswordLength}
            />
            <input style={{margin:10}}
            
              type="range"
              min="1"
              max="50"
              step={1}
              onChange={(e) => setPasswordLength(e.target.value)}
            />
          </td>
          <th style={{ paddingLeft: "50px" }} rowSpan={1}>
            <tr>
              <td>
                <input
                  checked={includeUppercase}
                  type="checkbox"
                  onChange={(e) => setIncludeUppercase(e.target.checked)}
                />
              </td>
              <td>Uppercase</td>
            </tr>
            <tr>
              <td>
                <input
                  checked={includeLowercase}
                  type="checkbox"
                  onChange={(e) => setIncludeLowercase(e.target.checked)}
                />
              </td>
              <td>Lowercase</td>
            </tr>
            <tr>
              <td>
                <input
                  checked={includeNumbers}
                  type="checkbox"
                  onChange={(e) => setIncludeNumbers(e.target.checked)}
                />
              </td>
              <td>Numbers</td>
            </tr>
            <tr>
              <td>
                <input
                  checked={includeSymbols}
                  type="checkbox"
                  onChange={(e) => setIncludeSymbols(e.target.checked)}
                />
              </td>
              <td>Symbols</td>
            </tr>
          </th>
        </tr>
      </table>
    </div>
  );
}
export default PasswordGenerator;
