const express = require("express");
const axios = require("axios");
const cors = require("cors");

require("dotenv").config();
const apiKey = process.env.OPENAI_API_KEY;

const app = express();
app.use(express.json());
app.use(cors());

app.post("/chat", async (req, res) => {
	const message = req.body.message;

	const response = await axios.post(
		"https://api.openai.com/v1/chat/completions",
		{
			model: "gpt-3.5-turbo",
			messages: [
				{
					role: "system",
					content: "You are a helpful assistant.",
				},
				{
					role: "user",
					content: message,
				},
			],
		},
		{
			headers: {
				"Authorization": `Bearer ${apiKey}`,
				"OpenAI-Organization": "org-bMlK2YrV0auynMNitNdI1hiQ",
			},
		}
	);

	const chatGPTResponse = response.data.choices[0].message.content.trim();

	res.send(chatGPTResponse);
});

app.listen(1234, () => {
	console.log("Server is running on port 1234");
});
