"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp, Sparkles, LoaderCircle } from "lucide-react";
import { TextLoop } from "@/components/ui/text-loop";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Footer from "@/components/Footer";
import {useState} from "react"
import axios from "axios"
import { useMutation } from "@tanstack/react-query"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
export default function Home() {

  const [prompt, setPrompt] = useState("")
  const {user} = useUser()
  const router = useRouter()

  const {mutate: createChat, isPending: isCreating } = useMutation({
    mutationFn: async () => {
      const response = await axios.post("/api/create-chat", {prompt, userId: user?.id})
      return response.data
    },
    onSuccess: (data) => {
      console.log(data)
      router.push(`/chat/${data.chatId}`);
      return;
    },
    onError: (error) => {
      console.log(error)
      return
    }
  })

  const {mutate: enhancePrompt, isPending: isEnhancing} = useMutation({
    mutationFn: async () => {
      const response = await axios.post("/api/enhance-prompt", {prompt})
      return response.data
    },
    onSuccess: (data) => {
      setPrompt(data)
      return;
    },
    onError: (error) => {
      console.log(error)
      return
    }
  })

  return (
    <div className=" w-full min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center px-4">
        <TextLoop className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">
          <h1 style={{ fontFamily: "var(--font-philosopher)" }}>
            Welcome to Manimation!
          </h1>
          <h1 style={{ fontFamily: "var(--font-philosopher)" }}>
            Visualize Science
          </h1>
          <h1 style={{ fontFamily: "var(--font-philosopher)" }}>
            Explore your curiousity with AI
          </h1>
          <h1 style={{ fontFamily: "var(--font-philosopher)" }}>
            Manimate your concepts
          </h1>
        </TextLoop>

        {/* Search Container */}

        <div
        style={{
          backgroundColor: "background",
        }}
        className=" border border-card w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl rounded-2xl p-3 ">
          {/* Search Input and Buttons */}
        <form className="w-full" onSubmit={(e) => {
          e.preventDefault()
          createChat()
        }}>
          <div className="relative">
            <Textarea
              id="prompt"
              placeholder="Example: Illustrate sine function"
              className="flex-grow border-none focus-visible:ring-0 focus-visible:ring-offset-0 resize-none font-medium sm:text-lg text-gray-300 min-h-[100px] py-2 px-2"
              style={{
                backgroundColor: "background",
                minHeight: "100px",
              }}
              
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = `${target.scrollHeight}px`;

              }}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />

            {/* Buttons Container */}
            <div className="flex items-center gap-1 p-1">
              {/* Enhance prompt */}

              <div className="ml-auto gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button disabled={isEnhancing} variant="ghost" className="p-1.5 sm:p-2 rounded-md flex-shrink-0 hover:cursor-pointer" onClick={() => enhancePrompt()}>
                      {isEnhancing ? <LoaderCircle className="animate-spin" /> : <Sparkles />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Enhance prompt</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Enter Button */}
              <Button
              disabled={isCreating}
              type="submit"
              className="p-1.5 sm:p-2 rounded-md flex-shrink-0 hover:cursor-pointer ml-2">
                <ArrowUp />
              </Button>
              </div>
            </div>
            </div>
        </form>
          </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
