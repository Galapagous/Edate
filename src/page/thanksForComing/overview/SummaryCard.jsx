import { Link } from 'react-router-dom';

const SummaryCard = ({ title, value, icon, link }) => (
    <Link to={link} className="p-4 bg-white rounded-lg shadow hover:bg-gray-50 transition">
      <div className="flex items-center gap-3">
        <div className="text-blue-500">{icon}</div>
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-xl font-semibold">{value}</p>
        </div>
      </div>
    </Link>
  );

export default SummaryCard