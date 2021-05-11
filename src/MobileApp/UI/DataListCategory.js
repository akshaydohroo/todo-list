import React from "react";

export default function DataListCategory(props) {
  return (
    <datalist id={props.id}>
      {props.options.map((item) => {
        return <option value={item} key={item}/>;
      })}
    </datalist>
  );
}
