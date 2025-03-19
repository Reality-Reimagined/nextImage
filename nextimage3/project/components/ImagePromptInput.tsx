"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Wand2, SendHorizontal, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImagePromptInputProps {
  onSubmit: (prompt: string) => void;
  isEditing: boolean;
  isLoading: boolean;
}

const createSuggestions = [
  "A 3D rendered steampunk city with flying machines and copper buildings",
  "A magical forest at twilight with glowing mushrooms and fairy lights",
  "An abstract geometric pattern with vibrant colors and flowing shapes",
  "A futuristic laboratory with holographic displays and robotic assistants",
];

const editSuggestions = [
  "Make the colors more vibrant and saturated",
  "Add a soft, dreamy glow to the entire image",
  "Change the background to a sunset sky",
  "Make it look more photorealistic",
  "Add dramatic lighting and shadows",
  "Apply a vintage film photography effect",
  "Enhance the details and sharpness",
  "Add a subtle bokeh effect to the background",
  "Convert to black and white with high contrast",
  "Add a cinematic color grade",
];

export function ImagePromptInput({
  onSubmit,
  isEditing,
  isLoading,
}: ImagePromptInputProps) {
  const [prompt, setPrompt] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [prompt]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && !isLoading) {
      onSubmit(prompt.trim());
      setPrompt("");
      setIsFocused(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (prompt.trim() && !isLoading) {
        onSubmit(prompt.trim());
        setPrompt("");
        setIsFocused(false);
      }
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setPrompt(suggestion);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const suggestions = isEditing ? editSuggestions : createSuggestions;

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div
        className={cn(
          "relative rounded-xl border bg-background transition-all duration-300",
          isFocused ? "shadow-lg ring-2 ring-primary/20" : "shadow"
        )}
      >
        {/* Prompt Input Area */}
        <div className="relative">
          <textarea
            ref={textareaRef}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              // Delay blur to allow suggestion clicks
              setTimeout(() => setIsFocused(false), 200);
            }}
            onKeyDown={handleKeyPress}
            placeholder={
              isEditing
                ? "Describe how you want to edit the image... (Press Enter to submit)"
                : "Describe the image you want to create in detail... (Press Enter to submit)"
            }
            className="min-h-[100px] w-full resize-none rounded-lg border-0 bg-transparent p-4 pr-20 text-sm focus:ring-0 focus-visible:ring-0 md:min-h-[120px] md:text-base"
            style={{ outline: "none" }}
          />

          {/* Character count */}
          <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
            {prompt.length} / 1000
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between border-t bg-muted/50 p-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4" />
            {isEditing ? "Edit mode" : "Create mode"}
          </div>

          <div className="flex items-center gap-2">
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-sm text-muted-foreground"
                >
                  Processing...
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              type="submit"
              disabled={!prompt.trim() || isLoading}
              className="relative overflow-hidden"
            >
              <AnimatePresence>
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-primary"
                  >
                    <Wand2 className="h-4 w-4 animate-pulse" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="send"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <SendHorizontal className="h-4 w-4" />
                    {isEditing ? "Edit" : "Generate"}
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Suggestions */}
      <AnimatePresence>
        {isFocused && !prompt && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 right-0 mt-2 space-y-2 rounded-lg border bg-card p-4 shadow-lg"
          >
            <p className="text-sm font-medium">Suggestions:</p>
            <div className="grid gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}