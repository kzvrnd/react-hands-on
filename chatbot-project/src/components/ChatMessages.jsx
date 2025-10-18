import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);
  const chatContainerRef = useRef(null);
  
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    
    if (chatContainerRef) {
      containerElem?.scrollIntoView({ behavior: "smooth" });            
    }
  }, [chatMessages]);


  return (
    <div className="chat-messages-container" ref={chatContainerRef}>
      
      {chatMessages.map((chatMessage) => {
        return (
            <ChatMessage 
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
            />
          );
        })}
        <div ref={chatMessagesRef}></div>
    </div>
  );
}

export default ChatMessages;