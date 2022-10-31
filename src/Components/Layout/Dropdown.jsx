import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Dropdown.module.css";

function DropdownMenu(props) {
  const [isActive, setIsActive] = useState(false);
  const toggleActiveHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownButton} onClick={toggleActiveHandler}>
        {props.menu.title}
      </div>
      {isActive && (
        <div className={styles.dropdownContainer}>
          {props.menu.items.map((menu) => {
            return (
              <div
                className={styles.dropdownItem}
                onClick={toggleActiveHandler}
              >
                <Link className={styles.link} to={menu.link}>{menu.title}</Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
