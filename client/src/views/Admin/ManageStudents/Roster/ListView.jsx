import React from 'react';
import LessonModal from './LessonModal';
import { Table, Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
//import RemoveStudentButton from './RemoveStudentButton';


export default function LessonListView({ students , handleDelete }) {
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
    {/*
      title: 'Remove',
      dataIndex: 'remove',
      width: '10%',
      align: 'center',
      render: (_, record) => (
        <RemoveStudentButton
          student={record}
        />
      ),
      */},
      {
        title: 'Delete',
        dataIndex: 'delete',
        key: 'delete',
        width: '10%',
        align: 'right',
        render: (text, record) =>
          students.length >= 1 ? (
            <Popconfirm
              title={`Are you sure you want to delete all data for ${record.name}?`}
              icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
              onConfirm={() => handleDelete(record)}
            >
              <button id='link-btn'> Delete</button>
            </Popconfirm>
            
          ) : null,
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
