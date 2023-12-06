import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { getTeachers, addTeacher } from '../../../../Utils/requests';

const AddTeacherForm = () => {

    const [teachers, setTeachers] = useState([]);
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      school: '',
      user: '',
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const res = await addTeacher(
        formData.firstName,
        formData.lastName,
        formData.school,
        formData.user
      );

      if (res.data) {
        setTeachers(res.data);
        message.success('Teacher added successfully');
      } else {
        message.error(res.err);
      }

      // Optionally, you can reset the form after a successful submission
      setFormData({
        firstName: '',
        lastName: '',
        school: '',
        user: '',
        email: '',
      });
    } catch (error) {
      console.error('Failed to add Teacher:', error.message);
      // Handle error feedback to the user if needed
    }
  };

    return (
        <form onSubmit={handleSubmit}>
        <label>
            First Name:
            <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            />
        </label>
        <br />

        <label>
            Last Name:
            <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            />
        </label>
        <br />

        <label>
            School:
            <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            />
        </label>
        <br />

        <label>
            User:
            <input
            type="text"
            name="user"
            value={formData.user}
            onChange={handleChange}
            />
        </label>
        <br />

        <button type="submit">Submit</button>
        </form>
    );
};

export default AddTeacherForm;