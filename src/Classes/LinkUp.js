import Webserver from "./Webserver"

class LinkUp {
    constructor() {
        this.Webserver = new Webserver(3000)
        this.Webserver.Listen()
    }
}

export { LinkUp as LinkUpClass }
export default LinkUp