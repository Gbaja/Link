import React from "react";
import { Link } from "react-router-dom";

import {
  Table,
  TableDataTH,
  TableDataTD,
  TableDataTR
} from "../Shared/Pending.Styled";

const PendingRequests = props => {
  const requests = props.data;
  console.log("REQUESTSSS: ", requests);
  return (
    <div>
      <Table>
        <thead>
          <TableDataTR>
            <TableDataTH> Date sent</TableDataTH>
            <TableDataTH> Request sender </TableDataTH>
            <TableDataTH> Profile</TableDataTH>
            <TableDataTH> Request Message </TableDataTH>
            <TableDataTH> What I need help with </TableDataTH>
            <TableDataTH> Status</TableDataTH>
            <TableDataTH> Action </TableDataTH>
          </TableDataTR>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map(request => (
              <TableDataTR key={request.requestId}>
                <TableDataTD>{request.createdAt.split("T")[0]}</TableDataTD>
                <TableDataTD>
                  {request.menteeLastName ? (
                    <p>
                      {request.menteeFirstName} {request.menteeLastName}
                    </p>
                  ) : (
                    <p>
                      {request.mentorFirstName} {request.mentorLastName}
                    </p>
                  )}
                </TableDataTD>
                <TableDataTD>
                  {request.menteeAccountType ? (
                    <Link
                      to={`/profile/${request.menteeAccountType}/${
                        request.menteeId
                      }`}
                    >
                      View profile
                    </Link>
                  ) : (
                    <Link
                      to={`/profile/${request.mentorAccountType}/${
                        request.mentorId
                      }`}
                    >
                      View profile
                    </Link>
                  )}
                </TableDataTD>
                <TableDataTD>{request.requestMessage}</TableDataTD>
                <TableDataTD>
                  <ul>
                    {request.cv ? <li>Resume or cover letter tips</li> : false}
                    {request.shadow ? <li>Job shadow opportunities</li> : false}
                    {request.interview ? <li>Mock Interviews</li> : false}
                    {request.job ? <li>Post job and internships</li> : false}
                    {request.postgrad ? (
                      <li>Post Graduate Application</li>
                    ) : (
                      false
                    )}
                    {request.career ? (
                      <li>Professional and career exploration</li>
                    ) : (
                      false
                    )}
                  </ul>
                </TableDataTD>
                <TableDataTD>{request.status}</TableDataTD>
                <TableDataTD>
                  <button>Accept</button>
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
    </div>
  );
};

export default PendingRequests;
//  <p>Request message</p>
//     {requests.cv ? <p>Resume or cover letter tips</p> : false}
//     {requests.shadow ? <p>Job shadow opportunities</p> : false}
//     {requests.interview ? <p>Mock Interviews</p> : false}
//     {requests.job ? <p>Post job and internships</p> : false}
//     {requests.postgrad ? <p>Post Graduate Application</p> : false}
//     {requests.career ? <p>Professional and career exploration</p> : false}
//   </div>
