import React, { useEffect } from 'react';
import { getMentor, updateTeacherProfilePicture} from '../../../Utils/requests';

//updates the profile picture
async function queryDB(picture){
  let teacher_profile = await getMentor();
  const response = await updateTeacherProfilePicture(teacher_profile.data.id, picture);
  if (response.err) {
    console.log("Failed to update profile pircture, error: " + response.err)
  } else {
    console.log('Update success');
  }
}

const ProfilePic = () => {
  useEffect(() => {
    const fileInput = document.getElementById('imageInput');

    if (fileInput) {
      fileInput.addEventListener('change', (event) => {
        if (event?.target.files[0]) {
          const reader = new FileReader();
          reader.onload = (e) => {
            queryDB(e.target.result);
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      });
    }
  }, []);

  return (
    <div>
      <input type="file" id="imageInput" accept="image/*" />
    </div>
  );
};

export default ProfilePic;

