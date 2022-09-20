import Reviews from "./Rating";
import Rating from "./Rating";
import Analysis from "./Analysis";
import Visitors from "./Visitors";
import Sidebar from "./Sidebar";

function Dashboard() {
    return(
        <div className="wireframe">
            <div className="dashboard">
            <Reviews/>
            <Rating/>
            <Analysis/>
            <Visitors/>
            <Sidebar/>
        </div>

        </div>
        
    )
}

export default Dashboard;