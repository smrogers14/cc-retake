import React, {useState} from "react";

function NewPoemForm({addAPoem}) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    
    fetch("http://localhost:8004/poems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        author,
      })
  })
  .then(res => res.json())
  .then((newPoem) => addAPoem(newPoem))

  setTitle("")
  setContent("")
  setAuthor("")
}

  return (
    <form onSubmit={handleSubmit}className="new-poem-form">
      <input value={title} onChange={(e)=> setTitle(e.target.value)}placeholder="Title" />
      <input value={author} onChange={(e)=> setContent(e.target.value)}placeholder="Author" />
      <textarea value={content} onChange={(e)=> setAuthor(e.target.value)} placeholder="Write your masterpiece here..." rows={10} />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;




//when the app starts, i can see all current poems
//i can show/hide the form to create a new poem
// i can create poems and they are still there when i refresh the page
//i can mark poems as read which will change the text of the button to mark as unread