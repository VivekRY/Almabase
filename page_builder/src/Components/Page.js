// components/Page.js
import React, { useRef, useState } from 'react';
import Element from './Element';
import OpenModal from './Modal';

const Page = ({ elements, addElement, selectedElement, setSelectedElement, updateElement, deleteElement, openModal, setOpenModal,  modalValues, setModalValues }) => {
  const pageRef = useRef();
  const [labelText, setLabelText] = useState('This is a Label')

  const handleDrop = (e) => {
    e.preventDefault();
    if (selectedElement) {
      const rect = pageRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const newConfig = {
        type: selectedElement.type,
        x: x,
        y: y,
        fontSize: selectedElement.fontSize,
        fontWeight: selectedElement.fontWeight,
        text: selectedElement.text
      };
      updateElement(selectedElement.id, newConfig);
      setSelectedElement(null);
      setModalValues({ type: selectedElement.type, x, y, fontSize: selectedElement.fontSize, fontWeight: selectedElement.fontWeight });
    }
  }



  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleModalSave = (e) => {
    // Update the element with modal values
    if(selectedElement){
      updateElement(selectedElement.id, modalValues);
      setOpenModal(false);
      setSelectedElement(null)
    }else{
      addElement(modalValues.type, modalValues.x, modalValues.y, modalValues.fontSize, modalValues.fontWeight, modalValues.text)
      setOpenModal(false)
    }
  };

  const handlePress=(e)=>{
    if(e.key==='Delete' && selectedElement && !openModal){
      deleteElement(selectedElement.id);
    }
    else if(e.key==='Enter' && selectedElement){
      setModalValues(selectedElement)
      setOpenModal(true)
    }
  }

  const handleModalChange = (e) => {
    setModalValues({
      ...modalValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose=()=>{
    setOpenModal(false)
  }

  return (
    <div
      className="page"
      ref={pageRef}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onKeyDown={handlePress}      
    >
      {openModal && (
        <OpenModal handleClose={handleClose} modalValues={modalValues} handleModalChange={handleModalChange} handleModalSave={handleModalSave} labelText={labelText} setLabelText={setLabelText} />
      )}
      {elements.map((element) => (
        <Element
          key={element.id}
          element={element}
          isSelected={selectedElement && selectedElement.id === element.id}
          setSelectedElement={setSelectedElement}
          updateElement={updateElement}
          deleteElement={deleteElement}
          modalVisible={openModal}
          labelText={labelText}
        />
      ))}
    </div>
  );
};

export default Page;
