require('dotenv').config();
const {REST, Routes, ApplicationCommandOptionType} = require('discord.js');

const commands = [
    {
        name: 'coin-toss',
        description: 'toss a coin and get heads or tails',
    },
    {
        name: 'pick-a-game',
        description: 'selects a game',
    },
    {
        name: 'ask',
        description: 'ask a question',
        options: [
            {
                name: 'question',
                description: 'the question',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ],
    },
    {
        name: 'fortune-teller',
        description: 'reveals your luck for today',
    },
    {
        name: 'multiply',
        description: 'multiply two numbers',
        options: [
            {
                name: 'first-number',
                description: 'the first number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name: 'second-number',
                description: 'the second number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ],
    },
    {
        name: 'add',
        description: 'add two numbers',
        options: [
            {
                name: 'first-number',
                description: 'the first number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name: 'second-number',
                description: 'the second number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ],
    },
];

const rest = new REST({version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash commands...');

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID, 
                process.env.GUILD_ID
            ),
            {body: commands}
        );

        console.log('Slash commands were registered successfully');
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
})();