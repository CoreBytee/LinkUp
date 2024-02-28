import { Database } from "bun:sqlite"

class User {
    static SQL = new Database("./LinkUp.sqlite")
}

export default User