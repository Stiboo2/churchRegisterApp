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
