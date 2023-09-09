import React, { useContext } from "react";
import { myContext } from "../../../App";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const UserList = () => {
  const { userData, setUserData } = useContext(myContext);
  console.log(userData);
  return (
    <div>
    <p>Test</p>
      {userData?.map((user) => {
       return (<><Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
              {user.email}
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card></>)
      })}
    </div>
  );
};

export default UserList;
