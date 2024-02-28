// import LinkUpClass from "./Classes/LinkUp"

// const LinkUp = new LinkUpClass()

Bun.serve(
    {
        port: 3000,
        fetch: (Request, Server) => {
            console.log("Request received")
            Server.upgrade(
                Request
            )
            return
        },
        websocket: {
            open: (Websocket) => {
                Websocket.subscribe("messages")
            },
            message: (Websocket, Message) => {
                console.log(Message)
                Websocket.publish("messages", Message)
                Websocket.send(Message)
            },
            close: (Websocket) => {
                Websocket.unsubscribe("messages")
            }
        }
    }
)