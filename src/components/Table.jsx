import "./styling.css";

const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
     {sat.map(tableData => <tr key={tableData.id}><td>{tableData.name}</td><td>{tableData.type}</td><td>{tableData.launchDate}</td><td>{tableData.operational ? "true" : "Inactive"}</td></tr>)}
     </tbody>
   </table>
  );
};

export default Table;