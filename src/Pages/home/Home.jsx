import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widgets from "../../components/widgets/Widgets";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Tables from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widgets type="user"/>
          <Widgets type="order"/>
          <Widgets type="earning"/>
          <Widgets type="balance"/>
        </div>
        <div className="charts">
          <Featured/>
          <Chart title="Last 6 Months (Revenue)" aspect={ 2 / 1}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">
            Latest Transactions
          </div>
          <Tables/>
        </div>
        </div>
    </div>
  );
}

export default Home;
