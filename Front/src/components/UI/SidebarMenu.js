import React from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Header } from "semantic-ui-react";

const SidebarMenu = () => {
  return (
    <>
      <div className="sidenav">
        <Header as="h1" textAlign="center">
          Stars Library
        </Header>
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
        <Menu.Item as={Link} to="/management">
          <Icon name="briefcase" />
          Management
        </Menu.Item>
      </div>
    </>
  );
};

export default SidebarMenu;
