// App.js
import React, { useState, useEffect } from 'react';
import Page from './Components/Page';
import Sidebar from './Components/Sidebar';
import './App.css';

function App() {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [modalValues, setModalValues] = useState({
    type: '',
    x: 0,
    y: 0,
    fontSize: 0,
    fontWeight: 0,
    text: ''
  });

  // Load elements from local storage on mount
  useEffect(() => {
    const storedElements = JSON.parse(localStorage.getItem('elements')) || [];
    setElements(storedElements);
  }, []);

  // Save elements to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('elements', JSON.stringify(elements));
  }, [elements]);

  // Add a new element to the page
  const addElement = (type, x, y, fontSize, fontWeight, text) => {
    const newElement = { id: Date.now(), type, x, y, fontSize, fontWeight, text };
    setElements((prevElements) => [...prevElements, newElement]);
  };

  //Export the saved configuration
  const exportPage = () => {
    const pageConfig = JSON.stringify(elements, null, 2);
    const blob = new Blob([pageConfig], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'page-config.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Update an element's configuration
  const updateElement = (id, config) => {
    setElements((prevElements) =>
      prevElements.map((element) => 
        element.id === id ? { id: element.id, type: element.type, x: config.x, y: config.y, fontSize: config.fontSize, fontWeight: config.fontWeight, text: config.text } : element
      )
    );
  };

  // Delete an element from the page
  const deleteElement = (id) => {
    setElements((prevElements) => prevElements.filter((element) => element.id !== id));
  };
  
  return (
    <div className="app">
      <Page
        elements={elements}
        addElement={addElement}
        selectedElement={selectedElement}
        setSelectedElement={setSelectedElement}
        updateElement={updateElement}
        deleteElement={deleteElement}
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalValues={modalValues} 
        setModalValues={setModalValues}
      />
      <Sidebar setSelectedElement={setSelectedElement} addElement={addElement} setOpenModal={setOpenModal} modalValues={modalValues} setModalValues={setModalValues} handleExport={exportPage}/>
    </div>
  );
}

export default App;
