import React, { useState } from "react";

const MyComponent = () => {
  const [showMessageBar, setShowMessageBar] = useState(false);
  const [apologySMS, setApologySMS] = useState("");

  const decreaseHandler = (id, attendance) => {
    if (apologySMS !== "") {
      decrease(id, attendance, apologySMS);
      // Reset the input field and hide the message bar
      setApologySMS("");
      setShowMessageBar(false);
    } else {
      // Show the message bar if the input field is empty
      setShowMessageBar(true);
    }
  };

  return (
    <div>
      {showMessageBar && (
        <div>
          Please provide an apology message:
          <input
            type="text"
            value={apologySMS}
            onChange={(e) => setApologySMS(e.target.value)}
          />
        </div>
      )}
      <button onClick={() => decreaseHandler(id, attendance)}>Decrease</button>
    </div>
  );
};

export default MyComponent;
export const getTotals = (cart, branchs, attendanceRecord) => {
  let totalAmount = 0;
  let totalCost = 0;

  for (let { amount } of cart.values()) {
    totalAmount += amount;
  }

  const desiredAttendance = 
       if (attendance.date === action.payload.attendanceRecord.date) {
            return {
              ...attendance,
              total_attended: attendance.total_attended
                ? attendance.total_attended + 1
                : 1,
            };
          }

  const total_absent = desiredAttendance.total_absent;
  totalCost = total_absent;

  return { totalAmount, totalCost };
};
          if (attendance.date === action.payload.attendanceRecord.date) {
            return {
              ...attendance,
              total_attended: attendance.total_attended
                ? attendance.total_attended + 1
                : 1,
            };
          }


          export const getTotals = (cart, branches, attendanceRecord) => {
  let totalAmount = 0;
  let totalCost = 0;

  for (let { amount } of cart.values()) {
    totalAmount += amount;
  }

  const desiredBranch = branches.find((branch) => branch._id === attendanceRecord.branch);

  if (desiredBranch) {
    const newBranch = {
      ...desiredBranch,
      attendance: desiredBranch.attendance.map((attendance) => {
        if (attendance.date === attendanceRecord.date) {
          return {
            ...attendance,
            total_attended: attendance.total_attended ? attendance.total_attended + 1 : 1,
          };
        }
        return attendance;
      }),
    };

    totalCost = newBranch.attendance.find((attendance) => attendance.date === attendanceRecord.date)?.total_absent || 0;
  }

  return { totalAmount, totalCost };
};
export const getTotals = (cart, branchs, attendanceRecord) => {
  let totalAmount = 0;
  let totalCost = 0;

  for (let { amount } of cart.values()) {
    totalAmount += amount;
  }

  const desiredAttendance = branchs
    .find((branch) => branch._id === attendanceRecord.branch)
    .attendance.find((attendance) => attendance.id === attendanceRecord.date);

  const total_absent = desiredAttendance.total_absent;
  totalCost = total_absent;
  
  totalCost = branchs.attendance.map((attendance) => {
          if (attendance.date === attendanceRecord.date) {
            return {
               
               
                
            };
          }
        })

  return { totalAmount, totalCost };
};

const newBranchs = new Map();
branchs.forEach((branch) => {
  newBranchs.set(branch._id, branch);
});

const branch1 = newBranchs.get("branch1");
if (branch1) {
  const totalAttended = branch1.attendance[0].total_attended;
  console.log(totalAttended);
}


const newBranchs = new Map();
branchs.forEach((branch) => {
  newBranchs.set(branch._id, branch);
});

const branch = newBranchs.get("branch1");
console.log("branch");
console.log(branch);

if (branch) {

  const attendanceRecord = branch.attendance.find(
    (record) => record.date === date
  );
console.log(attendanceRecord);
  if (attendanceRecord) {
    const totalAttended = attendanceRecord.total_attended;
    
  }
