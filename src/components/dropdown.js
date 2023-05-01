import React, { useState } from 'react';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Link 1', 'Link 2', 'Link 3'];

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>Dropdown</button>
      {isOpen && (
        <div className="dropdown-content">
          {menuItems.map((item, index) => (
            <a key={index} href="#">{item}</a>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
