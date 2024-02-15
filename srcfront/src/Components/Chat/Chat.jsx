import MessageContainer from "../MessageContainer/MessageContainer";
import MessageInput from "../MessageInput/MessageInput";
import "./Chat.css";

function Chat() {
  return (
    <div className="Chat">
        <MessageContainer />
        <MessageInput />
    </div>
  )
}

export default Chat