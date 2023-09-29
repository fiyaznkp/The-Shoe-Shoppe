import  { useContext } from "react";
import { myContext } from "../../../App";
import Table from 'react-bootstrap/Table'

const UserList = () => {
  const { userData } = useContext(myContext);
  
  return (
    <div className="users">
    <h4 style={{marginLeft:"20px", marginTop:"10px"}}>List of Registered Users</h4>

    <Table style={{marginLeft:"10px", marginRight:"10px", width:"400px"}}>
    <thead>
        <tr>
          {/* <th>#</th> */}
          <th>Name</th>
          <th>Email</th>
         </tr>
      </thead>
      <tbody>
      {userData?.map((user) => {
       return (<>
        <tr>
        
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
       </>
       )   
      })}
      </tbody>
    
      </Table>
    </div>
  );
};

export default UserList;
