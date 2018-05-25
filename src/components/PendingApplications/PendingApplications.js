import React, { Component } from "react";
import AcceptButton from "./AcceptButton";

class PendingApplications extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th> Account type</th>
              <th> First name </th>
              <th> Last name </th>
              <th> Email </th>
              <th> University name </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.length > 0 ? (
              this.props.data.map(data => (
                <tr key={data.id}>
                  <td>{data.accountType}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.email}</td>
                  <td>{data.universityName}</td>
                  <td>
                    <AcceptButton user={data.id} />
                  </td>
                </tr>
              ))
            ) : (
              <div>No pending applications</div>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PendingApplications;
