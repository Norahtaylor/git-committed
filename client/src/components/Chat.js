//import '/Chat.css'
import {useState} from 'react'
import './ChatHome.css'
import { useHistory } from 'react-router-dom'
import ChatRoom from './ChatRoom'


//need to build a chat room from the match page and clicking a button that takes them to a new chat. and feeding both user's id's into the room and title it with their names 

const Chat = () => {
    const [roomName, setRoomName]= useState("")
    let history = useHistory()

    const handleRoomChange = (e) => {
        setRoomName=(e.target.value)
    }

    const handleChatClick = () => {
        history.push(`/${roomName}`)
        //use same logic that i used in matchcard, for showing more info of the current user . feed in from whever i have chat button. either matchcard or the userprofile card. 
    }

    return (
        <div className="home-container"
        >
            <ChatRoom />

            {/* <input
                type="text"
                placeholder='room'
                // value={roomName}
                onChange={handleRoomChange}
                className="text-input-field"
            />
            <button
                onClick={handleChatClick}
                className="enter-room-button"
            >
                Chat
            </button> */}
        </div>
    );
}

export default Chat;