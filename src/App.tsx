import React, { useMemo } from 'react'
import { useState } from 'react';

import MessagesDisplay from './companents/MessagesDisplay';
import CodeDisplay from './companents/CodeDisplay';

interface ChatData {
  role: string,
  content: string,

}
const App = () => {

  const [chat, setChat] = useState<ChatData[]>([])
  const [value, setValue] = useState<string>("")






  // const getQuery = async () => {
  //   try {

  //     const options = {
  //       method: "POST",
  //       headers: {


  //         "Content-Type": "application/json"


  //       },

  //       body: JSON.stringify({
  //         message: value


  //       })
  //     }

  //     const response = await fetch("http://localhost:8000/completions", options)
  //     const data = await response.json();

  //     console.log(data)
  //     const userMessage = {
  //       role: 'user',
  //       content: value

  //     }
  //     setChat(oldChat => [...oldChat, data, userMessage])



  //   } catch (error) {
  //     console.error(error)

  //   }
  // }


  const getQuery = async () => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: value,
        }),
      };
  
      const response = await fetch("http://localhost:8000/completions", options);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const userMessage = {
          role: 'user',
          content: value,
        };
        setChat((oldChat) => [...oldChat, data, userMessage]);
      } else {
        throw new Error("Request failed with status: " + response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };
  


  console.log(chat);


const clearChat=()=>
{
  setValue("")
  setChat([])
  
}

  const filteredUserMessgae=chat.filter(message=>message.role==='user')

  const latestCode=chat.filter(message=>message.role==='assistant').pop()



  return (
    <div className='app'>
      <MessagesDisplay userMessages={filteredUserMessgae} />
      <input value={value} onChange={e => setValue(e.target.value)} />

      <CodeDisplay  text={latestCode?.content || ""} />
      <div className="button-container">
        <button id='get-query' onClick={getQuery}>Get Query!</button>
        <button id='clear-chat'  onClick={clearChat}>Clear chat!</button>
      </div>
    </div>
  );
}

export default App;



























//  ******************* update with chatgpt
// import React, { useState } from 'react';

// interface ChatData {
//   role: string;
//   content: string;
// }

// const App = () => {
//   const [chat, setChat] = useState<ChatData[]>([]);
//   const [value, setValue] = useState<string>('');

//   const getQuery = async () => {
//     try {
//       const options = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           message: value,
//         }),
//       };

//       const response = await fetch('http://localhost:8000/completions', options);
//       if (response.ok) {
//         const data = await response.json();
//         console.log(data);
//         const userMessage: ChatData = {
//           role: 'user',
//           content: value,
//         };
//         setChat((oldChat) => [...oldChat, data, userMessage]);
//       } else {
//         throw new Error('Request failed with status: ' + response.status);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const clearChat = () => {
//     setChat([]);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value);
//   };

//   return (
//     <div className="app">
//       <div className="messages-display">
//         {chat.map((item: ChatData, index: number) => (
//           <div key={index} className={item.role}>
//             {item.content}
//           </div>
//         ))}
//       </div>
//       <div className="code-display">{/* Your code display component */}</div>
//       <div className="input-container">
//         <input value={value} onChange={handleChange} />
//         <button onClick={getQuery}>Get Query!</button>
//         <button onClick={clearChat}>Clear Chat</button>
//       </div>
//     </div>
//   );
// };

// export default App;
