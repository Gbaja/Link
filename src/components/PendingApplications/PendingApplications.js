import React, { Component } from "react";
import ActionButtons from "./ActionButtons";

import {
  TableContainerDiv,
  Table,
  TableDataTH,
  TableDataTD,
  TableDataTR
} from "../Shared/Pending.Styled";

class PendingApplications extends Component {
  render() {
    return (
      <TableContainerDiv>
        <Table>
          <thead>
            <TableDataTR>
              <TableDataTH> Account type</TableDataTH>
              <TableDataTH> First name </TableDataTH>
              <TableDataTH> Last name </TableDataTH>
              <TableDataTH> Email </TableDataTH>
              <TableDataTH> University name </TableDataTH>
              <TableDataTH> Action </TableDataTH>
            </TableDataTR>
          </thead>
          <tbody>
            {this.props.data.length > 0 ? (
              this.props.data.map(data => (
                <TableDataTR key={data.id}>
                  <TableDataTD>{data.accountType}</TableDataTD>
                  <TableDataTD>{data.firstName}</TableDataTD>
                  <TableDataTD>{data.lastName}</TableDataTD>
                  <TableDataTD>{data.email}</TableDataTD>
                  <TableDataTD>{data.universityName}</TableDataTD>
                  <TableDataTD>
                    <ActionButtons user={data.email} />
                  </TableDataTD>
                </TableDataTR>
              ))
            ) : (
              <TableDataTR>
                <TableDataTD>No pending applications</TableDataTD>
              </TableDataTR>
            )}
          </tbody>
        </Table>
      </TableContainerDiv>
    );
  }
}

export default PendingApplications;
