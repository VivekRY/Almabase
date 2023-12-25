// components/Element.js
import React from 'react';

const Element = ({ element, isSelected, setSelectedElement, modalVisible}) => {

  const handleClick = () => {
    if (isSelected) {
      setSelectedElement(null)
    } else {
      setSelectedElement(element);
    }
  };

  return (
    <div
      className={`element ${isSelected && !modalVisible ? 'selected' : ''}`}
      style={{ "left": element.x+'px', "top": element.y+'px' }}
      onClick={handleClick}
    >

      {!modalVisible &&
        <>
          {element.type === 'label' && <label tabIndex={0} id='label1' draggable style={{ "left": element.x+'px', "top": element.y+'px', "fontSize": element.fontSize + 'px', "fontWeight": element.fontWeight+'px' }} >{element.text}</label>}
          {element.type === 'input' && <input draggable style={{ "left": element.x+'px', "top": element.y+'px', "fontSize": element.fontSize + 'px', "fontWeight": element.fontWeight+'px' }} />}
          {element.type === 'button' && <button draggable style={{ "left": element.x+'px', "top": element.y+'px', "fontSize": element.fontSize + 'px', "fontWeight": element.fontWeight+'px' }} >Button</button>}
        </>}
    </div>
  );
};

export default Element;
