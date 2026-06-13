# Blueprint

## Overview

This is a text-based RPG game where the player interacts with a world managed by a Game Master and a team of AI agents. The player will be able to create a character, go on quests, and interact with the game world through a text-based interface.

## Implemented Features

### Version 1.0

*   **Character Creation:** A simple form to create a character with a name and class. The available classes are Warrior, Mage, and Rogue.
*   **Game Page:** A dedicated page for the game, accessible after character creation.
*   **Dark Purple Theme:** The game interface has a dark purple theme.
*   **Game Master Narration Area:** An area to display the Game Master's story.
*   **Agent Pipeline:** A component that displays the status of the 6 AI agents (Game Master, Warrior, Mage, Rogue, Healer, Rival).
*   **Player Input:** A text box for the player to input their actions.
*   **Quest Journal:** A sidebar that displays the player's quests and their progress.
*   **Health Points Display:** A display for the player's health points.
*   **Dice Roll Animation:** A placeholder for a dice roll animation.
*   **Mock Gemini API:** A mock function to simulate responses from the AI agents.

## Current Plan

*   **Implement Game Logic:** Add state management to the `GameUI` component to handle player input and update the game state.
*   **Dynamic Components:** Make the `AgentPipeline` and `QuestJournal` components dynamic by passing props.
*   **Integrate Gemini API:** Replace the mock Gemini API function with a real implementation to generate AI responses for each agent.
*   **Dice Roll Animation:** Implement the dice roll animation.
*   **Styling and Polish:** Refine the styles and add more visual elements to enhance the user experience.
