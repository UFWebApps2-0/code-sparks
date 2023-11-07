import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Table, Button, Tag } from 'antd';
import './ActivityLevelReport.less';
import { useSearchParam } from '../../../Utils/useSearchParam';
import NavBar from '../../../components/NavBar/NavBar';

import {
  getSessionsWithFilter,
  getSessionCountWithFilter,
  getGrades,
  getUnit,
  getGrade,
  getClassroom,
} from '../../../Utils/requests';
import Form from 'antd/lib/form/Form';

import { Filter } from './ReportFilter';

const ActivityLevelReport = () => {
  const [sessions, setSessions] = useState([]);
  const [sessionCount, setSessionCount] = useState(0);
  const navigate = useNavigate();
  const { paramObj, setSearchParam } = useSearchParam();
  const [showFilter, setShowFilter] = useState(false);
  const [tbNameFilter, setTbNameFilter] = useState([]);
  const [tbClassroomFilter, setTbClassroomFilter] = useState([]);
  const [tbGradeFilter, setTbGradeFilter] = useState([]);
  const [tbUnitFilter, setTbUnitFilter] = useState([]);
  const [tbLessonFilter, setTbLessonFilter] = useState([]);
  const [tbPrevFilter, setTbPrevFilter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let filter = '';
      for (const [k, v] of Object.entries(paramObj)) {
        switch (k) {
          case '_start':
            filter += `_start=${v}&`;
            break;
          case '_sort':
            filter += `_sort=${v}&`;
            break;
          case 'pageSize':
            filter += `_limit=${v}&`;
            break;
          default:
            filter += `${k}=${v}&`;
        }
      }
      const [sessionRes, sessionCountRes] = await Promise.all([
        getSessionsWithFilter(filter),
        getSessionCountWithFilter(filter),
      ]);
      if (sessionRes.error) {
        console.error(sessionRes.error);
      }
      setSessions(sessionRes.data);
      setSessionCount(sessionCountRes.data);

      // set table head filter data
      makeTbNameFilter(sessionRes.data);
      setTbClassroomFilter(makeFilter(sessionRes.data, 'classroom'));
      setTbGradeFilter(makeFilter(sessionRes.data, 'grade'));
      setTbUnitFilter(makeFilter(sessionRes.data, 'unit'));
      setTbLessonFilter(makeFilter(sessionRes.data, 'lesson_module'));
    };
    if (paramObj['_sort']) fetchData();
  }, [paramObj]);

  const makeTbNameFilter = (data) => {
    let filter = [];
    const map = new Map();

    data.forEach((element) => {
      const names = element.students.map((student) => student.name);
      names.forEach((name) => {
        if (!map.get(name)) {
          filter.push({ text: name, value: name });
          map.set(name, true);
        }
      });
    });
    setTbNameFilter(filter);
  };

  const makeFilter = (data, category) => {
    let filter = [];
    const map = new Map();

    data.forEach((element) => {
      const name = element[category]?.name;
      if (name && !map.has(name)) {
        filter.push({ text: name, value: name });
        map.set(name, true);
      }
    });
    return filter;
  };

  const formatMyDate = (value, locale = 'en-US') => {
    let output = new Date(value).toLocaleDateString(locale);
    return output + ' ' + new Date(value).toLocaleTimeString(locale);
  };

  const columns = [
    {
      title: 'Student',
      key: 'student',
      width: '2%',
      align: 'left',
      filters: tbNameFilter,
      onFilter: (value, key) => {
        let result = false;
        key.students.forEach((student) => {
          if (student.name.indexOf(value) === 0) {
            result = true;
            return;
          }
        });
        return result;
      },
      render: (_, key) => <div>{key.students[0].name}</div>,
    },
    {
      title: 'Classroom',
      key: 'classroom',
      dataIndex: ['classroom', 'name'],
      width: '6%',
      align: 'left',
      filters: tbClassroomFilter,
      onFilter: (value, key) => key.classroom?.name.indexOf(value) === 0,
    },
    {
      title: 'Grade',
      dataIndex: ['grade', 'name'],
      key: 'grade',
      width: '2%',
      align: 'left',
      filters: tbGradeFilter,
      onFilter: (value, key) => key.grade?.name.indexOf(value) === 0,
    },
    {
      title: 'Unit',
      dataIndex: ['unit', 'name'],
      key: 'unit',
      width: '4%',
      align: 'left',
      filters: tbUnitFilter,
      onFilter: (value, key) => key.unit?.name.indexOf(value) === 0,
    },
    {
      title: 'Lesson',
      dataIndex: ['lesson_module', 'name'],
      key: 'lesson_module',
      width: '3%',
      align: 'left',
      filters: tbLessonFilter,
      onFilter: (value, key) =>
        key.lesson_module?.name.indexOf(value) === 0,
    },
    {
      title: 'Session Started',
      dataIndex: 'created_at',
      key: 'sessionStart',
      width: '4%',
      align: 'left',
      sorter: true,
      sortOrder: paramObj['_sort'] === 'created_at:DESC' ? 'descend' : 'ascend',
      sortDirections:
        paramObj['_sort'] === 'created_at:DESC'
          ? ['ascend', 'descend', 'ascend']
          : ['descend', 'ascend', 'descend'],
      onHeaderCell: () => {
        return {
          onClick: () => {
            const _start = paramObj['_start'];
            const pageSize = paramObj['pageSize'];
            const _sort =
              paramObj['_sort'] === 'created_at:DESC'
                ? 'created_at:ASC'
                : 'created_at:DESC';
            setSearchParam({ _start, _sort, pageSize });
          },
        };
      },
      render: (_, key) => <div>{formatMyDate(key.created_at)}</div>,
    },
    {
      title: 'Partners',
      key: 'hasPartners',
      width: '2%',
      align: 'left',
      render: (_, key) => (
        <div>
          {key.students
            .slice(1)
            .map((student) => student.name)
            .join(', ')}
        </div>
      ),
    },
    {
      title: 'View Report',
      dataIndex: 'enrolled',
      key: 'enrolled',
      width: '2%',
      align: 'right',
      render: (_, session) => (
        <Link to={`/activityLevel/${session.id}`}>View Report</Link>
      ),
    },
  ];

  return (
    <>
      <div className='menu-bar'>
        <div id='activity-level-report-header'>Activity Level - Student Report</div>

        <button
          className='activity-level-return'
          onClick={() => navigate('/report')}
        >
          Return to Dashboard
        </button>
      </div>
      <button id='show-filter-btn' onClick={() => setShowFilter(!showFilter)}>
        {showFilter ? (
          <p> Click to Hide Filter</p>
        ) : (
          <p> Click to Show Filter</p>
        )}
      </button>
      {showFilter ? (
        <div className='filter-show'>
          <div className='filter-items'>
            <Filter setSearchParam={setSearchParam} paramObj={paramObj} />
          </div>
        </div>
      ) : (
        <div className='filter-hide'>
          <Filter setSearchParam={setSearchParam} paramObj={paramObj} />
        </div>
      )}
      <main id='activity-report-content-wrapper'>
        <Table
          columns={columns}
          dataSource={sessions}
          rowKey='id'
          onChange={(Pagination, filters) => {
            if (
              tbPrevFilter == null ||
              JSON.stringify(filters) === JSON.stringify(tbPrevFilter)
            ) {
              setSearchParam({
                _start: (Pagination.current - 1) * Pagination.pageSize,
                _sort: paramObj['_sort'],
                pageSize: Pagination.pageSize,
              });
              if (tbPrevFilter == null) {
                setTbPrevFilter(filters);
              }
            } else {
              setTbPrevFilter(filters);
            }
          }}
          pagination={{
            current: paramObj['_start'] / paramObj['pageSize'] + 1,
            showQuickJumper: true,
            showSizeChanger: true,
            pageSize: paramObj['pageSize'] || 10,
            total: sessionCount,
          }}
        />
      </main>
      </>
  );
};

export default ActivityLevelReport;
