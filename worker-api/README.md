# PollyGlot AI Translator - Cloudflare Worker

## Overview

This Cloudflare Worker acts as the backend service for the PollyGlot AI Translator application. It securely communicates with the OpenRouter API to translate text into different languages while keeping the API key hidden from the frontend.

## Features

* Secure API requests using Cloudflare Workers
* AI-powered translations with OpenRouter
* Supports multiple languages
* Returns translation results as JSON
* Built with Hono and TypeScript

## Technologies Used

* Cloudflare Workers
* Hono
* TypeScript
* OpenRouter API
* Wrangler

## Project Structure

```text
worker-api/
├── src/
│   └── index.ts
├── package.json
├── wrangler.jsonc
├── tsconfig.json
└── README.md
```

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

## Local Development

Start the Cloudflare Worker locally:

```bash
npx wrangler dev
```

The worker will run locally and can be tested from the frontend application.

## Deployment

Deploy the worker to Cloudflare:

```bash
npx wrangler deploy
```

After deployment, the worker will be available at a URL similar to:

```text
https://worker-api.asma-samadi.workers.dev
```

## API Endpoint

### POST /translate

Request Body

```json
{
  "text": "Hello",
  "language": "French"
}
```

Example Response

```json
{
  "original": "Hello",
  "translation": "Bonjour",
  "language": "French"
}
```

## Frontend

This worker is used by the PollyGlot AI Translator React application to process translation requests securely.

## Author

**Asma Samadi**
