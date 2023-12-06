import { Divider, message, Table } from "antd"
import React, { useState, useEffect } from "react"
import { addLesson, getLessonModuleAll } from "../../../../../Utils/requests"
import "./AddLesson.less"

export default function AddLesson({ addLessonToTable }) {
  const [name, setName] = useState("");
  const [id, setID] = useState("");
  const [expectations, setExpectations] = useState("");
  const [unit, setUit] = useState([]);
  const [activities, setActivities] = useState([]);
  const [number, setNumber] = useState("");
  const [standards, setStandards] = useState("");
  // const [tableData, setTableData] = useState([]) //CHECK THIS
  const [lessons, setLessons] = useState([]);
  const [newLesson, setNewLesson] = useState([]);
  // const [newUnit, setUnit] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getLessonModuleAll();
        if (res.data) {
          setLessons(res.data);
        } else {
          message.error(res.err);
        }
      } catch {}3
    };
    fetchData();
  }, []);

  const buttonRef = React.createRef()

  // const handleManualAdd = async () => {
  //   // CHECK THIS
  //   // setNewLesson(lessons);
  //   // newLesson.id = id;
  //   // newLesson.standards = standard;
  //   // newLesson.unit = newUnit;
  //   // newUnit.id = unitID;
  //   // newUnit.name = unitName;
  //   const res = await addLesson(name);
  //   console.log("RES", res);
  //   if (res.data) {
  //     console.log(res.data, "IT IS WORKING");
  //     addLessonToTable([res.data]);
  //     message.success(
  //       `${name} has been added to the roster successfully.`
  //     )
  //     setName("");
  //     getTableData();
  //     // setNewLesson([]);
  //     // setUnit([]);
  //   } else {
  //     message.error(res.err)
  //   }
  // }

const handleManualAdd = async () => {
  try {
    const lessonData = {
      number: number,
      id: id,
      name: name,
      expectations: expectations,
      activities: activities,
      unit: unit,
      standards: standards,
      link: 'link.com',
      created_by: 'Administrator', 
      updated_by: 'Administrator', 
    };
    const res = await addLesson(lessonData);
    if (res.data) {
      console.log(res.data, "IT IS WORKING");
      addLessonToTable([res.data]);
      message.success(`${name} has been added to the roster successfully.`);
      setName("");
      getTableData();
    } else {
      message.error(res.err);
    }
  } catch (error) {
    console.error('An error occurred while adding a lesson module:', error);
  }
};

  // CHECK THIS
  // const getTableData = async lessons => {
  //   const tableData = await lessons.map((lesson, index) => {
  //     return {
  //       key: index,
  //       name: lesson.name,
  //     }
  //   })
  //   setTableData(tableData)
  //   return tableData
  // }

  const getTableData = async (lessons) => {
    const tableData = await lessons.map((lesson) => {
      return {
        key: lesson.id, 
        name: lesson.name,
      };
    });
    setTableData(tableData);
    return tableData;
  };
  

  return (
    <div id="add-students">
      <div id="manual-input">
        <h3>Manual Input:</h3>
        <p>
          Input the name you want for a new Lesson Module here:
        </p>
        <form>
          <input
            type="text"
            value={name}
            onChange={e => {
              setName(e.target.value)
            }}
            id="name"
            name="name"
            placeholder="Lesson Module Name"
          />
          <input
            type="text"
            value={id}
            onChange={e => {
              setID(e.target.value)
            }}
            id="id"
            name="id"
            placeholder="Lesson Module ID"
          />
          <input
            type="text"
            value={number}
            onChange={e => {
              setNumber(e.target.value)
            }}
            id="number"
            name="number"
            placeholder="Lesson Module Number"
          />
          <input
            type="text"
            value={expectations}
            onChange={e => {
              setExpectations(e.target.value)
            }}
            id="expectations"
            name="expectations"
            placeholder="Lesson Expectations"
          />
          <input
            type="text"
            value={standards}
            onChange={e => {
              setStandards(e.target.value)
            }}
            id="standards"
            name="standards"
            placeholder="Lesson Standards"
          />
          <br />
          <input type="button" value="Add Lesson" onClick={handleManualAdd} />
        </form>
      </div>
      <Divider />
       {/* <Table
              dataSource={data} 
              // dataSource={tableData}
              columns={columns}
              size="small"
              title={() => "Review your current lesson module:"}
            /> */}
      <div>
        <h3>Add other Stuff Here:</h3>
        <p>
          something something something
        </p>
        <br />
      </div>
    </div>
  )
}
