import React, {useEffect, useState} from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {

  const [poems, setPoems] = useState([]);
  const [formVisible, setFormVisible] = useState(true);

useEffect(() => {
  fetch ("http://localhost:8004/poems")
  .then(response => response.json())
  .then(poems => setPoems(poems))
}, [])


  function addAPoem(newPoem) {
    setPoems([...poems, newPoem])
  }

    
      return (
        <div className="app">
          <div className="sidebar">
            <button 
              onClick={() => setFormVisible(!formVisible)} >
              Show/hide new poem form
            </button>
            {formVisible ? <NewPoemForm addPoem={addAPoem} /> : null}
    
            
          </div>
              <PoemsContainer poems={poems} />
          </div>

        
      );
    }
 

export default App;
          
      



////////when the app starts, i can see all current poems
//i can show/hide the form to create a new poem
///////// i can create poems and they are still there when i refresh the page
//////////////i can mark poems as read which will change the text of the button to mark as unread

