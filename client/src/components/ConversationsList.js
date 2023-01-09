import {useState, useEffect} from 'react';
import { ActionCable } from 'react-actioncable-provider';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
// //import NewConversationForm from './NewConversationForm';
// //import MessagesArea from './MessagesArea';
// //import Cable from './Cable';

function ConversationsList() {

    //conversations is coming in as a nested array and object, so i cant access the messages via dot . seperate map needed?

    const [conversations, setConversations] = useState([])

    useEffect(() => {
        fetch('/conversations')
            .then(res => res.json())
            .then(conversations => setConversations( conversations), []);
    }, [])

//     const mapConversations = (conversations) => {
//     return conversations.map(conversation => {
//         return (
//             <li key={conversation.id} >
//                 {conversation.title}
//             </li>
//         );
//     });
// };
        // const convoList = () => {
        //     conversations.map(conversation) => (
        //         <li>
        //        {conversation.title}
        //         </li>
        //     )

        // }

        
console.log(conversations)

    return(
        <div>
            <h1>conversations </h1>
            <Stack direction="column" spacing={2}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" 
                    sx={{ width: 56, height: 56 }}
                    />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" 
                sx={{ width: 56, height: 56 }}
                />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" 
                    sx={{ width: 56, height: 56 }}
                />
            </Stack>
            
            {conversations.length > 0 ? conversations.map((conversation) => (
                <li key = {conversation.id}
                >
                    convo title: {conversation.title}
                 {/* {`${conversation.messages.content}`}  */}
                </li>
                //<li> {conversation.messages.content}</li>
            )) : null }
            
        </div>
    )
}

export default ConversationsList; 

// class ConversationsList extends React.Component {
//     state = {
//         conversations: [],
//         activeConversation: null
//     };



//     handleClick = id => {
//         this.setState({ activeConversation: id });
//     };

//     handleReceivedConversation = response => {
//         const { conversation } = response;
//         this.setState({
//             conversations: [...this.state.conversations, conversation]
//         });
//     };

//     handleReceivedMessage = response => {
//         const { message } = response;
//         const conversations = [...this.state.conversations];
//         const conversation = conversations.find(
//             conversation => conversation.id === message.conversation_id
//         );
//         conversation.messages = [...conversation.messages, message];
//         this.setState({ conversations });
//     };

//     render = () => {
//         const { conversations, activeConversation } = this.state;
//         return (
//             <div className="conversationsList">
//                 <ActionCable
//                     channel={{ channel: 'ConversationsChannel' }}
//                     onReceived={this.handleReceivedConversation}
//                 />
//                 {this.state.conversations.length ? (
//                     <Cable
//                         conversations={conversations}
//                         handleReceivedMessage={this.handleReceivedMessage}
//                     />
//                 ) : null}
//                 <h2>Conversations</h2>
//                 <ul>{mapConversations(conversations, this.handleClick)}</ul>
//                 <NewConversationForm />
//                 {activeConversation ? (
//                     <MessagesArea
//                         conversation={findActiveConversation(
//                             conversations,
//                             activeConversation
//                         )}
//                     />
//                 ) : null}
//             </div>
//         );
//     };
// }

// export default ConversationsList;

// // helpers

// const findActiveConversation = (conversations, activeConversation) => {
//     return conversations.find(
//         conversation => conversation.id === activeConversation
//     );
// };

// const mapConversations = (conversations, handleClick) => {
//     return conversations.map(conversation => {
//         return (
//             <li key={conversation.id} onClick={() => handleClick(conversation.id)}>
//                 {conversation.title}
//             </li>
//         );
//     });
// };