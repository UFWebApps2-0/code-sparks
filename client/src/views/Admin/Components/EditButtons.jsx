import { useNavigate } from 'react-router-dom';
import "../Admin.less"
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
    const handleClick = () => {
        console.log('Button clicked!');
      };

    return(
        <div>
            <button className="custom-button" onClick={routeOrganizations}>Edit Organizations</button>
            <br/>
            <button className="custom-button" onClick={routeClassrooms}>Edit Classrooms</button>
            <br/>
            <button className="custom-button" onClick={routeTeachers}>Edit Teachers</button>
            <br/>
            <button className="custom-button" onClick={routeLessons}>Edit Lessons</button>
        </div>
    );
};

export default EditButtons;