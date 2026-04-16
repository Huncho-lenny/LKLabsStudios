import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      theme="dark"
      position="top-right"
      toastOptions={{
        className: "border border-border bg-card text-card-foreground",
      }}
    />
  );
}
