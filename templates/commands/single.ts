import { ApplicationCommandOptionType, CommandInteraction } from "discord.js"
import { Discord, Slash, SlashGroup, SlashOption } from "discordx"

@Discord()
class Single {
    @Slash({ description: "Says hello." })
    async hello(
        @SlashOption({
            description: "Your name.",
            name: "name",
            required: true,
            type: ApplicationCommandOptionType.String,
        })
        name: string,
        interaction: CommandInteraction
    ) {

        await interaction.deferReply({ephemeral: true})

        let message: string = `Hello, ${name}!`

        await interaction.editReply({
            content: message
        })
        
    }

}