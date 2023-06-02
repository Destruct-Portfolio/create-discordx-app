import { Client, Discord, On } from "discordx";



@Discord()
class Startup {
  @On({ event: "ready" })
  async onReady(
    [client]: [Client]
  ) {
    // do something on startup
  }
}