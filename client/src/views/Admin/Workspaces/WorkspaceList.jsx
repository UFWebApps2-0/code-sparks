import './lessons.css';
import './Roster/Roster.less'
import NavBar from "../../../components/NavBar/NavBar"
import Sidebar from "../Components/Sidebar"
import Roster from "./Roster/Roster"
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function WorkspaceList() {
  return(
    <div>
      <div className="container nav-padding">
      <NavBar /> <Sidebar/>
      <Tabs defaultActiveKey="home">
          <TabPane tab="Workspace List" key="roster">
            <Roster/>
          </TabPane>
        </Tabs>
      </div>
      </div>
  );
}
export default WorkspaceList;