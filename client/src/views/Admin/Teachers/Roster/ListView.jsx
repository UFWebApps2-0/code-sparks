import React from 'react';
import { Table } from 'antd';
import LessonModal from './LessonModal';

export default function LessonListView({ teachers }) {
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
    },
    {
      title: 'Teacher ID',
      dataIndex: 'id',
    },
    {
      title: 'User Email',
      dataIndex: 'email',
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

  const data = teachers.map((teacher) => ({
    firstName: teacher.first_name,
    lastName: teacher.last_name,
    id: teacher.id,
    email: teacher.user.email,
  }));

  return (
    <div id='table-container'>
      <Table columns={columns} dataSource={data} rowKey='id' />
    </div>
  );
}
