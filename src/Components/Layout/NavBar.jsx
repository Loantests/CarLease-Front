import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import DropdownMenu from "./Dropdown";

function NavBar() {
  const clientMenus = {
    title: "Clients",
    items : [
      { link: "/clients", title: "Liste"},
      { link: "/newclient", title: "Nouveau"},
      { link: "/findclient", title: "Chercher"},
    ],
  };
  const carMenus = {
    title: "Voitures",
    items : [
      { link: "/cars", title: "Liste"},
      { link: "/newcar", title: "Nouveau"},
      { link: "/findcar", title: "Chercher"},
    ],
  };
  const contractMenus = {
    title: "Contrats",
    items : [
      { link: "/contracts", title: "Liste"},
      { link: "/newcontract", title: "Nouveau"},
      { link: "/findcontract", title: "Chercher"},
    ],
  };
  return (
    <div>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <div className={styles.logo}>Car'Mazing</div>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <Link to="/">Home</Link>
              </li>
              <li>
                <DropdownMenu menu={carMenus}/>
              </li>
              <li>
                <DropdownMenu menu={clientMenus}/>
              </li>
              <li>
                <DropdownMenu menu={contractMenus}/>
              </li>
              <li className={styles.li}>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
