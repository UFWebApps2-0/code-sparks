import React, { useEffect } from 'react';
import { getCurrentStudent, getStudent, updateStudentProfilePicture } from '../../../Utils/requests';
import UpdateProfile from '../../UpdateProfile/UpdateProfile';

  const ProfilePic = () => {


  return (
    <div>
      <input type="file" id="imageInput" title=" " accept="image/*" />
      <UpdateProfile isTeacher={0}/>
    </div>
  );
  };


export default ProfilePic;
