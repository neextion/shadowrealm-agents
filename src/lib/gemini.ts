// This is a mock implementation of the Gemini API for now.

export const getGeminiResponse = async (prompt: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`The AI agent responds to: "${prompt}"`);
    }, 1000);
  });
};
