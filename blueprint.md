# Shadowrealm Agents Blueprint

## Overview

This document outlines the plan and implementation details for the Shadowrealm Agents application, an AI-powered text-based RPG. It serves as a single source of truth for the project's features, design, and development progress.

## Implemented Features

*   **AI-Powered Narrative:** The game uses a series of AI agents to generate dynamic and engaging narrative content.
*   **Character Creation:** Players can create their own characters, choosing a name and class.
*   **Interactive Gameplay:** Players can interact with the game world by typing commands.
*   **Dice Rolls:** A dice roll mechanic adds an element of chance to the game.
*   **Agent Pipeline:** The game features a visual representation of the AI agents and their current status.
*   **Quest Journal:** Players can track their progress through the game with a quest journal.

## Design

*   **Color Scheme:** The application uses a dark, fantasy-themed color scheme with purple and gold accents.
*   **Typography:** The application uses a clear and readable font.
*   **Layout:** The application uses a three-column layout to display the game world, agent pipeline, and character information.

## Current Plan

*   **Fix Routing:** The routing of the application will be fixed to ensure that the user is taken to the landing page first, then to the character creation page, and finally to the game.

## Action Items

*   [x] Update `app/page.tsx` to show the landing page.
*   [x] Update `app/character-creation/page.tsx` to redirect to the game page.
*   [x] Update `app/game/page.tsx` to pass character data to the `GameUI` component.
*   [x] Update `src/components/GameUI.tsx` to display character data.
