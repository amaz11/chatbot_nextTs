import Accordian from "./components/Accordian";
import { Chatbot } from "./components/Chatbot";


export default function Home() {
  return (
    <main className=" bg-slate-900 min-h-screen p-4 sm:p-8 md:p-16 lg:p-24 text-black">
        {/* <Accordian />
        <Accordian /> */}
        <Chatbot/>
    </main>
  )
}
