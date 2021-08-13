import "./styles.css";
import { useState } from "react";
let birthdate, luckyNumber;
export default function App() {
  const [islucky, setIslucky] = useState("");
  const [toast, setToast] = useState("block");
  const [gif, setGif] = useState(["", "none"]);
  const checkHandler = () => {
    if ((birthdate !== undefined) & (luckyNumber !== undefined)) {
      let sum = 0;
      const dateArray = birthdate.split("-").join("");
      const sumArray = dateArray.split("");
      for (let i = 0; i < sumArray.length; i++) {
        sum += Number(sumArray[i]);
      }
      console.log(sum);
      console.log(luckyNumber);
      if (sum % luckyNumber === 0) {
        setIslucky("Wuhuu! Your birthday is lucky!!!  Here is you cake");
        setGif([
          "https://media.giphy.com/media/l2Sq2ySYEIl3mzVgk/giphy.gif",
          "block"
        ]);
      } else {
        setIslucky(
          "Sorry, Your birthdate ain't so lucky!!!  Here is your cake"
        );
        setGif([
          "https://media.giphy.com/media/frBakvqDuXYJQzgDDb/giphy-downsized.gif",
          "block"
        ]);
      }
    } else {
      setIslucky("Please Enter the details");
    }
  };
  return (
    <div className="App">
      <header>
        <h1> Do you think your Birthday is lucky? </h1>
        <p id="head-content">
          {" "}
          Well Let's Find Out Then <br /> Scroll Down{" "}
        </p>
      </header>
      <div className="date-check" id="date-check">
        <p id="toast" style={{ display: `${toast}` }}>
          {" "}
          Privacy Notice: Your Data is not being stored in anyway.{" "}
          <span
            role="img"
            aria-labelledby="crossIcon"
            onClick={() => {
              setToast("none");
            }}
            style={{ cursor: "pointer" }}
          >
            &#10060;{" "}
          </span>
        </p>
        <label htmlFor="date-input">Enter Your Birthdate Below</label>
        <br />
        <input
          required
          onChange={(e) => {
            birthdate = e.target.value;
            console.log(birthdate);
          }}
          type="date"
        ></input>
        <br />
        <label htmlFor="lucky-number">Enter Your Lucky Number Below</label>{" "}
        <br />
        <input
          required
          type="number"
          onChange={(e) => {
            luckyNumber = e.target.value;
            console.log(luckyNumber);
          }}
        ></input>
        <br />
        <button onClick={checkHandler}> Check </button>
      </div>
      <p id="message">{islucky}</p>
      <img src={`${gif[0]}`} style={{ display: `${gif[1]}` }} alt="gif"></img>

      <footer>
        <ul className="icons">
          <li>
            <a href="https://github.com/rahulbakshi4">
              <img
                src="https://res.cloudinary.com/rahulb4/image/upload/v1628815036/Github_gi8ba2.png"
                alt="Github"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rahul-bakshi-552071189/">
              <img
                src="https://res.cloudinary.com/rahulb4/image/upload/v1628815036/Linkedin_rsbmtx.png"
                alt="LinkedIn"
              />
            </a>
          </li>
          <li>
            <a href="mailto:rahulbakshi3@gmail.com">
              <img
                src="https://res.cloudinary.com/rahulb4/image/upload/v1628815036/gmaillogo_jocqol.png"
                alt="Gmail"
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/rahul_bakshi4">
              <img
                src="https://res.cloudinary.com/rahulb4/image/upload/v1628815036/Twitter_or4vsi.svg"
                alt="Twitter"
              />
            </a>
          </li>
        </ul>
        Made with &#10084; by{" "}
        <a id="info" href="https://rahulbakshi.xyz">
          Rahul Bakshi
        </a>
      </footer>
    </div>
  );
}
