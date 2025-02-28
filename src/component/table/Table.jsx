const Table = ({ headers, data }) => {
  const renderCell = (header, row, index) => {
    switch (header.toLowerCase()) {
      case 's/n':
        return index + 1;
      case 'more':
        return (
          <button onClick={()=>{alert(index + 1)}} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
            View
          </button>
        );
      case 'avatar':
        return (
          <img 
            src={row[header] || '/default-avatar.png'} 
            alt="avatar" 
            className="w-8 h-8 rounded-full"
          />
        );
      default:
        return row[header];
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            {headers?.map((header, index) => (
              <th
                key={index}
                className="px-4 py-2 border-b border-gray-200 text-left text-gray-600"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data?.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                {headers.map((header, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4 py-[1rem] border-b border-gray-200 text-gray-700"
                  >
                    {renderCell(header, row, rowIndex)}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length} className="text-center py-4 text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;