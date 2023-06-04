import React from 'react'

interface userMessage{
    role:string,
    content:string

}
interface MessageDisplayProps{
    message: userMessage
}
const MessageDisplay=({message}:MessageDisplayProps)=> {

  return (
    <div className='message-display'>
        <p id="icon">x</p>


      <p>{message.role}</p>
      <p>{message.content}</p>

      {/* <p>message</p> */}

    </div>
  )
}

export default MessageDisplay;
