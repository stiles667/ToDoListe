import React from "react";

export default function localStorage1() {
  // localStorage.clear();

  const ls = localStorage;
  ls.setItem("key1", "value1");
  ls.setItem("key2", "value2");
  ls.setItem("key3", "value3");
  // ls.removeItem("key2");
  return (
    <div>
      <span>LocalStorage :</span>
      <ul>
        {Object.keys(ls).map((key) => (
          <li>
            {key}:{ls.getItem(key)}
          </li>
        ))}
      </ul>
      <p>Valeur : {ls.getItem("")}</p>
    </div>
  );
}

