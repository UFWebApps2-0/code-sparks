import React, { useEffect, useState } from 'react';
import { getMentor, updateTeacherProfilePicture} from '../../../Utils/requests';
import UpdateProfile from '../../UpdateProfile/UpdateProfile';

const ProfilePic = () => {

  return (
    <div>
      <input type="file" id="imageInput" accept="image/*" />
      <UpdateProfile isTeacher={1}/>
    </div>
  );
};

export default ProfilePic;

