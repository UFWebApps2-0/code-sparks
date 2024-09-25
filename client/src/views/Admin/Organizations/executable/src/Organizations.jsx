import './Organizations.css';
import React, { useEffect, useState } from 'react';
import { getSchools } from '../../../../../Utils/requests';
import NavBar from "../../../../../components/NavBar/NavBar"
import OrganizationCard from './OrganizationCard';
import Sidebar from "../../../Components/Sidebar"
import {Tabs} from 'antd';

const { TabPane } = Tabs;

function Organizations() {
  const [organizations, setOrganizations] = useState([]); // stores school data from strapi into 'organizations' using useState

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getSchools(); // asynchronous function I created to pull the strapi data for schools 
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

  // In the return statement, first it displays the header and then uses a map to iterate through each organization and call the 
  // card file to display its contents
  return(
    <div className="container nav-padding">
        <NavBar/>
        <h1 className='text-left'> List of Organizations</h1>
      {organizations.map((organization) => (
        <div key={organization.id} className="mb-3">
          <OrganizationCard organization={organization} />
        </div>
      ))}
    </div>
  );
}

export default Organizations;