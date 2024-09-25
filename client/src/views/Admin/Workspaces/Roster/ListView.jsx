import React from 'react';
import { Table } from 'antd';
import LessonModal from './LessonModal';

// below i define the column variables for my CASMM-themed table (Kyle and Anna helped me greatly when it came to integrating the
// CASMM-themed format)
export default function LessonListView({ workspaces }) {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Workspace ID',
      dataIndex: 'id',
    },
    {
        title: 'Description',
        dataIndex: 'description',
    },
    {
      title: 'Last Updated',
      dataIndex: 'updatedAt',
    },
    {
      title: 'Created Date',
      dataIndex: 'createdAt',
    },
    {
      title: 'Details',
      dataIndex: 'view',
      width: '10%',
      align: 'center',
      render: (_, record) => (
        <LessonModal
          workspace={record}
          linkBtn={true}
        />
      ),
    },
  ];

  // this function is where I map the variables to their back-end strapi API names to get specific data points
  const data = workspaces.map((workspace) => ({
    name: workspace.name,
    id: workspace.id,
    description: workspace.description,
    createdAt: workspace.created_at,
    updatedAt: workspace.updated_at,
  }));

  return (
    <div id='table-container'>
      <Table columns={columns} dataSource={data} rowKey='id' />
    </div>
  );
}