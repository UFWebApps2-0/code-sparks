import { Divider, message, Table } from "antd"
import React, { useState, useEffect } from "react"
import { addLesson, getLessonModuleAll } from "../../../../../Utils/requests"
import "./AddLesson.less"

export default function AddLesson({ addLessonToTable }) {
  const [name, setName] = useState("");
  // const [id, setID] = useState("")
  // const [standard, setStandard] = useState("")
  // const [unitID, setUnitID] = useState("")
  // const [unitName, setUnitName] = useState("")
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

  const handleManualAdd = async () => {
    // CHECK THIS
    // setNewLesson(lessons);
    // newLesson.id = id;
    // newLesson.standards = standard;
    // newLesson.unit = newUnit;
    // newUnit.id = unitID;
    // newUnit.name = unitName;
    const res = await addLesson(name);
    console.log("RES", res);
    if (res.data) {
      console.log(res.data, "IT IS WORKING");
      addLessonToTable([res.data]);
      message.success(
        `${name} has been added to the roster successfully.`
      )
      setName("");
      getTableData();
      // setNewLesson([]);
      // setUnit([]);
    } else {
      message.error(res.err)
    }
  }

  // this is only for the table within ADD 
  // REMOVE AFTER
  // const columns = [
  //   {
  //     title: 'Lesson Name',
  //     dataIndex: 'name',
  //   },
  //   {
  //     title: 'Lesson ID',
  //     dataIndex: 'id',
  //   },
  //   {
  //     title: 'Lesson Standard',
  //     dataIndex: 'lessonStandard',
  //   },
  //   {
  //     title: 'Unit Name',
  //     dataIndex: 'unitName',
  //   },
  //   {
  //     title: 'Unit ID',
  //     dataIndex: 'unitID',
  //   },
  //   {
  //     title: 'Grade Level',
  //     dataIndex: 'grade',
  //   },
  //   {
  //     title: 'Activity 1',
  //     dataIndex: "activity1",
  //   }
  // ]

  // const data = lessons.map((lesson) => ({
  //   name: lesson.name,
  //   id: lesson.id,
  //   lessonStandard: lesson.standards,
  //   unitName: lesson.unit.name,
  //   unitID: lesson.unit.id,
  //   grade: lesson.unit.grade,
  // }));

  // CHECK THIS
  const getTableData = async lessons => {
    const tableData = await lessons.map((lesson, index) => {
      return {
        key: index,
        name: lesson.name,
      }
    })
    setTableData(tableData)
    return tableData
  }

  // const handleOnDrop = async roster => {
  //   // on file select, filter out bad data and set uploadedRoster and tableData
  //   let badInput = false
  //   let lessons = roster.filter(lesson => {
  //     if (lesson.data.name) {
  //       if (nameIsFormatted(lesson.data.name.trim())) return true
  //       badInput = true
  //     }
  //     return false
  //   })
  //   lessons = await lessons.map(lesson => {
  //     return {
  //       name
  //     }
  //   })

  //   const data = await getTableData(lessons)
  //   setTableData(data)
  // }


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
          {/* <input
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
            value={standard}
            onChange={e => {
              setStandard(e.target.value)
            }}
            id="standard"
            name="standard"
            placeholder="Lesson Module Standard"
          />
          <input
            type="text"
            value={unitID}
            onChange={e => {
              setUnitID(e.target.value)
            }}
            id="unitID"
            name="unitID"
            placeholder="Lesson Unit ID"
          />
          <input
            type="text"
            value={unitName}
            onChange={e => {
              setUnitName(e.target.value)
            }}
            id="unitName"
            name="unitName"
            placeholder="Lesson Unit Name"
          /> */}
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
