// taken from MentorSubHeader.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import AddLessonModal from '../../views/admin/Lessons/Roster/AddLesson/AddLessonModal';
import './AdminSubHeader.less';

export default function AdminSubHeader(props) {
  const {
    title,
    listViewActive,
    checkoutActive,
    setListView,
    addUserActive,
    addLessonToTable,
  } = props;

  return (
    <div id='page-header'>
      <h1>{title}</h1>
      <span id='header-nav'>
        {listViewActive ? (
          <button onClick={() => setListView(true)} id='link'>
            <i className='fa fa-list-alt' />
          </button>
        ) : null}
        {addUserActive ? (
          <AddLessonModal
            addLessonToTable={addLessonToTable}
          />
        ) : null}
        {checkoutActive ? (
          <Link id='link' to={'/dashboard'}>
            <i className='fa fa-shopping-cart' />
          </Link>
        ) : null}
      </span>
    </div>
  );
}
