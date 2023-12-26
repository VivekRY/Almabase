// components/Sidebar.js
import React from 'react';

const Sidebar = ({ setOpenModal, setModalValues, setSelectedElement, handleExport }) => {
  const handleDragStart = (e, type) => {
    e.dataTransfer.setData('type', type);
    setSelectedElement(null)
  };

  const handleDragEnd=(e, type)=>{
    const x = e.clientX-100;
    const y = e.clientY;
    setModalValues({
      type: type,
      x: x,
      y: y,
      fontSize: '',
      fontWeight: '',
      text: ''
    })
    setOpenModal(true)
  }

  return (
    <>
    <div className="sidebar">
      <h3 style={{"color": "white"}}>Blocks</h3>
      <br/>
      <div
        className="sidebar-item"
        draggable
        onDragStart={(e) => handleDragStart(e)}
        onDragEnd={(e)=> handleDragEnd(e,'label')}
      >
        Label
      </div>
      <div
        className="sidebar-item"
        draggable
        onDragStart={(e) => handleDragStart(e)}
        onDragEnd={(e)=> handleDragEnd(e, 'input')}
      >
        Input
      </div>
      <div
        className="sidebar-item"
        draggable
        onDragStart={(e) => handleDragStart(e)}
        onDragEnd={(e)=> handleDragEnd(e, 'button')}
      >
        Button
      </div>
      <button onClick={handleExport}>Export</button>
    </div>
   
    </>
  );
};

export default Sidebar;
