import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'


export const runtime = 'edge'

const config = new Configuration({
    apiKey: process.env.CHATBOTKEY
})

const openai = new OpenAIApi(config)
export async function POST(request: Request) {
    const { messages } = await request.json()
    console.log(messages)
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        stream: true,
        messages: [
            { role: 'system', content: 'Your are help full assistent' },
            ...messages],

    })
    const strem = await OpenAIStream(response)
    return new StreamingTextResponse(strem)
}
