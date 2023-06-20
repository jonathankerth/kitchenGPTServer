# GPT Kitchen App - Server Side

## Description
The GPT Kitchen App is a server-side application that combines the power of ChatGPT 3.5 and a suggested search bar dropdown to encourage users to integrate artificial intelligence into their kitchen experiences. This application provides a backend server for handling recipe finding requests and interacting with the OpenAI GPT-3.5 model.

## Installation
To install the GPT Kitchen App, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run the following command to install the dependencies:

```
npm install
```

## Usage
To start the GPT Kitchen App server, run the following command:

```
node index.js
```

The server will start running on the default port (usually 3000) unless specified otherwise in your environment variables.

## Configuration
The GPT Kitchen App requires a few configuration settings. Create a `.env` file in the project root directory and add the following variables:

- `OPENAI_API_KEY`: Your OpenAI API key.
- `SUGGESTED_SEARCHES`: A comma-separated list of suggested search terms for the dropdown menu.

Make sure to replace the values with your own API key and suggested search terms.

## Dependencies
The GPT Kitchen App relies on the following dependencies:

- `axios`: For making HTTP requests to external APIs.
- `cors`: For enabling Cross-Origin Resource Sharing (CORS) support.
- `dotenv`: For loading environment variables from the `.env` file.
- `express`: A fast and minimalist web framework for Node.js.
- `openai`: The OpenAI GPT-3.5 API library.

All dependencies are listed in the `package.json` file and will be installed automatically when running `npm install`.

## Contributing
Contributions to the GPT Kitchen App are welcome! If you find any issues or have suggestions for improvements, please submit a pull request or open an issue on the project's GitHub repository.

## License
The GPT Kitchen App is licensed under the ISC License. See the `LICENSE` file for more information.
