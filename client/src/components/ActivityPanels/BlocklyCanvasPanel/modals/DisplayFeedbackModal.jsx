import { Modal, Button, Table } from "antd"
import React, { useState } from "react"
import { message } from "antd"

export default function DisplayFeedbackModal({ feedback, isVisible, setIsVisible }) {
    const handleCancel = () => {
        setIsVisible(false)
    }

    const handleOk = () => {
        setIsVisible(false)
        message.destroy(); // Only remove toast message if the user clicks OK
    }

    const columns = [
        {
            title: 'Date/Time',
            dataIndex: 'timestamp',
            key: 'timestamp',
        },
        {
            title: 'Comment',
            dataIndex: 'comment',
            key: 'comment',
        },
    ];

    return (
        <Modal
            title="Feedback From Your Teacher"
            visible={isVisible}
            onCancel={handleCancel}
            onOk={handleOk}
            width="80%"
            footer={[
                <Button key="submit" type="primary" onClick={handleOk}>
                    OK
                </Button>,
            ]}
        >
            <Table dataSource={feedback} columns={columns} pagination={false} />
        </Modal>
    );
}