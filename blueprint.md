# Blueprint

## Overview

This is a text-based role-playing game (RPG) where the user interacts with a group of AI-powered agents. The user's input drives the narrative forward, and the agents, including a Game Master, Warrior, Mage, Rogue, Healer, and a Rival, respond to the user's actions. The game features a dynamic story, a quest journal, a health indicator, and a dice-rolling mechanic to add an element of chance.

## Project Outline

### Styling and Design

*   **Theme:** Dark, immersive fantasy theme.
*   **Layout:** A three-column layout:
    *   **Left Column:** Quest Journal.
    *   **Center Column:** Main game interface, including the Game Master's narration and the player's input field.
    *   **Right Column:** Player health (HP) and a visual dice roller.
*   **Colors:** A palette of dark purples and blues to create a mysterious and engaging atmosphere.
*   **Typography:** Clear, legible fonts for narration and UI elements.

### Features

*   **AI-Powered Agents:** A diverse cast of AI agents that react to player input, powered by Google's Generative AI.
*   **Dynamic Narrative:** The story unfolds based on the player's choices and the AI agents' responses.
*   **Quest Journal:** Tracks active and completed quests.
*   **Health System:** A simple health point (HP) system to represent the player's well-being.
*   **Dice Rolling:** A 20-sided die roll is simulated for player actions, influencing the outcome.
*   **Server Actions:** The application uses Next.js Server Actions to securely and efficiently handle communication between the client and the server-side AI model.

### File Structure

```
/
|-- app/
|   |-- actions.ts       # Server-side actions for AI agent responses
|   |-- layout.tsx       # Root layout for the application
|   |-- page.tsx         # The main page of the application
|   |-- character-creation/
|   |   |-- page.tsx     # The character creation page
|   |-- game/
|       |-- page.tsx     # The main game page
|-- src/
|   |-- app/             # Redundant, but kept as per user instruction
|   |-- components/
|       |-- AgentPipeline.tsx # Renders the status of the AI agents
|       |-- Dice.tsx         # Renders the dice roll visualization
|       |-- GameUI.tsx       # The main game interface component
|       |-- QuestJournal.tsx # Renders the quest journal
|-- next.config.mjs      # Next.js configuration, including Webpack settings
|-- package.json         # Project dependencies and scripts
|-- tsconfig.json        # TypeScript configuration, including path aliases
|-- blueprint.md         # Project documentation (this file)
```

## Current Plan

This was the initial setup and build of the application. The primary goal was to create a functional foundation for the game, including the core UI components, AI agent integration, and the overall project structure. Now that the application is building successfully, the next steps will focus on enhancing the gameplay experience, adding more complex quests, and refining the AI agent interactions.
