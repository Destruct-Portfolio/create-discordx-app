import { ApplicationCommandOptionType, CommandInteraction } from "discord.js"
import { Discord, Slash, SlashGroup, SlashOption } from "discordx"


@Discord()
@SlashGroup({
    description: "A group of different greetings!",
    name: "greet"
})
class Group {
    @Slash({ description: "Says hello." })
    @SlashGroup("greet")
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

    @Slash({ description: "Says hi." })
    @SlashGroup("greet")
    async hi(
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

        let message: string = `Hi, ${name}!`

        await interaction.editReply({
            content: message
        })
    }



}