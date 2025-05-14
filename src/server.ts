import ollama from 'ollama/browser'

export async function GetResponse(prompt: string) : Promise<string>{
    // Change LLM you want to use here
    const modelName = 'qwen2.5:3b';

    if(prompt === null) return "No prompt!";

    const responseFromOllama = await ollama.chat({
    model: modelName,
    messages: [{ role: 'user', content: prompt }],
    });

    return responseFromOllama.message.content;
};