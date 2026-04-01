import React, {useState} from "react";

export default function CommandBuilder(){
  const [name,setName]=useState("");
  const [response,setResponse]=useState("");

  const save=()=>{
    fetch("/commands",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,response})});
  };

  return (
    <div>
      <h2>Command Builder</h2>
      <input placeholder="command" onChange={e=>setName(e.target.value)} />
      <input placeholder="response" onChange={e=>setResponse(e.target.value)} />
      <button onClick={save}>Save</button>
    </div>
  );
}
