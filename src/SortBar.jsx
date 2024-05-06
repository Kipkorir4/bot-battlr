import React from 'react';

function SortBar() {
  return (
    <div className="sort-bar">
      <select>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
}

export default SortBar;
