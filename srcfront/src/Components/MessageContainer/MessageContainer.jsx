import Message from '../Message/Message'
import './MessageContainer.css'

function MessageContainer() {
    return (
        <div className="MessageContainer">
            <Message Username={"CoreByte"} MessageContent={"Lorem ipsum"} />
        </div>
    )
}

export default MessageContainer