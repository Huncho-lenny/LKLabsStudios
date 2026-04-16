import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  const theme =
    typeof window !== "undefined"
      ? ((localStorage.getItem("theme") ?? "dark") as "dark" | "light")
      : "dark";

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
