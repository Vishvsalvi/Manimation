import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import {
  ClerkProvider,
} from "@clerk/nextjs";

import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    >
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        {children}
      </SidebarProvider>
    </ClerkProvider>
    </ThemeProvider>
  );
};

export default Provider;
