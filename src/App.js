import React from "react";
import "./App.css";

const API_KEY = ''

class App extends React.Component {

  constructor(props){
    super(props)

    this.state={
      photos: [],
      term: ''
    }
  }

  componentDidMount(){
    if(this.state.term !== ""){
      this.fetchPhotos(this.state.term)
    }else{
      this.fetchPhotos('react');
    }
  }

  fetchPhotos = (term) => {
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${term}&client_id=${API_KEY}`)
    .then(resp => {return resp.json() })
    .then(data => {
      this.setState({
        photos: data.results
      })
      .catch(err => {
        console.log('Fetching Error', err);
      });
    })
  }

  changeSearchTermState = (event) => {
    this.setState({
      term: event.target.value
    }, () => {this.state.term === "" ? this.fetchPhotos('coding') : this.fetchPhotos(this.state.term)})
  }


  render() {
    return(
    <div>

    </div>);
  }
}
export default App;