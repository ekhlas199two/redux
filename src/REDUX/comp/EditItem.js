import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { edittask } from "../actions/todoactions";



function EditItem({ el }) {
  const [show, setShow] = useState(false);
  const [val, setVal] = useState(el.descr);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button style={{borderRadius:'10px'}}  onClick={handleShow}>
        edit
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" value ={val} onChange={(e) => setVal(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
         
          <button style={{borderRadius:'10px'}}
            
            onClick={() => dispatch(edittask(el.id, val))}
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditItem;
