import React from "react";
import { Icon, Menu } from "semantic-ui-react";

const SidebarMenu = () => {
  return (
    <>
      <div className="sidenav">
        <Menu.Item as="a">
          <Icon name="user" />
          User area
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="arrow up" />
          Borrow
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="arrow down" />
          Return
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="book" />
          My Books
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="briefcase" />
          Management
        </Menu.Item>
      </div>
    </>
  );
};

export default SidebarMenu;
