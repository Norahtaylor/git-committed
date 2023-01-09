import {useState} from 'react'
import Chat from './Chat'
import './ChatRoom.css'
//import useChat from '"../useChat"'

//post request when they end chat, to save to the database. 
//populate the chat field with what was already in the database when they go back to the chat
//if chat field is empty when they start, "start chat" if not, the old messages will show up 

function ChatRoom({user, match}) {
  //const { roomId } = props.match.params //getting the roomID from the URL params 
  //const [messages, setMessages] = useChat()

  //selected match from App.js is the match, reciever and requestor. why cant i pull that info down?
  console.log(match + "match")
  console.log(user + "user")

  return (
    <div>
      <h1>
      chatroom
      </h1>
      
    </div>
  )
}

export default ChatRoom