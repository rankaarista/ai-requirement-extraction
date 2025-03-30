# AI-Powered Requirement Extraction

## Project Overview
This project is a web application that allows users to input software requirements, process them using a Large Language Model (LLM), and extract structured categories along with the best-matching software solutions. The application also includes a credit system where each extraction deducts one credit from the user's initial balance.

## Tech Stack Used
- **Frontend:** Next.js, TailwindCSS, shadcn/ui
- **Backend:** Next.js API
- **State Management:** React hooks
- **AI Integration:** Mistral API (or any other LLM API)
- **Deployment:** Vercel

## Setup & Running Instructions

### Prerequisites
- Node.js (version 18+ recommended)
- npm or yarn
- An API key for the selected LLM (e.g., Mistral API)

### Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-directory>
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add the necessary API keys and configurations:
     ```env
     NEXT_PUBLIC_LLM_API_KEY=your-api-key-here
     ```
4. Run the development server:
   ```sh
   npm run dev  # or yarn dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Deployment
1. Push your code to GitHub/GitLab.
2. Connect your repository to Vercel.
3. Configure environment variables on Vercel.
4. Deploy the project using the Vercel dashboard.

## Link to the Deployed Vercel Site
You can access the web app deployed on Vercel via this link.
https://ai-requirement-extraction-hazel.vercel.app/

or this one,
https://ai-requirement-extraction-arista-rankas-projects.vercel.app/




