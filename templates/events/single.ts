// TODO select and group certain interesting events

/* 
export interface ClientEvents {
  applicationCommandPermissionsUpdate: [data: ApplicationCommandPermissionsUpdateData];
  autoModerationActionExecution: [autoModerationActionExecution: AutoModerationActionExecution];
  autoModerationRuleCreate: [autoModerationRule: AutoModerationRule];
  autoModerationRuleDelete: [autoModerationRule: AutoModerationRule];
  autoModerationRuleUpdate: [
    oldAutoModerationRule: AutoModerationRule | null,
    newAutoModerationRule: AutoModerationRule,
  ];
  cacheSweep: [message: string];
  channelCreate: [channel: NonThreadGuildBasedChannel];
  channelDelete: [channel: DMChannel | NonThreadGuildBasedChannel];
  channelPinsUpdate: [channel: TextBasedChannel, date: Date];
  channelUpdate: [
    oldChannel: DMChannel | NonThreadGuildBasedChannel,
    newChannel: DMChannel | NonThreadGuildBasedChannel,
  ];
  debug: [message: string];
  warn: [message: string];
  emojiCreate: [emoji: GuildEmoji];
  emojiDelete: [emoji: GuildEmoji];
  emojiUpdate: [oldEmoji: GuildEmoji, newEmoji: GuildEmoji];
  error: [error: Error];
  guildAuditLogEntryCreate: [auditLogEntry: GuildAuditLogsEntry, guild: Guild];
  guildBanAdd: [ban: GuildBan];
  guildBanRemove: [ban: GuildBan];
  guildCreate: [guild: Guild];
  guildDelete: [guild: Guild];
  guildUnavailable: [guild: Guild];
  guildIntegrationsUpdate: [guild: Guild];
  guildMemberAdd: [member: GuildMember];
  guildMemberAvailable: [member: GuildMember | PartialGuildMember];
  guildMemberRemove: [member: GuildMember | PartialGuildMember];
  guildMembersChunk: [
    members: Collection<Snowflake, GuildMember>,
    guild: Guild,
    data: { index: number; count: number; notFound: unknown[]; nonce: string | undefined },
  ];
  guildMemberUpdate: [oldMember: GuildMember | PartialGuildMember, newMember: GuildMember];
  guildUpdate: [oldGuild: Guild, newGuild: Guild];
  inviteCreate: [invite: Invite];
  inviteDelete: [invite: Invite];
  messageCreate: [message: Message];
  messageDelete: [message: Message | PartialMessage];
  messageReactionRemoveAll: [
    message: Message | PartialMessage,
    reactions: Collection<string | Snowflake, MessageReaction>,
  ];
  messageReactionRemoveEmoji: [reaction: MessageReaction | PartialMessageReaction];
  messageDeleteBulk: [messages: Collection<Snowflake, Message | PartialMessage>, channel: GuildTextBasedChannel];
  messageReactionAdd: [reaction: MessageReaction | PartialMessageReaction, user: User | PartialUser];
  messageReactionRemove: [reaction: MessageReaction | PartialMessageReaction, user: User | PartialUser];
  messageUpdate: [oldMessage: Message | PartialMessage, newMessage: Message | PartialMessage];
  presenceUpdate: [oldPresence: Presence | null, newPresence: Presence];
  ready: [client: Client<true>];
  invalidated: [];
  roleCreate: [role: Role];
  roleDelete: [role: Role];
  roleUpdate: [oldRole: Role, newRole: Role];
  threadCreate: [thread: AnyThreadChannel, newlyCreated: boolean];
  threadDelete: [thread: AnyThreadChannel];
  threadListSync: [threads: Collection<Snowflake, AnyThreadChannel>, guild: Guild];
  threadMemberUpdate: [oldMember: ThreadMember, newMember: ThreadMember];
  threadMembersUpdate: [
    addedMembers: Collection<Snowflake, ThreadMember>,
    removedMembers: Collection<Snowflake, ThreadMember | PartialThreadMember>,
    thread: AnyThreadChannel,
  ];
  threadUpdate: [oldThread: AnyThreadChannel, newThread: AnyThreadChannel];
  typingStart: [typing: Typing];
  userUpdate: [oldUser: User | PartialUser, newUser: User];
  voiceStateUpdate: [oldState: VoiceState, newState: VoiceState];
  webhookUpdate: [channel: TextChannel | NewsChannel | VoiceChannel | ForumChannel];
  interactionCreate: [interaction: Interaction];
  shardDisconnect: [closeEvent: CloseEvent, shardId: number];
  shardError: [error: Error, shardId: number];
  shardReady: [shardId: number, unavailableGuilds: Set<Snowflake> | undefined];
  shardReconnecting: [shardId: number];
  shardResume: [shardId: number, replayedEvents: number];
  stageInstanceCreate: [stageInstance: StageInstance];
  stageInstanceUpdate: [oldStageInstance: StageInstance | null, newStageInstance: StageInstance];
  stageInstanceDelete: [stageInstance: StageInstance];
  stickerCreate: [sticker: Sticker];
  stickerDelete: [sticker: Sticker];
  stickerUpdate: [oldSticker: Sticker, newSticker: Sticker];
  guildScheduledEventCreate: [guildScheduledEvent: GuildScheduledEvent];
  guildScheduledEventUpdate: [
    oldGuildScheduledEvent: GuildScheduledEvent | null,
    newGuildScheduledEvent: GuildScheduledEvent,
  ];
  guildScheduledEventDelete: [guildScheduledEvent: GuildScheduledEvent];
  guildScheduledEventUserAdd: [guildScheduledEvent: GuildScheduledEvent, user: User];
  guildScheduledEventUserRemove: [guildScheduledEvent: GuildScheduledEvent, user: User];
}
*/

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