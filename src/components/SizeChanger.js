import React from 'react';

export default function SizeChanger(props) {
  return (
    <select 
    onChange={e => parseInt(props.update(e.target.value), 10)}
    className="dropDownContainer"
    disabled={props.allowEdit === 'false' }
    >
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
    </select>
  )
}