import DiscordApplication from "./core/app.js"

import dotenv from "dotenv"
dotenv.config()

await new DiscordApplication(process.env.BOT_TOKEN!).run()