import { message } from "antd"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import BlocklyCanvasPanel from "../../components/ActivityPanels/BlocklyCanvasPanel/BlocklyCanvasPanel"
import NavBar from "../../components/NavBar/NavBar"
import DisplayFeedbackModal from "../../components/ActivityPanels/BlocklyCanvasPanel/modals/DisplayFeedbackModal"
import {
    getAuthorizedWorkspaceToolbox,
    getActivityToolbox,
    getActivityToolboxAll,
} from "../../Utils/requests"
import { useGlobalState } from "../../Utils/userState"

export default function BlocklyPage({ isSandbox }) {
    const [value] = useGlobalState("currUser")
    const [activity, setActivity] = useState({})
    const [feedback, setFeedback] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const setup = async () => {
            // if we are in sandbox mode show all toolbox
            const sandboxActivity = JSON.parse(localStorage.getItem("sandbox-activity"))
            if (isSandbox) {
                const AllToolboxRes = await getActivityToolboxAll()
                if (!sandboxActivity?.id || value.role === "Mentor") {
                    if (AllToolboxRes.data) {
                        let loadedActivity = {
                            ...sandboxActivity,
                            toolbox: AllToolboxRes.data.toolbox,
                        }
                        localStorage.setItem("sandbox-activity", JSON.stringify(loadedActivity))
                        setActivity(loadedActivity)
                    } else {
                        message.error(AllToolboxRes.err)
                    }
                } else if (value.role === "ContentCreator") {
                    const res = await getAuthorizedWorkspaceToolbox(sandboxActivity.id)
                    if (res.data) {
                        let loadedActivity = { ...sandboxActivity, selectedToolbox: res.data.toolbox }
                        loadedActivity = { ...loadedActivity, toolbox: AllToolboxRes.data.toolbox }

                        localStorage.setItem("sandbox-activity", JSON.stringify(loadedActivity))
                        setActivity(loadedActivity)
                    } else {
                        message.error(res.err)
                    }
                }
            }
            // else show toolbox based on the activity we are viewing
            else {
                const localActivity = JSON.parse(localStorage.getItem("my-activity"))

                if (localActivity) {
                    if (localActivity.toolbox) {
                        setActivity(localActivity)
                    } else {
                        const res = await getActivityToolbox(localActivity.id)
                        if (res.data) {
                            let loadedActivity = { ...localActivity, toolbox: res.data.toolbox }

                            localStorage.setItem("my-activity", JSON.stringify(loadedActivity))
                            setActivity(loadedActivity)
                        } else {
                            message.error(res.err)
                        }
                    }
                } else {
                    navigate(-1)
                }
            }
        }

        const showFeedbackMessage = () => {
            const content = (
                <span>
                    Your teacher has provided feedback on your latest submission.{' '}
                    <span
                        style={{ color: '#1890ff', cursor: 'pointer', textDecoration: 'underline' }}
                        onClick={() => setIsModalVisible(true)}
                    >
                        Review now
                    </span>
                </span>
            );

            message.info({
                content: content,
                duration: 0,
                onClick: () => {
                    setIsModalVisible(true);
                },
            });
        };

        const fetchFeedback = async () => {
            // Simulated delay for now
            // Sprint 2 will include data retrieval from backend
            setTimeout(() => {
                const feedbackRes = [
                    { timestamp: '11/6/2023, 10:00 AM', comment: 'Fantastic job on this project!' },
                    { timestamp: '11/6/2023, 9:30 AM', comment: 'You\'re so close! Just need to play around a little bit more with the timings of everything. Try decreasing your wait time by 1000 milliseconds.' },
                ];

                setFeedback(feedbackRes);
                showFeedbackMessage();
            }, 1000);
        };

        fetchFeedback();

        setup()
    }, [isSandbox, navigate, value.role])

    useEffect(() => {
        return () => {
            message.destroy();
        };
    }, [location]);

    return (
        <div className="container nav-padding">
            <NavBar />
            <div className="flex flex-row">
                <BlocklyCanvasPanel activity={activity} setActivity={setActivity} isSandbox={isSandbox} />
            </div>
            {feedback.length > 0 && (
                <DisplayFeedbackModal
                    feedback={feedback}
                    isVisible={isModalVisible}
                    setIsVisible={setIsModalVisible}
                />
            )}
        </div>
    )
}
