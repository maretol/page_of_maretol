import React, { ReactElement } from "react";
import { Divider, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";

function SideMenu(props: { width: number }): ReactElement {
  const { width } = props;
  const menu1 = [
    { key: "top", link: "/", value: "Top" },
    { key: "about", link: "/about", value: "About" },
  ];

  const menu2 = [
    { key: "novel", link: "/novel", value: "Novel" },
    { key: "illust", link: "/illust", value: "Illust" },
    { key: "comic", link: "/comic", value: "Comic" },
    { key: "tech", link: "/tech", value: "Tech" },
  ];

  const menu3 = [
    { key: "dialy", link: "/dialy", value: "Dialy" },
    { key: "contact", link: "/contact", value: "Contact" },
  ];

  const menu4 = [{ key: "admin", link: "/admin", value: "Admin" }];

  function makeListItem(item: {
    key: string;
    link: string;
    value: string;
  }): ReactElement {
    return (
      <NavLink to={item.link} key={`${item.key}_nav`}>
        <ListItem button key={item.key}>
          <ListItemText primary={item.value} />
        </ListItem>
      </NavLink>
    );
  }

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width,
          boxSizing: "border-box",
        },
      }}
      key="key"
    >
      <List key="menu1">{menu1.map((item) => makeListItem(item))}</List>
      <Divider />
      <List key="menu2">{menu2.map((item) => makeListItem(item))}</List>
      <Divider />
      <List key="menu3">{menu3.map((item) => makeListItem(item))}</List>
      <Divider />
      <List key="menu4">{menu4.map((item) => makeListItem(item))}</List>
    </Drawer>
  );
}

export default SideMenu;
