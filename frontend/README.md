# Entertainment App Frontend

## Environment Variables

The following environment variables are required for the backend of this project. Make sure to set them in your `.env` file (for backend) or in your deployment environment:

```
MONGODB_URL=mongodb+srv://ansarisania789:Saniaansari789@cluster0.nmxvgar.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

# JWT Token Secret
TOKEN=entertainment_app_jwt_secret_2024

# TMDB API Key
TMDB_KEY=12ca20480ec7f9ca0c37c984b98d2199

# Frontend URL for CORS
FRONTEND_URL=http://localhost:5173

# Node Environment
NODE_ENV=Development
```

## Project Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Notes
- The above environment variables are typically used in the backend. If you need to use any of them in the frontend, prefix them with `VITE_` (e.g., `VITE_TMDB_KEY`) and add them to a `.env` file in the `frontend` directory.
- Do **not** commit sensitive information (like API keys or database URLs) to public repositories. 