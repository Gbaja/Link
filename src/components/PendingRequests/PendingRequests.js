import React from "react";

const PendingRequests = props => {
  const requests = props.data;
  return (
    <div>
      {requests.cv ? <p>Resume or cover letter tips</p> : false}
      {requests.shadow ? <p>Job shadow opportunities</p> : false}
      {requests.interview ? <p>Mock Interviews</p> : false}
      {requests.job ? <p>Post job and internships</p> : false}
      {requests.postgrad ? <p>Post Graduate Application</p> : false}
      {requests.career ? <p>Professional and career exploration</p> : false}
    </div>
  );
};

export default PendingRequests;
