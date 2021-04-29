import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit(term) {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_TOKEN}`
        }
      })
      .then(response => {
        console.log(response.data.results);
      });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar submit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
