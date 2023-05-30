import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { openAi } from "../apiHandling/apiCaller";
import { BsFillSendFill } from "react-icons/bs";
const HomePage = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [condition, setSpinner] = useState(false);
  useEffect(() => {
    if (response !== "") {
      setSpinner(false);
    }
  }, [response]);
  const handleClick = async () => {
    setSpinner(true);
    openAi(JSON.stringify({ message: message }))
      .then((res) => {
        setResponse(res.data.reply);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h2> Hello There </h2>
      <div className="input-container ">
        <div style={{ width: "100%" }}>
          <input
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setResponse("");
            }}
            type="text"
            className="input-field"
            placeholder="Send Message ..."
          />
        </div>
        <div className="icon">
          <BsFillSendFill
            onClick={handleClick}
            size={15}
            color="#222"
            style={{ cursor: "pointer", marginBottom: "5px" }}
          />
        </div>
      </div>
      <br />

      {response && response ? (
        <div className="login-card2">
          Q&nbsp;:&nbsp;{message}
          <br />
          <br />
          Ans&nbsp;:&nbsp;{response}
        </div>
      ) : condition ? (
        <Spinner animation="border" />
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
