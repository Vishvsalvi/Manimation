"use client"
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import {
  ClerkProvider,
} from "@clerk/nextjs";

import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  const queryClient = new QueryClient()
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    >
    <ClerkProvider appearance={{ baseTheme: dark }}>
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        {children}
      </SidebarProvider>
      </QueryClientProvider>
      </ClerkProvider>
    </ThemeProvider>
  );
};

export default Provider;
