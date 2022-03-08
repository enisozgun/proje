import { useState, useContext, useEffect } from "react";
import UserContext from "../store/UserContext";
import { useNavigate } from "react-router";
import Header from "../components/Header";

function AddUser() {
  const navigate = useNavigate();

  const currentUser = useContext(UserContext);

  const [username, setUsername] = useState();

  const [password, setPassword] = useState();

  const [name, setName] = useState();

  const [phoneNumber, setPhoneNumber] = useState();

  const [email, setEmail] = useState();

  const [roleId, setRoleId] = useState();

  const [surname, setSurname] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const user = {
    username: username,
    password: password,
    name: name,
    surname: surname,
    phoneNumber: phoneNumber,
    email: email,
    roleId: roleId,
  };

  function submitHandler(event) {
    event.preventDefault();
    setIsLoading(true);
  }

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${currentUser.user.token}`,
    },
    body: JSON.stringify({
      username: user.username,
      password: user.password,
      name: user.name,
      surname: user.surname,
      phoneNumber: user.phoneNumber,
      email: user.email,
      roleId: parseInt(user.roleId),
    }),
  };

  function isValid(roleId) {
    if (isNaN(roleId) === false) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    if (isLoading && isValid(user.roleId)) {
      fetch(
        "https://smapi.eu-west-3.elasticbeanstalk.com/admin/user",
        requestOptions
      )
        .then((resp) => resp.json())
        .then((data) => {
          navigate("/users");
        });
    } else if (isValid(user.roleId) === false && isLoading === true) {
      alert("Invalid Role ID");
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [isLoading]);

  return (
    <div>
      <Header />
      <form onSubmit={submitHandler} className="col-sm-6 offset-sm-3">
        <br />
        <div>
          <input
            placeholder="username"
            id="username"
            required
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
          />
        </div>
        <br />
        <div>
          <input
            placeholder="password"
            id="password"
            required
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <br />
        <div>
          <input
            placeholder="name"
            id="surname"
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <br />
        <div>
          <input
            placeholder="surname"
            id="surname"
            required
            type="text"
            onChange={(e) => setSurname(e.target.value)}
            className="form-control"
          />
        </div>
        <br />
        <div>
          <input
            placeholder="phone number"
            id="phoneNumber"
            required
            type="text"
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="form-control"
          />
        </div>
        <br />
        <div>
          <input
            placeholder="email"
            id="Email"
            required
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <br />
        <div>
          <input
            placeholder="role ID"
            id="RoleID"
            required
            type="text"
            onChange={(e) => setRoleId(e.target.value)}
            className="form-control"
          />
        </div>
        <br />
        <div>
          <button className="btn btn-dark">Add user</button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
