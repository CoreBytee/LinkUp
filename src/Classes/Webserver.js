import jwt from "@elysiajs/jwt"
import { Elysia } from "elysia"

class Webserver {
    constructor(Port) {
        this.Port = Port
        this.App = new Elysia()

        this.App.use(
            jwt(
                {
                    secret: "verysecretkey"
                }
            )
        )
                
        this.App.post(
            "/api/login",
            () => {

            }
        )
    }

    Listen() {
        this.App.listen(this.Port, () => {
            console.log(`Server is running on port ${this.Port}`)
        })
    }
}

export default Webserver