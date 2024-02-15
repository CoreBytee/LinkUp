import "./Message.css"

function Message(
    {
        Username,
        IconUrl = "https://d31sxl6qgne2yj.cloudfront.net/wordpress/wp-content/uploads/20190102094846/Minecraft-Stone-Block.jpg",
        MessageContent,
        CreatedAt = "Now"
    }
) {
    return (
        <div className="Message">
            <img src={IconUrl} alt="ProfileIcon" />
            <div>
                <div className="userdata">
                    <p className="username">{Username}</p>
                    <p className="createdat">{CreatedAt}</p>
                </div>
                <p className="content">{MessageContent}</p>
            </div>
        </div>
    )
}

export default Message
