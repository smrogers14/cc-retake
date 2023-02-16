import React from "react";
import Poem from "./Poem";

function PoemsContainer({poems}) {

  const poemList = poems.map ((poem) => {
    return (
      <Poem key={poem.id} title={poem.title} content={poem.content} author={poem.author}/>
    )
  })

  return (
    <div className="poems-container">
      {poemList}
    </div>
  );
}

export default PoemsContainer;



//when the app starts, i can see all current poems
//i can show/hide the form to create a new poem
// i can create poems and they are still there when i refresh the page
//i can mark poems as read which will change the text of the button to mark as unread


