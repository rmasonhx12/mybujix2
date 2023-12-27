// Teacher component

// TeacherComponent.js
import { HMSPrebuilt } from '@100mslive/roomkit-react';

const Teacher = () => {
  return (
    <div style={{ height: "100vh" }}>
     <HMSPrebuilt roomCode="bes-frsu-gau" /> 
    {/* <HMSPrebuilt roomCode="hke-kqlq-vwd" /> */}
  </div>
  );
};

export default Teacher;
