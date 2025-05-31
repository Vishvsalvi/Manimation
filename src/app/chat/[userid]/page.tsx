import React from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
   

const page = async () => {
 
  return (
    <ResizablePanelGroup  className="bg-card min-h-screen max-w-screen rounded-lg border " direction="horizontal">
    <ResizablePanel >One</ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel>Two</ResizablePanel>
  </ResizablePanelGroup>
  )
}

export default page