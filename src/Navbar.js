import { Link } from "react-router-dom";
import React, { Component } from "react";
const menuItems = [
  {
    title: "Main",
    url: "/main",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Skills",
    url: "/skills",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Testimonials",
    url: "/testimonials",
  },
];
export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="flex items-center justify-between flex-wrap bg-blue-400 mx-auto">
          {menuItems.map((item, index) => {
            return (
              <li key={index} className="hover:bg-sky-300 active:bg-red-400">
                <Link to={item.url}>{item.title}</Link>
              </li>
            );})}
        </ul>
      </nav>
    );
  }}
