import React, { Component } from 'react';
import countries from './data/countries.json';
import regions from './data/regions.json';
import cities from './data/cities.json';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      countryId: null,
      regId:null,
      countryId_city:null,
    };
  }
  coun = (ev) => {
    this.setState({
      countryId:ev.target.value,
      regId: null,
    })

  };
  reg = (ev) => {
    this.setState({
      regId:ev.target.value,
    })
  }


  render() {
    const result = regions.regions.filter(reg => reg.country_id === this.state.countryId);
    const resultCity = cities.cities.filter(city => city.region_id === this.state.regId);
    const countryName = countries.countries.find(countr => countr.id == this.state.countryId)
    console.log(countryName)
    return (
      <div>

        <select onChange={this.coun}>
          {countries.countries.map((val)=> (
            <option key={val.id} value={val.id}>{val.name}</option>

            ))}
        </select>

        {  this.state.countryId?  <select onChange={this.reg}>
          {result.map((val)=> (
            <option key={val.id} value={val.id}>{val.name}</option>
          ))}
          </select> : null}
        {this.state.regId? <ul>
          {resultCity.map((countryId)=> (
            <li key={countryId.id} value={countryId.id}>{countryId.name}</li>
          ))}
        </ul>:null}
        {countryName?<div><img width="50" src={"/flags/"+ countryName.name.toLowerCase().replace(/\s/g,'-')+".png"} alt="sdgsd"/></div>:null}

      </div>
    );
  }
}

export default App;
