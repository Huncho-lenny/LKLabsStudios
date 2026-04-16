import { Toaster as SonnerToaster } from "sonner";
import { useTheme } from "@/hooks/use-theme";

export function Toaster() {
  const { theme } = useTheme();

  return (
    <SonnerToaster
      theme={theme}
      position="top-right"
      toastOptions={{
        className: "border border-border bg-card text-card-foreground",
      }}
    />
  );
}
