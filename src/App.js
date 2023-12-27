/* 
Original Prebuilt Code


import { HMSPrebuilt } from '@100mslive/roomkit-react';

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <HMSPrebuilt roomCode="hke-kqlq-vwd" />
    </div>
  );
}

export default App;
  */

// Jacqueline Taylor and Friends 1:1 Video Chat App



import React, { useState } from 'react';
import Teacher from './Teacher';
import Student from './Student';

function App() {
  const [selectedRole, setSelectedRole] = useState(null); // Initialize as null

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };



  return (
    <div>
      {selectedRole ? (
        // Render the selected role component
        selectedRole === 'teacher' ? (
          <Teacher />
        ) : (
          <Student />
        )
      ) : (
        // Render the selection options
        <>
          <h1>Welcome to the App</h1>
          <div>
            <label>
              <input
                type="radio"
                name="role"
                value="teacher"
                onChange={() => handleRoleChange('teacher')}
              />
              Desktop
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="student"
                onChange={() => handleRoleChange('student')}
              />
              Mobile
            </label>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
