import DatingHomepage from "./dating";
// import im5 from "../../assets/date/dating.jpeg"
const Date = () => {
  return (
    <div className="w-full h-screen bg-white text-white flex flex-col items-center relative">
      {/* <Navigation/> */}

      {/* -- main items --- */}
      <div className="w-full">
        <DatingHomepage/>
      </div>
    </div>
  );
};

export default Date;
