

export default function OpenModal({ handleClose, modalValues, handleModalChange, handleModalSave }) {
    
    return (
        <div className="modal-container">
            <div className="heading" style={{"display":"flex", "justifyContent": "space-between"}}>
            <h3>Edit {modalValues.type==='label'?'Label':''}</h3>
            <span onClick={handleClose} style={{ "cursor": "pointer"}}>X</span>
            </div>
             <div>
                <label>Text:</label>
                <br />
                <input
                    className="input-modal"
                    type="text"
                    name="text"
                    value={modalValues.text}
                    onChange={(e) => handleModalChange(e)}
                />
            </div>
            <br />
            <div>
                <label>X:</label>
                <br />
                <input
                    className="input-modal"
                    type="number"
                    name="x"
                    value={modalValues.x}
                    onChange={(e) => handleModalChange(e)}
                />
            </div>
            <br />
            <div>
                <label>Y:</label>
                <br />
                <input
                    className="input-modal"
                    type="number"
                    name="y"
                    value={modalValues.y}
                    onChange={(e) => handleModalChange(e)}
                />
            </div>
            <br />
            <div>
                <label>Font Size:</label>
                <br />
                <input
                    className="input-modal"
                    type="number"
                    name="fontSize"
                    value={modalValues.fontSize}
                    onChange={(e) => handleModalChange(e)}
                />
            </div>
            <br />
            <div>
                <label>Font Weight:</label>
                <br />
                <input
                    className="input-modal"
                    type="number"
                    name="fontWeight"
                    value={modalValues.fontWeight}
                    onChange={(e) => handleModalChange(e)}
                />
            </div>
            <br/>
            <button style={{"backgroundColor": "blue", "color": "white"}} onClick={(e) => handleModalSave(e)}>Save Changes</button>
        </div>
    )
}