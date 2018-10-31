import React, { Component } from 'react';

export class FetchData extends Component {
  displayName = FetchData.name

  constructor(props) {
    super(props);
    this.state = { customers: [], loading: true };

  }
  componentWillMount() {

    let reactKomponentti = this;

    console.log("Aloitetaan datan haku/fetch-kutsu.");
    fetch('/api/customers')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(JSON.stringify(myJson));
        reactKomponentti.setState({ customers: myJson });
      });
  }

  render() {
    console.log("Render()-metodissa");

    const asiakkaat = this.state.customers.map((c) =>
      <tr>
        <td style={{ color: "blue" }}>{c.companyName}</td>
        <td>{c.city}</td>
        <td style={{ color: "red" }}>{c.country}</td>
      </tr>
    );

    return (

      <div>

        <h2>Suomalaiset asiakkaat Northwind-tietokannasta</h2>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Yritys</th>
              <th>Kaupunki </th>
              <th>Maa</th>
            </tr>
          </thead>
          <tbody>
            {asiakkaat}
          </tbody>
        </table>  
</div>
    )
  }
}