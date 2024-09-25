import {Modal, Button} from 'antd';
import React, {useState} from "react";
import AddLesson from "./AddLesson";

export default function AddLessonModal(props) {
    const [visible, setVisible] = useState(false);
    const {addLessonToTable} = props;

    const showModal = () => {
        setVisible(true)
    };

    const handleCancel = () => {
        setVisible(false)
    };

    const handleOk = () => {
        setVisible(false)
    };

    return (
        <div id='link'>
            <button id='link' onClick={showModal}>
                <i className="fa fa-user-plus"/>
            </button>
            <Modal
                title={"Add lesson modules to the master list"}
                visible={visible}
                onCancel={handleCancel}
                width={'75vw'}
                footer={[
                    <Button key="ok" type="primary" onClick={handleOk}>
                        OK
                    </Button>,
                ]}
            >
                <AddLesson addLessonToTable={addLessonToTable} />
            </Modal>
        </div>
    );
}