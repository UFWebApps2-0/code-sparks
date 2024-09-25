import { Divider, message, Table } from "antd"
import React, { useState, useEffect } from "react"
import { addLesson, getLessonModuleAll } from "../../../../../Utils/requests"
import "./AddLesson.less"

// work in progress

/* 
realized that the issue was my table and get Strapi data needed 
ALL fields to be filled, will need to adjust for fields that
are not given but will still add to table. 
*/

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
  const [newLesson, setNewLesson] = useState({
    number: '',
    id: '',
    name: '',
    expectations: '',
    activities: '',
    unit: '',
    standards: '',
    link: '',
    created_by: 'Administrator', 
    updated_by: 'Administrator', 
  });
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
      number: '',
      id: '',
      name: '',
      expectations: '',
      activities: '',
      unit: '',
      standards: '',
      link: '',
      created_by: 'Administrator', 
      updated_by: 'Administrator', 
    };
    const res = await addLesson(newLesson);
    console.log('response', res); // delete after
    if (res.data) {
      console.log(res.data, "IT IS WORKING");
      addLessonToTable([res.data]);
      message.success(`${name} has been added to the roster successfully.`);
      setNewLesson(lessonData);
      getTableData();
    } else {
      message.error(res.err);
    }
  } catch (error) {
    console.error('An error occurred while adding a lesson module:', error);
  }
};

  const getTableData = async () => {
    try {
      let lessonData = await getLessonModuleAll();
      lessonData = lessonData.data;
      setLessons(lessonData);
    } catch (error) {
      console.error('Error fetching updated lesson data:', error);
    }
  }

  return (
    <div id="add-students">
      <div id="manual-input">
        <h3>Manual Input:</h3>
        <p>
          Input all required information for a new Lesson Module.
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
        {/* <h3>Add other Stuff Here:</h3> */}
        <p>
          add important foot notes here
        </p>
      </div>
    </div>
  )
};

