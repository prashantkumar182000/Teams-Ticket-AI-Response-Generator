
# Microsoft Teams AI Ticket Response Assistant

The **Microsoft Teams AI Ticket Response Assistant** is a powerful application designed to assist teams in managing ticket responses using AI. Built with modern technologies, this tool integrates seamlessly with Microsoft Teams to streamline ticket handling and enhance productivity.

---

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Environment Configuration](#environment-configuration)
5. [Running the Application](#running-the-application)
6. [Project Structure](#project-structure)
7. [Usage Guide](#usage-guide)
8. [API Reference](#api-reference)
9. [Contributing](#contributing)
10. [License](#license)

---

## Features

- **AI-Driven Ticket Responses**: Automatically generate responses for tickets using Hugging Face models.
- **Interactive Response Cards**: Accept, edit, or refine AI-generated responses.
- **Feedback Collection**: Gather user feedback to improve AI response accuracy.
- **Admin Settings**: Manage API keys, endpoints, and toggle app features.
- **Seamless Integration**: Works directly within Microsoft Teams.

---

## Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (v16 or above)
- **npm** or **yarn**
- Access to:
  - **Microsoft Azure Bot Framework** credentials
  - **Hugging Face API** keys

---

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

---

## Environment Configuration

1. Create a `.env` file in the project root and add the following variables:

   ```plaintext
   REACT_APP_MICROSOFT_APP_ID=<Your Microsoft App ID>
   REACT_APP_MICROSOFT_APP_PASSWORD=<Your Microsoft App Password>
   BOT_ENDPOINT=<Your Bot's Endpoint URL>
   REACT_APP_AI_API_URL=<Your Hugging Face API URL>
   REACT_APP_API_KEY=<Your Hugging Face API Key>
   ```

2. Replace the placeholders with your actual values.

---

## Running the Application

1. Start the development server:

   ```bash
   npm start
   ```

2. Open the application in your browser at [http://localhost:3000](http://localhost:3000).

3. For a production build:

   ```bash
   npm run build
   ```

4. Deploy the build directory to your preferred hosting platform.

---

## Project Structure

```plaintext
src/
├── components/         # UI Components
├── hooks/              # Custom Hooks
├── pages/              # Application Pages
├── services/           # API Service Layer
├── utils/              # Utility Functions
├── App.tsx             # Root Component
├── index.tsx           # Application Entry Point
public/
├── index.html          # HTML Template
.env                    # Environment Variables
package.json            # Dependencies and Scripts
```

---

## Usage Guide

### Submitting a Query
1. Navigate to the home page.
2. Enter your query in the input field.
3. Click **Submit Query** to receive an AI-generated response.

### Interactive Response Card
- **Accept**: Confirm the response as is.
- **Edit**: Modify the response manually.
- **Refine**: Generate an improved version of the response.

### Feedback Form
1. Rate the AI response (1–5 stars).
2. Provide additional comments if needed.
3. Submit the feedback.

---

## API Reference

### Hugging Face Model API

- **Endpoint**: `https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3`
- **Method**: `POST`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <Your API Key>",
    "Content-Type": "application/json"
  }
  ```
- **Request Body**:
  ```json
  {
    "inputs": "<Your Query>"
  }
  ```

---

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add your message"
   ```

4. Push the branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author

Developed by [Prashant Kumar](https://prashantkumar60099.netlify.app/).  
GitHub: [@prashantkumar182000](https://github.com/prashantkumar182000)
```
