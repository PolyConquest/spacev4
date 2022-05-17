# Spacev4

Default layout for the Space game version4.

## Goal

Reach the endpoint which is the DO planet.
You start on Earth.
Be aware, this time you have a fuel level that you need to take in consideration.

## Actions

- `move <src> <dest>` : moves the ship from the source planet to the destination planet

## Available Input

- `readLine` : returns a stringified JSON object representing the solar system. {planets: [{id,name}], paths:[src,dest], startingPoint, endPoints}

## Win Condition

You win by being on the endpoint