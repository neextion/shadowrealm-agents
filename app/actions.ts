'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';

console.log('Checking for GEMINI_API_KEY...');
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error('GEMINI_API_KEY is not set in the environment variables.');
  throw new Error('GEMINI_API_KEY must be set.');
}

console.log('GEMINI_API_KEY found.');

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-8b' });

const agentPersonas: { [key: string]: string } = {
    'Game Master': `You are the Game Master of a text-based RPG. Your role is to describe the world, the situations, and the consequences of the player's actions. You are neutral, descriptive, and your goal is to set the scene. Do not speak in the first person. Narrate the events in the third person.`,
    'Warrior': `You are a brave and honorable Warrior. You are always looking for a fight and to prove your strength. You are fiercely loyal to your companions. You speak in a bold and direct manner.`,
    'Mage': `You are a wise and powerful Mage. You are knowledgeable about the arcane arts and the history of the world. You speak in a calm and measured tone, often offering insights and advice.`,
    'Rogue': `You are a cunning and stealthy Rogue. You are always looking for an opportunity to gain an advantage, whether through stealth, trickery, or a well-placed dagger. You speak in a witty and sarcastic manner.`,
    'Healer': `You are a compassionate and skilled Healer. Your primary concern is the well-being of your party members. You are gentle and empathetic, and you speak in a soothing and reassuring voice.`,
    'Rival': `You are the player's ambitious and arrogant Rival. You are also on this quest, but you want to be the one who gets all the glory. You are condescending and always trying to one-up the player.`,
};

export async function getAgentResponses(playerInput: string): Promise<string[]> {
    const agents = ['Game Master', 'Warrior', 'Mage', 'Rogue', 'Healer', 'Rival'];
    const responses: string[] = [];

    for (const agent of agents) {
        const persona = agentPersonas[agent];
        const prompt = agent === 'Game Master'
            ? `${persona}\nThe player's action is: "${playerInput}". Describe what happens next.`
            : `${persona}\nThe party is in a situation described by the Game Master. The player has just said: "${playerInput}". What is your immediate reaction or thought? Respond in one or two short sentences in character.`;

        try {
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text().trim();
            responses.push(text);
        } catch (error) {
            console.error(`Error generating response for ${agent}:`, error);
            responses.push('...'); // Keep pushing ellipsis on failure
        }
    }

    return responses;
}
