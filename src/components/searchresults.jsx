import React, { Component } from "react";
import $ from "jquery";
import Loading from "../components/loading";
import Message from "../components/message";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      loading: false,
      message: false,
    };
  }

  performSearch(searchTerm) {
    const urlString =
      "https://api.unsplash.com/search/photos?per_page=30&client_id=Emfp4Cb_iwwmiqVm07UlzMSrkAfXKMYGuGuUWrl-XLA&query=" +
      searchTerm;
    this.setState({ loading: true });
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully");
        const results = searchResults.results;

        var imageRows = [];

        results.forEach((image) => {
          const imageRow = (
            <a
              className="col-12 col-sm-6 col-md-3 col-lg-2"
              data-fancybox="gallery"
              href={image.urls.regular}
              key={image.id}
            >
              <img key={image.id} src={image.urls.regular} alt="poster"></img>
            </a>
          );
          imageRows.push(imageRow);
        });
        this.setState({ loading: false });

        this.setState({ rows: imageRows });
        this.state.rows.length !== 0
          ? this.setState({ message: false })
          : this.setState({ message: true });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
        this.setState({ loading: false });
      },
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state.search;
    this.performSearch(data);
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <form
          className="row m-2 justify-content-center"
          onSubmit={this.handleSubmit}
        >
          <input
            className="col-9 col-sm-8 col-md-6 col-lg-6"
            type="text"
            onChange={this.handleInputChange}
            placeholder="Enter your image"
            name="search"
          />
          <button type="submit" className="btn btn-dark btn-sm">
            Search
          </button>
        </form>
        <div className="row justify-content-center">
          {this.state.loading && <Loading />}
        </div>
        <div className="message">{this.state.message && <Message />}</div>
        <div className="row">{this.state.rows}</div>
      </React.Fragment>
    );
  }
}

export default Results;
