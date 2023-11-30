import React, { useEffect } from 'react';
import { getCurrentStudent, getStudent, updateStudentProfilePicture } from '../../../Utils/requests';

//gets the current signed in user to get their profile picture
let currentStudent = await getCurrentStudent();

//updates the profile picture
async function queryDB(picture){
    console.log(currentStudent.data.students[0].id);
    let k = await getStudent(currentStudent.data.students[0].id)
    console.log(k);
    //quries to get the student and update it as such
  const response = await updateStudentProfilePicture(currentStudent.data.students[0].id, picture);
  if (response.err) {
    console.log("Response failed with " + response.err)
  } else {
    console.log('Updated Profile Successfully');
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
      <input type="file" id="imageInput" title=" " accept="image/*" />
    </div>
  );
};

export default ProfilePic;
