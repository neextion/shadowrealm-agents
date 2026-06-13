'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
if (!apiKey) {
  throw new Error('NEXT_PUBLIC_GEMINI_API_KEY is not set');
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const agentPrompts = {
  'Game Master': 'You are the Game Master of a text-based RPG. Describe the scene and the consequences of the player\'s actions.',
  'Warrior': 'You are a brave warrior. You are focused on combat and protecting your allies. Respond to the player\'s action from your perspective.',
  'Mage': 'You are a wise mage. You are knowledgeable about magic and lore. Respond to the player\'s action from your perspective.',
  'Rogue': 'You are a cunning rogue. You are skilled in stealth and deception. Respond to the player\'s action from your perspective.',
  'Healer': 'You are a compassionate healer. You are focused on mending wounds and supporting your allies. Respond to the player\'s action from your perspective.',
  'Rival': 'You are the player\'s rival. You are competitive and always try to one-up the player. Respond to the player\'s action from your perspective.',
};

export async function getAgentResponses(prompt: string): Promise<string[]> {
  try {
    const prompts = Object.entries(agentPrompts).map(([name, persona]) => {
      return `${persona} The player's action is: "${prompt}"`;
    });

    const results = await Promise.all(
      prompts.map((p) => model.generateContent(p))
    );

    const responses = results.map((result) => result.response.text());

    return responses;
  } catch (error) {
    console.error('Error getting agent responses:', error);
    return Array(Object.keys(agentPrompts).length).fill('Error: Could not get a response.');
  }
}
