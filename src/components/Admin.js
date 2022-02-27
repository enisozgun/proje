import { useContext } from "react";
import Header from "./Header";
import UserContext from "../store/UserContext";

function Admin() {
  const user = useContext(UserContext)

  return (
    <div>
      <Header />
      {user.user.firstName}
    </div>
  );
}

export default Admin;
