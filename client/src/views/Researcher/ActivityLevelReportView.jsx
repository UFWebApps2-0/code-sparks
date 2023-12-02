import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Table } from 'antd';
import NavBar from '../../components/NavBar/NavBar';
import { getSession } from '../../Utils/requests';
import './ActivityLevelReportView.less';

const ActivityLevelReportView = () => {
    const { id } = useParams();
    const [session, setSession] = useState({});
    const [studentName, setStudentsName] = useState([]);
    const [studentPartner, setStudentsPartner] = useState([]);
    const [className, setClassName] = useState([]);
    const [clicks, setClicks] = useState(0);
    const [feedbacks, setFeedbacks] = useState([]);
    const [newFeedback, setNewFeedback] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const navigate = useNavigate();

    useEffect(function () {
        const getData = async () => {
            const session = await getSession(id);
            setSession(session.data);

            const fetchedStudents = session.data.students[0].name;
            setStudentsName(fetchedStudents);

            const fetchedPartner = session.data.students
                .slice(1)
                .map((student) => student.name);
            setStudentsPartner(fetchedPartner);

            const fetchedClassroomNames = session.data.classroom.name;
            setClassName(fetchedClassroomNames);

            const l = session.data.saves[0]?.replay.length;
            const fetchedClicks = session.data.saves[0]?.replay[l - 1]?.clicks;
            setClicks(fetchedClicks);
        };

        fetchFeedback();

        getData();
    }, []);

    const timeConverter = (timestamp) => {
        var options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            second: undefined,
            hour12: true
        };
        var date = new Date(timestamp);
        var timeString = date.toLocaleString('en-US', options);
        var formattedTime = timeString.replace(/(^|\D)0(\d\D)/, '$1$2');
        return formattedTime;
    };

    const calculateEndTime = () => {
        if (session.saves?.length) {
            if (session.saves[session.saves.length - 1].created_at) {
                return session.saves[session.saves.length - 1].created_at;
            }
            return 'Unknown, no saves';
        }
    };

    const showReplayButton = () => {
        if (session.saves?.length) {
            const latestSave = session.saves[session.saves.length - 1];
            return (
                <Link id='replay-btn' className='btn' to={`/replay/${latestSave.id}`}>
                    View Code Replay
                </Link>
            );
        }
    };

    const fetchFeedback = async () => {
        // Simulated delay for now
        // Sprint 2 will include data retrieval from backend
        setTimeout(() => {
            const feedbackRes = [
                { timestamp: '11/28/2023, 10:00 AM', comment: 'Fantastic job on this project!' },
                { timestamp: '11/28/2023, 9:30 AM', comment: 'You\'re so close! Just need to play around a little bit more with the timings of everything. Try decreasing your wait time by 1000 milliseconds.' },
            ];

            setFeedbacks(feedbackRes.map((feedback, index) => ({
                key: index,
                timestamp: feedback.timestamp,
                comment: feedback.comment
            })));
        }, 1000);
    };

    const submitStudentFeedback = () => {
        const newFeedbackEntry = {
            key: feedbacks.length,
            timestamp: timeConverter(new Date()),
            comment: newFeedback
        };

        setFeedbacks([newFeedbackEntry, ...feedbacks]);
        setNewFeedback(''); // Clear textarea
        setShowConfirmation(true);

        setTimeout(() => {
            setShowConfirmation(false);
        }, 5000); // Hide confirmation after 5 seconds
    };

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
        <div className='container nav-padding'>
            <NavBar />
            <div className='menu-bar'>
                <div id='activity-level-report-header'>Activity Level - Student Report</div>
                <button
                    id={'activity-level-return'}
                    className={`btn-${'primary'} btn-${'sm'}`}
                    type='button'
                    onClick={() => navigate(-1)}
                >
                    Return to Activity Level
                </button>
            </div>

            <main id='content-wrapper'>
                <section id='container-section'>
                    <section id='student-report-section'>
                        <p>
                            <strong>Student Name: </strong>
                            {studentName}
                        </p>
                        <p>
                            <strong>Partner Name: </strong>
                            {studentPartner.length > 0 ? studentPartner.join(', ') : <i>(no partner)</i>}
                        </p>
                        <p>
                            <strong>Class Name: </strong>
                            {className}
                        </p>
                        <br />
                        <p>
                            <strong>Started: </strong>
                            {timeConverter(session.created_at)}
                        </p>
                        <p>
                            <strong>Ended: </strong>
                            {timeConverter(calculateEndTime())}
                        </p>
                        <p>
                            <strong>Mouse Clicks: </strong>
                            {clicks}
                        </p>
                        <p>
                            <strong>Times Tested: </strong>
                            {session.submissions?.length} times
                        </p>
                        <p>
                            <strong>Feedback to Student:<br /></strong>
                            <textarea
                                id={'activity-level-student-feedback'}
                                value={newFeedback}
                                placeholder='Type your feedback here...'
                                onChange={(e) => setNewFeedback(e.target.value)}
                                rows={4}
                                style={{ resize: 'both', width: '100%' }}
                            />
                            <br />
                            <button
                                id={'submit-feedback-button'}
                                className={`btn-${'primary'} btn-${'sm'}`}
                                type='button'
                                onClick={submitStudentFeedback}
                            >
                                Add Comment
                            </button>
                            {showConfirmation && <span className="confirmation-message"><i className="fas fa-check-circle">&nbsp;</i>Feedback submitted!</span>}

                            <Table className="feedback-table" dataSource={feedbacks} columns={columns} />
                        </p>
                    </section>
                </section>
                <br />
                {showReplayButton()}
            </main>
        </div>
    );
};

export default ActivityLevelReportView;
