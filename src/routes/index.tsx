import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Studio } from "@/components/studio";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <Studio />
      <Toaster
        theme="dark"
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#1a1914",
            color: "#f4efe3",
            border: "1px solid rgba(244,239,227,0.12)",
            fontFamily: '"Noto Sans KR", sans-serif',
          },
        }}
      />
    </>
  );
}
