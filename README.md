# Discord URL Shortener Bot

A simple Discord bot that generates shortened URLs when users send a `create` command. The shortened URLs are stored in MongoDB and can be accessed via an Express.js server.

## Features

- Listens to Discord messages that start with `create`.
- Generates a short URL using `nanoid`.
- Stores the original URL and short ID in MongoDB.
- Replies to the user with the shortened URL.
- Serves redirections to original URLs via an Express backend.

## Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- Discord.js
- NanoID

## How It Works

1. The bot listens for messages like:
2. It generates a random short ID and saves:
```json
{
  "url": "https://www.example.com",
  "shorturl": "a1b2c3d4"
}
3. http://localhost:8001/a1b2c3d4
