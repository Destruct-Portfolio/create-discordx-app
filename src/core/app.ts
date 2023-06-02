import "reflect-metadata";

import { Client, ClientOptions } from "discordx";
import { dirname, importx } from "@discordx/importer";

import { IntentsBitField } from "discord.js";
import type { Interaction, Message } from 'discord.js';


export default class DiscordApplication {

  private _id: string
  private _client: Client;

  static default_options = {
    intents: [
        IntentsBitField.Flags.Guilds
        
    ],
    silent: false,
  }

  constructor(__id: string, _options: ClientOptions=DiscordApplication.default_options){
    this._id = __id

    this._client = new Client(_options);
  }

  /**
   * run
   */
  public async run() {

      this._client.on("ready", async () => {
      console.log(">> Bot started");

      // to create/update/delete discord application commands
      await this._client.initApplicationCommands();

      });

      this._client.on("interactionCreate", (interaction: Interaction) => {
        this._client.executeInteraction(interaction);
      });

      this._client.on("messageCreate", (message: Message) => {
        this._client.executeCommand(message);
      })

      // cog mechanism
      await importx(dirname(import.meta.url) + "/../{events,commands,buttons}/**/*.{ts,js}");

      console.log(dirname(import.meta.url))

      this._client.login(this._id);
    
  }

}