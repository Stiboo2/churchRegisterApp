import React, { useState } from "react";
import AttendanceSetup from "./AttendanceSetup";
import InitSetUp from "./InitSetUp";

const MyComponent = () => {
  const [attendanceRecord, setAttendanceRecord] = useState({
    date: "2023-05-14",
    church_branch_id: "branch1",
  });

  const handleAttendanceChange = (date, churchBranchId) => {
    setAttendanceRecord({ date, church_branch_id: churchBranchId });
  };

  return (
    <div>
      <AttendanceSetup onAttendanceChange={handleAttendanceChange} />
      <InitSetUp
        date={attendanceRecord.date}
        church_branch_id={attendanceRecord.church_branch_id}
      />
    </div>
  );
};

export default MyComponent;
