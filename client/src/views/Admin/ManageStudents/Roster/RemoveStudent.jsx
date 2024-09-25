// this works on the View button that creates a pop up box for 
// additional information that did not fit in the table
/*
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { deleteStudent, getStudent} from '../../../../Utils/requests';
import { message } from 'antd';

export default function RemoveStudentButton({ student }) {
    const [currentStudent, setStudent] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await getStudent(student.id);
          if (res.data) {
            setStudent(res);
            console.log(res);
          } else {
            message.error(res.err);
          }
        } catch {}
      };
      fetchData();
    }, []);

      const handleDelete = async (currentStudent) => {
        console.log(currentStudent.data);
        const res = await deleteStudent(currentStudent.data);
        console.log(res);
        if (res.data) {
          message.success(`Successfully deleted student, ${res.data.name}.`);
        } else {
          message.error(res.err);
        }
      };

  return (
    <div>
      <Button variant="danger" onClick={handleDelete}>
        Remove
      </Button>
    </div>
  );
}
*/