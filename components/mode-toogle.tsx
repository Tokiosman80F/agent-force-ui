"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";


function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  if (!resolvedTheme) return null; // 👈 key fix

  return (
    <button
      className="relative border size-5 flex items-center justify-center"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun
        size={18} 
        className={` transition-all absolute inset-0 ${
          resolvedTheme === "light" ? "rotate-0 scale-100" : "rotate-90 scale-0"
        }`}
      />

      <Moon
        size={18}
        className={` transition-all absolute inset-0 ${
          resolvedTheme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
        }`}
      />
    </button>
  );
}

export default ModeToggle;
