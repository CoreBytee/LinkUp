import { Database } from "bun:sqlite"

export default async function SeedDatabase() {
    const SQL = new Database("./LinkUp.sqlite")
}