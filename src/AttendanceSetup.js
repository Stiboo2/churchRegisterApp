import React, { useState } from "react";

const AttendanceSetup = ({ onAttendanceChange }) => {
  const [date, setDate] = useState("");
  const [churchBranchId, setChurchBranchId] = useState("");
  const [pastorId, setPastorId] = useState("");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleChurchBranchIdChange = (event) => {
    setChurchBranchId(event.target.value);
  };

  const handlePastorIdChange = (event) => {
    setPastorId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Pass the updated values to the parent component
    onAttendanceChange(date, churchBranchId, pastorId);

    // Reset the form fields
    setDate("");
    setChurchBranchId("");
    setPastorId("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={handleDateChange} />
        </div>
        <div>
          <label>Church Branch ID:</label>
          <input
            type="text"
            value={churchBranchId}
            onChange={handleChurchBranchIdChange}
          />
        </div>
        <div>
          <label>Pastor ID:</label>
          <input type="text" value={pastorId} onChange={handlePastorIdChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AttendanceSetup;
