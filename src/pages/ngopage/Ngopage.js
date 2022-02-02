import NGOBanner from "../../components/NGOBanner/NGOBanner";
import NgoCard from "../../components/NGOCard/NGOCard";

import axios from "axios";
import uniqid from "uniqid";

import { Component } from "react";

import { API_URL } from "../../config";

import "./ngopage.scss";
import AbsoluteWrapper from "../../components/AbsoluteWrapper/AbsoluteWrapper";

class Ngopage extends Component {
  state = {
    nonProfits: [],
    filteredNonProfit: "",
  };

  componentDidMount() {
    axios.get(`${API_URL}/NonProfits`).then((response) => {
      this.setState({ nonProfits: response.data });
    });
  }

  handleSubmit(event) {
    alert("You selected:" + this.state.filteredNonProfit);
    event.preventDefault();
  }

  handleChangeNGO = (event) => {
    this.setState({ filteredNonProfit: event.target.value });
  };

  getUnique(arr, comp) {
    const unique = arr

      .map((e) => e[comp])

      .map((e, i, final) => final.indexOf(e) === i && i)

      .filter((e) => arr[e])

      .map((e) => arr[e]);

    return unique;
  }

  render() {
    const uniqueNGO = this.getUnique(this.state.nonProfits, "geotags");

    console.log(uniqueNGO);

    const nonProfits = this.state.nonProfits;
    console.log(nonProfits);
    const NGO = this.state.filteredNonProfit;
    console.log(NGO);

    const filteredDropdown = nonProfits.filter(function (result) {
      return result.geotags === NGO;
    });

    console.log(filteredDropdown);
    return (
      <>
        <AbsoluteWrapper>
          <NGOBanner />
          <form onSubmit={this.handleSubmit} className="filter-list-container">
            <select
              className="filter-list-container__filter"
              name="filter by location"
              id="nonprofits"
              placeholder="Section"
              value={this.state.filteredNonProfit}
              onChange={this.handleChangeNGO}
            >
              <option value="">Filter by Region</option>
              {uniqueNGO.map((nonprofit) => {
                return <option key={uniqid()}>{nonprofit.geotags}</option>;
              })}
            </select>
            {/* <button type="submit">Filter Options</button>  */}
          </form>
          <div className="card-container">
            <NgoCard nonProfits={NGO === "" ? nonProfits : filteredDropdown} />
          </div>
        </AbsoluteWrapper>
      </>
    );
  }
}

export default Ngopage;
