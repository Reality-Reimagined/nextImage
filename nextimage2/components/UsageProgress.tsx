"use client";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface UsageProgressProps {
  used: number;
  total: number;
  onUpgrade?: () => void;
}

export function UsageProgress({ used, total, onUpgrade }: UsageProgressProps) {
  const percentage = Math.min((used / total) * 100, 100);
  const remaining = total - used;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full p-4 bg-card rounded-lg border space-y-3"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="space-y-1">
          <h3 className="text-sm font-medium">Free Generations</h3>
          <p className="text-xs text-muted-foreground">
            {remaining} of {total} remaining
          </p>
        </div>
        {onUpgrade && percentage >= 70 && (
          <Button onClick={onUpgrade} size="sm" className="gap-2">
            <Sparkles className="w-4 h-4" />
            Upgrade
          </Button>
        )}
      </div>
      <Progress value={percentage} className="h-2" />
    </motion.div>
  );
}