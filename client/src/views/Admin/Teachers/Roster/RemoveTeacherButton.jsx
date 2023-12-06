// this works on the View button that creates a pop up box for 
// additional information that did not fit in the table

import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { deleteTeacher, getTeacher} from '../../../../Utils/requests';
import { message } from 'antd';

export default function RemoveTeacherButton({ teacher }) {
    const [currentTeacher, setTeacher] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await getTeacher(teacher.id);
          if (res.data) {
            setTeacher(res);
            console.log(res);
          } else {
            message.error(res.err);
          }
        } catch {}
      };
      fetchData();
    }, []);

      const handleDelete = async (currentTeacher) => {
        console.log(currentTeacher.data);
        const res = await deleteTeacher(currentTeacher.data);
        console.log(res);
        if (res.data) {
          message.success(`Successfully deleted teacher, ${res.data.name}.`);
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
