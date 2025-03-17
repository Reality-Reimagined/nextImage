"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// This would typically come from your backend/database
const mockGalleryItems = [
  {
    id: 1,
    title: "Futuristic City",
    description: "A vibrant cityscape with flying vehicles",
    placeholder: true,
  },
  {
    id: 2,
    title: "Fantasy Landscape",
    description: "A magical forest with glowing elements",
    placeholder: true,
  },
  {
    id: 3,
    title: "Abstract Art",
    description: "A colorful geometric composition",
    placeholder: true,
  },
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="space-y-8"
      >
        <motion.div variants={item}>
          <h1 className="text-3xl font-bold mb-2">Your Gallery</h1>
          <p className="text-muted-foreground">
            View and manage your generated images
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {mockGalleryItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-muted flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-muted-foreground" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}