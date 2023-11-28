import './Organizations.css';
import React, { useEffect, useState } from 'react';
import { getSchools } from '../../../../../Utils/requests';
import NavBar from "../../../../../components/NavBar/NavBar"
import Sidebar from "../../../Components/Sidebar"
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function Organizations() {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getSchools();
        console.log(res);
        if (res.data) {
          setOrganizations(res.data);
          console.log(res.data);
        } else {
          message.error(res.err);
        }
      } catch {}
    };
    fetchData();
  }, []);

  return(
    <div>
      <div className="container nav-padding">
      <NavBar /> <Sidebar/>
      <Tabs defaultActiveKey="home">
          <TabPane tab="Organizations List" key="roster">
      <h1 className="classrooms-header">Organizations</h1>
      <div className="App">
        {  organizations.map ( organization => {
            return( 
              <div key={organization.key}>
              <div>Organization Name: {organization.name} </div>
              <div>County, State: {organization.county},  {organization.state} </div>
              <div>Mentors: </div>
              {organization.mentors.map( mentor => {
                return( 
                  <div key={mentor.key}>
                  { mentor.first_name } { mentor.last_name }
                  </div>
                )
              })}
              <div>Number of Classrooms: {organization.classrooms.length} </div>
              {organization.classrooms.map( classroom => {
                return( 
                  <div key={classroom.key}>
                  { classroom.name }
                  </div>
                )
              })}
              <br />
              </div>
            )
          })}
       {
      }
      </div>
          </TabPane>
        </Tabs>
      </div>
      </div>
  );
}

export default Organizations;