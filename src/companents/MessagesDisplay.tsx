// import React from 'react'
// import MessageDisplay from './MessageDisplay';
// interface userMessage{
//     role:string,
//     content: string

// }
// interface MessagesDisplayProps{

//     userMessages:userMessage[]


// }
// const MessagesDisplay=(userMessages: MessagesDisplayProps)=> {
//   return (
//     <div>
      

//       <div className="messages-display">
//      {     userMessages.map( (userMessages,_index)=> <MessageDisplay  key={_index}  message={userMessages}/> )} 
       
      


//       </div>
//     </div>
//   )
// }

// export default MessagesDisplay;

import React from 'react';
import MessageDisplay from './MessageDisplay';

interface UserMessage {
  role: string;
  content: string;
}

interface MessagesDisplayProps {
  userMessages: UserMessage[];
}

const MessagesDisplay = (props: MessagesDisplayProps) => {
  const { userMessages } = props;

  return (
    <div>
      <div className="messages-display">
        {userMessages.map((message, index) => (
          <MessageDisplay key={index} message={message} />
        ))}
      </div>
    </div>
  );
};

export default MessagesDisplay;

