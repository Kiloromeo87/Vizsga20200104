import React from "react";
import {useState} from "react";
  

function Input(props) {

const [newItem, setNewItem] = useState("");
const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

    return (
    <form>
 <input 
        onSubmit = {handleSubmit}
        class="form-label"
        type="text"
        value={newItem}
        onChange={e => setNewItem(e.target.value)}></input>
  <button 
  onClick={handleSubmit}>
            Hozzáadás
  </button>
    </form>
  );
}

export default Input;
