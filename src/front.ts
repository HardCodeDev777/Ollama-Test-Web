import { GetResponse } from "./server";

const app = document.getElementById("app");
const promptInput = document.getElementById("prompt") as HTMLInputElement;
const response = document.getElementById("response") as HTMLParagraphElement;

document.getElementById("send")?.addEventListener("click", sendPrompt);

async function sendPrompt(): Promise<void>{
    const userPrompt = promptInput.value.trim();
    response.textContent = await GetResponse(userPrompt);
    app?.appendChild(response);
};