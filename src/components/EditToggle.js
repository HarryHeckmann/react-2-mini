import React from 'react';

export default function EditToggle(props) {
  return (
    <select 
      onChange={e => props.update(e.target.value)} 
      className="dropDownContainer ml0"
      disabled={props.allowEdit === 'false' }
      >
      <option value="true"> Allow Edit </option>
      <option value="false"> Disable Edit </option>
    </select>
  )
}