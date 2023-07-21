import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {

 const {dispatch} = useContext(DarkModeContext);
  return (
    <div className="sidebar">
        <div className="top">
            <Link to="/" style={{textDecoration: "none"}}>
            <span className="logo">Hemadmin</span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    < DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <Link to="/users" style={{textDecoration: "none"}}>
                <li>
                    <PeopleOutlinedIcon className="icon"/>
                    <span>Users</span>
                </li>
                </Link>
                <Link to="/products" style={{textDecoration: "none"}}>
                <li>
                    <StoreOutlinedIcon className="icon"/>
                    <span>Products</span>
                </li>
                </Link>
                <li>
                    <CreditCardOutlinedIcon className="icon"/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingOutlinedIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <AssessmentOutlinedIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneOutlinedIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsOutlinedIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppOutlinedIcon className="icon" />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div
              className="colorOption" 
              onClick={() => dispatch({type: "LIGHT"})}>     
            </div>
            <div 
              className="colorOption"
              onClick={() => dispatch({type: "DARK"})}
            ></div>
        </div>
    </div>
  );
}

export default Sidebar;
