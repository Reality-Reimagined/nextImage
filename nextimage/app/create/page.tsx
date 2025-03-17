"use client";
import { useState } from "react";
import { ImageUpload } from "@/components/ImageUpload";
import { ImagePromptInput } from "@/components/ImagePromptInput";
import { ImageResultDisplay } from "@/components/ImageResultDisplay";
import { ImageIcon, Wand2, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HistoryItem } from "@/lib/types";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { UsageProgress } from "@/components/UsageProgress";

export default function CreatePage() {
  const [image, setImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  // Mock usage data - will be replaced with real data from Supabase
  const [usageCount, setUsageCount] = useState(1);
  const freeLimit = 10;

  const handleImageSelect = (imageData: string) => {
    setImage(imageData || null);
  };

  const handleUpgrade = () => {
    // TODO: Implement Stripe checkout
    toast.info("Upgrade feature coming soon!");
  };

  const handlePromptSubmit = async (prompt: string) => {
    try {
      if (usageCount >= freeLimit) {
        toast.error("You've reached your free usage limit. Please upgrade to continue.");
        return;
      }

      setLoading(true);
      setError(null);

      const imageToEdit = generatedImage || image;
      const requestData = {
        prompt,
        image: imageToEdit,
        history: history.length > 0 ? history : undefined,
      };

      const response = await fetch("/api/image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate image");
      }

      const data = await response.json();

      if (data.image) {
        setGeneratedImage(data.image);
        setDescription(data.description || null);
        setUsageCount(prev => prev + 1); // Increment usage count

        const userMessage: HistoryItem = {
          role: "user",
          parts: [
            { text: prompt },
            ...(imageToEdit ? [{ image: imageToEdit }] : []),
          ],
        };

        const aiResponse: HistoryItem = {
          role: "model",
          parts: [
            ...(data.description ? [{ text: data.description }] : []),
            ...(data.image ? [{ image: data.image }] : []),
          ],
        };

        setHistory((prevHistory) => [...prevHistory, userMessage, aiResponse]);
        toast.success("Image generated successfully!");
      } else {
        toast.error("No image returned from API");
        setError("No image returned from API");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred";
      toast.error(errorMessage);
      setError(errorMessage);
      console.error("Error processing request:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setImage(null);
    setGeneratedImage(null);
    setDescription(null);
    setLoading(false);
    setError(null);
    setHistory([]);
    toast.info("Canvas cleared");
  };

  const currentImage = generatedImage || image;
  const isEditing = !!currentImage;
  const displayImage = generatedImage;

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <Card className="flex-1 border-0 bg-card shadow-none">
            <CardHeader className="flex flex-col items-center justify-center space-y-2">
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Wand2 className="w-8 h-8 text-primary" />
                Image Creation & Editing
              </CardTitle>
              {/* <span className="text-sm font-mono text-muted-foreground">
                powered by Google DeepMind Gemini 2.0 Flash
              </span> */}
            </CardHeader>
            <CardContent className="space-y-6 pt-6 w-full">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-900/20 dark:text-red-400"
                >
                  {error}
                </motion.div>
              )}

              {!displayImage && !loading ? (
                <>
                  <ImageUpload
                    onImageSelect={handleImageSelect}
                    currentImage={currentImage}
                  />
                  <ImagePromptInput
                    onSubmit={handlePromptSubmit}
                    isEditing={isEditing}
                    isLoading={loading}
                  />
                </>
              ) : loading ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  role="status"
                  className="flex items-center mx-auto justify-center h-56 max-w-sm bg-muted rounded-lg"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full"
                      />
                      <ImageIcon className="w-6 h-6 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Creating your masterpiece...
                    </span>
                  </div>
                </motion.div>
              ) : (
                <>
                  <ImageResultDisplay
                    imageUrl={displayImage || ""}
                    description={description}
                    onReset={handleReset}
                    conversationHistory={history}
                  />
                  <ImagePromptInput
                    onSubmit={handlePromptSubmit}
                    isEditing={true}
                    isLoading={loading}
                  />
                </>
              )}
            </CardContent>
          </Card>

          <div className="w-full md:w-64 space-y-4">
            <UsageProgress
              used={usageCount}
              total={freeLimit}
              onUpgrade={handleUpgrade}
            />
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h3 className="font-medium">Pro Features</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Unlimited generations</li>
                  <li>• Priority processing</li>
                  <li>• Advanced editing tools</li>
                  <li>• Commercial usage rights</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}