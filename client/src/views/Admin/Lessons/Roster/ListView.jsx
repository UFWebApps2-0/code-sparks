import React from 'react';
import { Table, Tag } from 'antd';

export default function LessonListView({ lessons }) {
  const columns = [
    {
      title: 'Lesson Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Lesson ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Unit Name',
      dataIndex: 'unitName',
      key: 'unitName',
    },
    {
      title: 'Unit ID',
      dataIndex: 'unitID',
      key: 'unitID',
    },
    {
      title: 'Grade Level',
      dataIndex: 'grade',
      key: 'grade',
    },
    // {
    //   title: 'Activities',
    //   dataIndex: 'activities',
    //   key: 'activities',
    // },
  ];

  const data = lessons.map((lesson) => ({
    key: lesson.id,
    name: lesson.name,
    id: lesson.id,
    unitName: lesson.unit.name,
    unitID: lesson.unit.id,
    grade: lesson.unit.grade,
    // activities: lesson.activities,
  }));

  return (
    <div id='table-container'>
      <Table columns={columns} dataSource={data} rowKey='id' />
    </div>
  );
}

// {lessons.map( module => {
//   return (
//     <div className="card">
//       <div class="card-deck">
//       <div class="card">
//       <div class="card-body">
//         <h5 class="card-title">{module.name}</h5>
//         <p class="card-text">
//         <div> Lesson ID: {module.id} </div>
//         <div> Expectations: {module.expectations} </div>
//         </p>
//       </div>
//     </div>
//     <div class="card">
//       <div class="card-body">
//         <h5 class="card-title">Details</h5>
//         <p class="card-text">
//         <strong>Unit</strong>
//         <div> Unit: {module.unit.name} </div>
//         <div> Unit ID: {module.unit.id} </div>
//         <div> Grade: {module.unit.grade} </div>
//         <div> Standards: {module.unit.standards_id} - {module.unit.standards_description} </div>
//         <br></br><strong>Activities</strong>
//         {module.activities.map( data => {
//         return( 
//           <div>
//             <div key={module.key}> Activity {data.number} ID: { data.id }</div>
//             <div> Activity Description: {data.description} </div>
//           </div>
//         )
//       })}

//         </p>
//       </div>
//     </div>
//     </div>
//     </div> 

//   )
  
//   })}