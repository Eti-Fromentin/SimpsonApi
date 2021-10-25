import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [quote, SetQuote] = useState(null);
  const [name, setName] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  const GetQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => {
        SetQuote(data[0].quote);
        setName(data[0].character);
        setImgUrl(data[0].image);
      });
  };

  return (
    <div className="App">
      <button type="button" onClick={GetQuote}>
        Get a new quote
      </button>
      <p>{quote}</p>
      <p>{name}</p>
      <img src={imgUrl} alt={name} />
    </div>
  );
}

export default App;
