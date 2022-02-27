import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import UserContext from "../store/UserContext";

function Users() {
  const currentUser = useContext(UserContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET"
    }
    const fetchUsers = async () => {
        const response = await fetch("https://smapi.eu-west-3.elasticbeanstalk.com/admin/users",
        requestOptions);
        
        const listUsers = await response.json();
        console.log(listUsers);
        setUsers(listUsers);
    }

    (async () => await fetchUsers())();
  }, [])
  return (
    <div>
      <Header />
      Users
    </div>
  );
}
export default Users;
