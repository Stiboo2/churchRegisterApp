import React, { useState } from "react";
import AttendanceSetup from "./AttendanceSetup";
import CartContainer from "./CartContainer";
import InitSetUp from "./InitSetUp";

const MyComponent = () => {
  const [attendanceRecord, setAttendanceRecord] = useState({
    date: "2023-05-14",
    church_branch_id: "branch1",
  });
  const [submitted, setSubmitted] = useState(false); // State variable for submission status

  const handleAttendanceChange = (date, churchBranchId) => {
    setAttendanceRecord({ date, church_branch_id: churchBranchId });
    setSubmitted(true); // Set submitted to true when the form is submitted
  };

  return (
    <div>
      {!submitted && ( // Only render the AttendanceSetup component if not submitted
        <AttendanceSetup onAttendanceChange={handleAttendanceChange} />
      )}
      {submitted && ( // Render the InitSetUp component after form submission
        <>
          <InitSetUp
            date={attendanceRecord.date}
            church_branch_id={attendanceRecord.church_branch_id}
          />
          <CartContainer attendanceRecord={attendanceRecord} />{" "}
          {/* Pass attendanceRecord to CartContainer */}
        </>
      )}
    </div>
  );
};

export default MyComponent;
