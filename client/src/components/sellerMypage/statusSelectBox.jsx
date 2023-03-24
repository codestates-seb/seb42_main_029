import React from "react";

//배송 및 결제상태 드롭박스를 위한 컴포넌트

const SelectBox = (props) => {
  const statusOptionHandleChange = (e) => {
    props.setStatus(e.target.value);
    console.log(e.target.value);
  };

  return (
    <select onChange={statusOptionHandleChange}>
      {props.options.map((option) => (
        <option value={option.value} defaultValue={props.defaultValue === option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
