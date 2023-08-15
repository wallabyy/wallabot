require('dotenv').config();
const {Client, IntentsBitField, EmbedBuilder} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.on('ready', (c) => {
    console.log(`${c.user.username} is online.`);
})

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }

    if (message.content.toLowerCase() == 'deez') {
        message.reply('nutz');
    }

    if (message.content.toLowerCase() == 'ur') {
        message.reply('mom');
    }
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    
    if (interaction.commandName === 'coin-toss') {
        const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
        interaction.reply(`${result}`);
    }

    if (interaction.commandName === 'pick-a-game') {
        const games = ['league of legends', 'valorant', 'minecraft', 'overwatch', 'roblox', 'warzone', 'fortnite', 'we were here', 'bread and fred', 'stardew', 'WoW']
        const result = Math.floor(Math.random() * games.length);
        interaction.reply(`${games[result]}`);
    }

    if (interaction.commandName === 'ask') {
        const question = interaction.options.get('question').value;
        const responses = [
            'It is certain.',
            'It is decidedly so.',
            'Without a doubt.',
            'Yes - definitely.',
            'You may rely on it.',
            'As I see it, yes.',
            'Most likely.',
            'Outlook good.',
            'Yes.',
            'Signs point to yes.',
            'Reply hazy, try again.',
            'Ask again later.',
            'Better not tell you now.',
            'Cannot predict now.',
            'Concentrate and ask again.',
            "Don't count on it.",
            'My reply is no.',
            'My sources say no.',
            'Outlook not so good.',
            'Very doubtful.'
        ];
        const result = responses[Math.floor(Math.random() * responses.length)];
        const embed = new EmbedBuilder()
            .setTitle(`${question}`)
            .setDescription(`${result}`);
        interaction.reply({embeds: [embed]});

    }

    if (interaction.commandName === 'fortune-teller') {
        const responses = [
            'You will have great success in the near future.',
            'A new opportunity will present itself to you.',
            'Good things will come to you when you least expect them.',
            'Be patient, your hard work will pay off.',
            'An exciting adventure awaits you.',
            'Your creativity will lead to something extraordinary.',
            'You will meet someone special very soon.',
            'A positive change is on the horizon.',
            'Your determination will overcome any obstacle.',
            'Today is your lucky day!',
            'Beware of making hasty decisions.',
            'Challenges lie ahead, but you have the strength to overcome them.',
            'Take caution in trusting others blindly.',
            'Prepare for setbacks, but remember they are temporary.',
            'Keep a watchful eye for unexpected obstacles.',
            'Learn from past mistakes to avoid future troubles.',
            'Take some time for self-reflection and introspection.',
            'Patience will be key in overcoming difficulties.',
            'Stay focused on your goals, even during tough times.',
            'Remember that every failure is an opportunity to learn and grow.'
        ];
        const result = responses[Math.floor(Math.random() * responses.length)];
        interaction.reply(`${result}`);
    }

    if (interaction.commandName === 'multiply') {
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;
        interaction.reply(`The product is ${num1 * num2}`);
    }

    if (interaction.commandName === 'add') {
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;
        interaction.reply(`The sum is ${num1 + num2}`);
    }
});

client.login(process.env.TOKEN);
