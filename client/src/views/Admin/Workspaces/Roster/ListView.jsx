import React from 'react';
import { Table } from 'antd';
import LessonModal from './LessonModal';

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

  const data = workspaces.map((workspace) => ({
    name: workspace.name,
    id: workspace.id,
    description: workspace.description,
  }));

  return (
    <div id='table-container'>
      <Table columns={columns} dataSource={data} rowKey='id' />
    </div>
  );
}