import React, { Component } from "react";
import ActionButtons from "./ActionButtons";

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
                    <ActionButtons user={data.id} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No pending applications</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PendingApplications;
