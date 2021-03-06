import React from "react";
import SearchBar from "./components/SearchBar";
import PhotoList from "./components/PhotoList";
import "./App.css";

const API_KEY =
  "ebbbf8984faf6f8ec2e4fc284d1b62abe6e096a682d646b471178c0bec22e3c2";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      term: ""
    };
  }

  componentDidMount() {
   // this.randomPhoto();
   
    if (this.state.term !== "") {
      this.fetchPhotos(this.state.term);
    } else {
      this.fetchPhotos("react");
    }
  }

  fetchPhotos = term => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${term}&orientation=landscape&client_id=${API_KEY}`
    )
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.setState({
          photos: data.results
        });
      });
  };

  randomPhoto = () => {
    fetch(`https://api.unsplash.com/photos/random?count=5&client_id=${API_KEY}`)
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.setState({
          photos: data.results
        });
      });
  };

  changeSearchTermState = event => {
    this.setState(
      {
        term: event.target.value
      },
      () => {
        this.state.term === ""
          ? this.fetchPhotos("react")
          : this.fetchPhotos(this.state.term);
      }
    );
    console.log(this.state);
  };

  render() {
    if (this.state.photos === []) {
      throw new Error("Error Retreiving Photos");
    }

    return (
      <div>
        <h1>Unsplash Photo Search</h1>
        <SearchBar
          changeSearchTermState={this.changeSearchTermState}
          value={this.state.term}
        />
        <PhotoList photos={this.state.photos} />
      </div>
    );
  }
}
export default App;
