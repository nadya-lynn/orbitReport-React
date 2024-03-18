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
     {sat.map(rowData => <tr key={rowData.id}><td>{rowData.name}</td><td>{rowData.type}</td><td>{rowData.launchDate}</td><td>{rowData.operational ? "true" : "Inactive"}</td></tr>)}
     </tbody>
   </table>
  );
};

export default Table;