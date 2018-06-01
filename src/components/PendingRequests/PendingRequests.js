import React from "react";
import { Link } from "react-router-dom";

const PendingRequests = props => {
  const requests = props.data;
  console.log("REQUESTSSS: ", requests);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> Date sent</th>
            <th> Request sender </th>
            <th> Profile</th>
            <th> Request Message </th>
            <th> What I need help with </th>
            <th> Status</th>
            <th> Action </th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map(request => (
              <tr key={request.requestId}>
                <td>{request.createdAt.split("T")[0]}</td>
                <td>
                  {request.menteeLastName ? (
                    <p>
                      {request.menteeFirstName} {request.menteeLastName}
                    </p>
                  ) : (
                    <p>
                      {request.mentorFirstName} {request.mentorLastName}
                    </p>
                  )}
                </td>
                <td>
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
                </td>
                <td>{request.requestMessage}</td>
                <td>
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
                </td>
                <td>{request.status}</td>
                <td>
                  <button>Accept</button>
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
