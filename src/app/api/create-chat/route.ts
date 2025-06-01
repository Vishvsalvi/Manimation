import prisma from "@/app/db/db";
import { NextResponse } from "next/server";

export async function POST(req: Request){

   try {
     const { userPrompt, userId } = await req.json()
 
     const createChat = await prisma.chat.create({
         data: {
             user: userId,
             messages: {
                 create: {
                     content: userPrompt,
                     type: "user",
                 }
             }
         }
     })
 
     return NextResponse.json({chatId: createChat.id})
   } catch (error) {
    console.log(error)
    return NextResponse.json({error: "Failed to create chat"}, {status: 500})
   }


}