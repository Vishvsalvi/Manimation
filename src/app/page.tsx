"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp, Sparkles } from "lucide-react";
import { TextLoop } from "@/components/ui/text-loop";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Footer from "@/components/Footer";

export default function Home() {
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
          <div className="relative">
            <Textarea
              placeholder="Example: Illustrate sine function"
              className="overflow-hidden h-auto flex-grow border-none focus-visible:ring-0 focus-visible:ring-offset-0 resize-none font-medium sm:text-lg text-gray-300 min-h-[100px] py-2 px-2"
              style={{
                backgroundColor: "background",
              }}
              
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = `${target.scrollHeight}px`;
              }}
            />

            {/* Buttons Container */}
            <div className="absolute bottom-2 right-2 flex gap-2">
              {/* Enhance prompt */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" className="p-1.5 sm:p-2 rounded-md flex-shrink-0 hover:cursor-pointer">
                      <Sparkles />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Enhance prompt</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Enter Button */}
              <Button className="p-1.5 sm:p-2 rounded-md flex-shrink-0 hover:cursor-pointer ">
                <ArrowUp />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
