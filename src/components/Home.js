import { useState } from "react";
import {FetchData} from "./FetchData";
import {Link} from "react-router-dom";

const Home = () => {
  const [url, setUrl] = useState("google.com");
  const [data, setData] = useState("");
  const [display, setDisplay] = useState(true);
  const [err, setErr] = useState(false);
  const [invalid, setInvalid] = useState(false);

  console.log(invalid);
  console.log(data);
  
    return (
        <div className="home-div">
          <div className="home-content">
            <div className="company-name"></div>
            <input
              type="text"
              value={url}
              placeholder="ENTER URL"
              onChange={(e) => setUrl(e.currentTarget.value)}
            />
            <button onClick={() => FetchData(url, setData, setDisplay, setErr, setInvalid)}>CHECK !</button>
            <div className="message">
              {display && !err && !invalid && <p>Hello, Pal! We are Happy to Help!</p>}
              {invalid && <p> Please Enter a Valid URL !</p>}
              {err && display && !invalid && <p>Something Went Wrong, Try after Some Time!</p>}
                {!display && !invalid && <div className="progress-bar">
                        {!display && <p>Safe Meter : {100 - data.risk_score + "%"}</p>}
                    <div className="progress" style={{"width" : `${100 - data.risk_score + "%"}`, "backgroundColor":  `${data.risk_score > 40 ? "red" : "#00D100"}`}}>
                    </div>
                </div>}
            </div>
            <div className="about-link">
              <Link to="/About"> About Us</Link>
            </div>
          </div>
       </div>
  );
};

export default Home;