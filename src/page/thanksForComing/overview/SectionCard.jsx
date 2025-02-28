import { Link } from "react-router-dom";

const SectionCard = ({ title, children, link }) => (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">{title}</h2>
        <Link to={link} className="text-blue-500 hover:underline">View All</Link>
      </div>
      {children}
    </div>
  );

export default SectionCard