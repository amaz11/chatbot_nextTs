'use client'

import { useChat, Message } from "ai/react"


export const Chatbot = () => {
 const {input, handleSubmit, handleInputChange,messages ,isLoading, error} =  useChat({
  api: '/api/chat'
 })
 if(error){
  console.log(error)
 }
  return (
    <div className="bg-slate-600 p-4 text-white rounded-sm">
      <h1 className="text-4xl font-bold">CHAT GPT</h1>
     { messages.map((message:Message)=><div key={message.id}>
      <div className="mt-4">
       {
        message.role === 'assistant'?<h4 className="text-xl font-bold my-2">ChatBot</h4>:<h4 className="text-xl font-bold my-2">User</h4>
       }
      </div>
      <div className="mt-4">
        {
          message.content.split('\n').map((CurrentContentText:string, index:number) => CurrentContentText === ''?<p key={message.id + index} className="text-sm">&nbsp;</p>:<p key={message.id + index} className="text-sm">{CurrentContentText}</p>)
        }
        
      </div>
      </div>
      )}
      <form className="mt-12 relative" onSubmit={handleSubmit}>
        <textarea name="" id="" cols={30} rows={10} placeholder="Type your question?" className="w-full mb-2 p-2 rounded-sm text-black" value={input} onChange={handleInputChange}></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded absolute bottom-6 sm:bottom-auto sm:top-2 right-2 ">Submit</button>
      </form>
    </div>
  )
}
