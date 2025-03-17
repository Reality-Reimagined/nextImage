"use client";

import { motion } from "framer-motion";
import { Wand2, Image as ImageIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Transform Your Ideas Into Art
            </h1>
          </motion.div>
          <motion.div variants={item}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Create stunning images with AI or enhance your existing photos using
              Google DeepMind Gemini 2.0 technology.
            </p>
          </motion.div>
          <motion.div variants={item} className="flex gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/create">
                <Wand2 className="w-5 h-5" />
                Start Creating
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Features
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "AI Image Generation",
    description: "Create unique images from text descriptions using advanced AI",
    icon: Wand2,
  },
  {
    title: "Image Editing",
    description: "Edit and enhance your photos with natural language instructions",
    icon: ImageIcon,
  },
  {
    title: "Conversation History",
    description: "Keep track of your edits and maintain context for refinements",
    icon: ImageIcon,
  },
];