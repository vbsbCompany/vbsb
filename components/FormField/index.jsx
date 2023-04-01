import React from "react";

function FormField({ name, type, value, setValue, placeholder, id, label }) {
  return (
    <div className="form-field w-full flex-col items-start gap-2 flex">
      <label htmlFor={id}>{label}</label>
      {(type === "text" || type === "email") && (
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full  bg-gray-200 px-3 py-2"
        />
      )}

      {type === "select" && (
        <select className="w-full px-3 py-2 bg-gray-200">
          <option value="1">Topic 1</option>
          <option value="2">Topic 2</option>
          <option value="3">Topic 3</option>
          <option value="4">Topic 4</option>
        </select>
      )}

      {type === "multi" && (
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full  bg-gray-200 px-3 py-2 h-[75px]"
        />
      )}
    </div>
  );
}

export default FormField;
