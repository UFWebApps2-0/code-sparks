import React from 'react';
import { Table, Tag } from 'antd';
import LessonModal from './LessonModal';

export default function LessonListView({ lessons }) {
  const columns = [
    {
      title: 'Lesson Name',
      dataIndex: 'name',
    },
    {
      title: 'Lesson ID',
      dataIndex: 'id',
    },
    {
      title: 'Unit Name',
      dataIndex: 'unitName',
    },
    {
      title: 'Unit ID',
      align: 'center',
      dataIndex: 'unitID',
    },
    {
      title: 'Grade Level',
      width: '15%',
      align: 'center',
      dataIndex: 'grade',
    },
    {
      title: 'Details',
      dataIndex: 'view',
      width: '10%',
      align: 'center',
      render: (_, record) => (
        <LessonModal
          lessons={record}
          linkBtn={true}
        />
      ),
    },
    // {
    //   title: 'Activities',
    //   dataIndex: 'activities',
    //   key: 'activities',
    // },
  ];

  const data = lessons.map((lesson) => ({
    name: lesson.name,
    id: lesson.id,
    unitName: lesson.unit.name,
    unitID: lesson.unit.id,
    grade: lesson.unit.grade,
    view: lesson,
    // activities: lesson.activities,
  }));

  return (
    <div id='table-container'>
      <Table columns={columns} dataSource={data} rowKey='id' />
    </div>
  );
}

// R E F E R E N C E information
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