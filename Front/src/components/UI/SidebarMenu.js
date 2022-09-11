import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon, Menu, Header, Button, Container } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/userSlice";
import Search from "../Search";

const SidebarMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.users.currentUser);

  const handleLogout = () => {
    dispatch(setCurrentUser(null));
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="sidenav">
        <Header as="h1" icon textAlign="center" onClick={() => navigate("/")}>
          <Icon name="star half full" circular />
          <Header.Content>Half-Star Library</Header.Content>
        </Header>
        <Container textAlign="center" style={{ marginTop: "20px" }}>
          <Search />
        </Container>
        <Menu.Item as={Link} to="/userarea">
          <Icon name="user" />
          User area
        </Menu.Item>
        <Menu.Item as={Link} to="/borrow">
          <Icon name="arrow up" />
          Borrow
        </Menu.Item>
        <Menu.Item as={Link} to="/return">
          <Icon name="arrow down" />
          Return
        </Menu.Item>
        <Menu.Item as={Link} to="/pastbooks">
          <Icon name="book" />
          My Books
        </Menu.Item>
        {currentUser?.isManager && (
          <Menu.Item as={Link} to="/management">
            <Icon name="briefcase" />
            Management
          </Menu.Item>
        )}
        <Container textAlign="center" style={{ marginTop: "20px" }}>
          <Button color="red" onClick={handleLogout}>
            Logout
          </Button>
        </Container>
      </div>
    </>
  );
};

export default SidebarMenu;
