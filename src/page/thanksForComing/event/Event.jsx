import { Link, useSearchParams } from "react-router-dom";
import UserEvent from "./UserEvent";
import OtherEvent from "./OtherEvent";

const Events = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "userEvent"; 
  // const [showModal, setShowModal] = useState(false)

  const handleTabChange = (tab) => {
    setSearchParams({ tab });
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Manage Users</h2>
      <div className="w-full flex items-center justify-end">
      <Link to={`/dashboard/${'1234'}/event/create`} className="mb-2  bg-main_200 hover:bg-main_600 text-white px-4 py-2">
        Create Event
      </Link>
      </div>

      <div className="flex gap-1 border-b">
        <button
          className={`p-2 shadow-sm ${activeTab === "userEvent" ? "text-white bg-main_600" : ""}`}
          onClick={() => handleTabChange("userEvent")}
        >
          My Event
        </button>
        <button
          className={`p-2 shadow-sm ${activeTab === "otherEvent" ? "text-white bg-main_600" : ""}`}
          onClick={() => handleTabChange("otherEvent")}
        >
          Other Event
        </button>
      </div>

      <div>
        {
          activeTab === "userEvent"
          && <UserEvent/>
        }
        {
          activeTab === "otherEvent"
          && <OtherEvent/>
        }
      </div>
      {/* <Modal height={'500px'} size="xl" showModal={showModal} setShowModal={()=>{setShowModal(false)}}>
        <EventCreate/>
      </Modal> */}
    </div>
  );
};


export default Events