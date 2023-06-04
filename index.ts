// import express,{Application,Request,Response} from "express"

// import cors from 'cors' //Could not find a declaration file for module 'cors'. 'd:/web development/project 3 sql generator/sql-generator/node_modules/cors/lib/index.js' implicitly has an 'any' type.Try `npm i --save-dev @types/cors` if it exists or add a new declaration (.d.ts) file containing `declare module 'cors';`cors` if it exists or add a new declaration
// import {Configuration,OpenAIApi} from 'openai'


// const PORT:number= 8000;


// const app: Application=express()
// app.use(cors())
// app.use(express.json())





// const API_KEY: string=" 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"

// const  configuration= new Configuration({
//     apiKey:API_KEY



// })



// const openai=new OpenAIApi(configuration)

// app.post('/completions',async(req: Request,res: Response)=>

// {

//     try {
// //         const completion=await openai.createChatCompletion({
// //             model: "gpt-4",
// //             messages:[
                
// //                 {role:"user", 
// //             content: "Create a SQL request to " + req.body.message}
// //         ]
// // })
// const completion = await openai.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [
//         { role: "user", content: "Create a SQL request to " + req.body.message }
//     ]
// });

// res.send(completion.data.choices[0].message)

        
//     } catch (error) {
        
//         console.error(error)
//         res.status(500).send("Server error")
//     }
// })

// // ************ for gpt3-5

// // app.post('/completions', async (req, res) => {
// //     const { message } = req.body;
  
// //     // Construct the prompt using the received message
// //     const prompt = "Create a SQL request to " + message;
  
// //     try {
// //       // Make a request to the OpenAI API using the GPT-3.5 model
// //       const response = await openai.complete({
// //         engine: 'text-davinci-003',
// //         prompt: prompt,
// //         maxTokens: 100,
// //         n: 1,
// //         stop: null,
// //       });
  
// //       // Extract the generated text from the API response
// //       const generatedText = response.choices[0].text.trim();
  
// //       res.json({ generatedText });
// //     } catch (error) {
// //       console.error('Error:', error);
// //       res.status(500).json({ error: 'An error occurred' });
// //     }
// //   });
  
// app.listen(PORT,()=>
// {


//     console.log(`YOUR server is running in PORT ${PORT}`)

// })



// ******************  update with chatgpt




import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';
import * as dotenv from "dotenv"
dotenv.config()
const PORT: number = 8000;

const app: Application = express();
app.use(cors());
app.use(express.json());

const API_KEY= process.env.API_KEY;


const configuration = new Configuration({
  apiKey: API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post('/completions', async (req: Request, res: Response) => {
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: 'Create a SQL request to ' + req.body.message },
      ],
    });

    res.send(completion.data.choices[0].message);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(`YOUR server is running on PORT ${PORT}`);
});
