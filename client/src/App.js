import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { getRequest } from "./utils/apiRequest";
import { useEffect, useRef, useState } from "react";
import { GET_INTERNET_SPEED, BASE_URL } from "./utils/apiEndpoints";
import CountUp from "react-countup";
function App() {
  /*const [error,setError]=useState(null);*/
  const [speed, setSpeed] = useState(null);
  let startMethod = useRef(null);
  useEffect(() => {
    getIntenetSpeed();
  }, []);
  const getIntenetSpeed = async () => {
    const response = await getRequest(`${BASE_URL}${GET_INTERNET_SPEED}`);
    if (response.error) {
      return false;
    }
    setSpeed(response.speed);
    startMethod();
  };
  return (
    <div className="App">
      <div className="logo">
        <img
          src="https://fast.com/assets/new-logo-vert-37861c.svg"
          alt="fast-logo"
        />
      </div>
      <div className="body">
        <h3 className="heading">Your Internet speed is </h3>
        <div className="top-section">
          <CountUp
            start={speed ? speed - 50 : 0}
            end={speed ? speed : 0}
            duration={5}
            onEnd={() => console.log("end")}
            onStart={() => console.log("start")}
          >
            {({ countUpRef, start }) => { 
              startMethod=start;
              return (
                <>
                  <div className="left">
                    <div className="speed-count" ref={countUpRef} />
                  </div>
                  <div className="right">
                    <div className="speed-measure">Mbps</div>
                    <div
                      className="reload"
                      onClick={() => getIntenetSpeed(start)}
                    >
                      <FontAwesomeIcon
                        icon={faRedoAlt}
                        className="icon-block"
                      />
                    </div>
                  </div>
                </>
              );
            }}
          </CountUp>
        </div>
      </div>
      <div className="footer">
        <button className="showmore-btn">Show more info</button>
        <div className="social-icon">
          <div className="item-container">
            <FontAwesomeIcon
              icon={faQuestion}
              className="icon-block"
            ></FontAwesomeIcon>
          </div>
          <div className="item-container">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="icon-block"
            ></FontAwesomeIcon>
          </div>
          <div className="item-container">
            <FontAwesomeIcon
              icon={faTwitter}
              className="icon-block"
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="small-logo">
          <img
            src="https://fast.com/assets/poweredby-865a3b.svg"
            alt="powered"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
