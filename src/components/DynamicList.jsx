import React from "react";

export default function DynamicList({ list, setList, title, minRows, placeholder }) {
  const handleChange = (index, value) => {
    const newList = [...list];
    newList[index] = value;
    setList(newList);
  };

  const addItem = () => setList([...list, ""]);
  const removeItem = (index) => setList(list.filter((_, i) => i !== index));

  return (
    <div className="input-group">
      <label>{title}</label>
      {list.map((item, index) => (
        <div key={index} style={{ display: "flex", marginBottom: "8px" }}>
          <textarea
            placeholder={placeholder}
            value={item}
            onChange={(e) => handleChange(index, e.target.value)}
            rows={minRows} style={{ flex: 1 }}
          />
          <button type="button" className="remove-btn" onClick={() => removeItem(index)} style={{ marginLeft: "8px" }}>Remove</button>
        </div>
      ))}
      <button type="button" className="add-btn" onClick={addItem}>Add {title}</button>
    </div>
  );
}
