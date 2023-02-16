import React, {useState} from "react";

function Poem({title, content, author}) {

  

  const [isRead, setIsRead] = useState(false)

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- {author}</strong>
      </p>
      <button onClick={() => setIsRead(!isRead)} >
        Mark as {isRead ? "unread" : "read" }
      </button>
    </div>
  );
}

export default Poem;



///////////////////////when the app starts, i can see all current poems
//i can show/hide the form to create a new poem
/////// i can create poems and they are still there when i refresh the page
////////////i can mark poems as read which will change the text of the button to mark as unread


