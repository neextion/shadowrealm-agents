'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function getAgentResponses(playerInput: string): Promise<string[]> {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const agents = ['Game Master', 'Warrior', 'Mage', 'Rogue', 'Healer', 'Rival'];
  const responses: string[] = [];

  for (const agent of agents) {
    const prompt = `You are the ${agent}. The player says: "${playerInput}". What is your response?`;
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      responses.push(text);
    } catch (error) {
      console.error(`Error generating response for ${agent}:`, error);
      responses.push('...');
    }
  }

  return responses;
}
