import React from 'react';
import { Table } from 'antd';
import LessonModal from './LessonModal';

export default function LessonListView({ students }) {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    /* {
      title: 'Last Name',
      dataIndex: 'lastName',
    }, */
    {
      title: 'Student ID',
      dataIndex: 'id',
    },
    {
      title: 'Character',
      dataIndex: 'character',
    },
    {
      title: 'Details',
      dataIndex: 'view',
      width: '10%',
      align: 'center',
      render: (_, record) => (
        <LessonModal
          teacher={record}
          linkBtn={true}
        />
      ),
    },
  ];

  const data = students.map((student) => ({
    name: student.name,
   // lastName: student.last_name,
    id: student.id,
    character: student.character,
  }));

  return (
    <div id='table-container'>
      <Table columns={columns} dataSource={data} rowKey='id' />
    </div>
  );
}
