import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';



const EditButtons = () => {
    const navigate = useNavigate();

    const routeOrganizations = () => {
        navigate('/organizationlist');
    };
    const routeClassrooms = () => {
        navigate('/classroomlist');
      };
    const routeTeachers = () => {
        navigate('/teacherlist');
    };
    const routeLessons = () => {
        navigate('/lessonlist');
    };

    return(
        <div>
            <button type="button" onClick={routeOrganizations}>Edit Organizations</button>
            <button type="button" onClick={routeClassrooms}>Edit Classrooms</button>
            <button type="button" onClick={routeTeachers}>Edit Teachers</button>
            <button type="button" onClick={routeLessons}>Edit Lessons</button>
        </div>
    );
};

export default EditButtons;