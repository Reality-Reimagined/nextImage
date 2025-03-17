"use client";

import { motion } from "framer-motion";
import { Wand2, Image as ImageIcon, ArrowRight, Sparkles, MessageSquare, Download, Zap, Check } from "lucide-react";
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
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 dark:from-primary/10 dark:to-primary/5"
        />
        <motion.div
          className="max-w-5xl mx-auto text-center relative z-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Transform Your Ideas Into Art
            </h1>
          </motion.div>
          <motion.div variants={item}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Create stunning images with AI or enhance your existing photos using
              Google DeepMind Gemini 2.0 technology. Experience the future of image generation.
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

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to bring your creative vision to life with the power of AI
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start with 10 free generations. Choose the plan that works best for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-card p-8 rounded-lg border ${
                  plan.popular ? "border-primary shadow-lg" : ""
                }`}
              >
                {plan.popular && (
                  <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href="/create">Choose {plan.name}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes with our simple workflow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about our services
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg border"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of creators using Gemini Studio to bring their ideas to life
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link href="/create">
              <Sparkles className="w-5 h-5" />
              Start Creating Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "AI Image Generation",
    description: "Create unique, high-quality images from detailed text descriptions using advanced AI",
    icon: Wand2,
  },
  {
    title: "Smart Image Editing",
    description: "Edit and enhance your photos with natural language instructions and AI assistance",
    icon: ImageIcon,
  },
  {
    title: "Conversation History",
    description: "Keep track of your edits and maintain context for perfect iterative refinements",
    icon: MessageSquare,
  },
  {
    title: "Easy Downloads",
    description: "Download your creations instantly in high resolution for immediate use",
    icon: Download,
  },
  {
    title: "Lightning Fast",
    description: "Powered by Google's Gemini 2.0 Flash for rapid image generation and editing",
    icon: Zap,
  },
  {
    title: "Advanced Controls",
    description: "Fine-tune your creations with precise control over the generation process",
    icon: Sparkles,
  },
];

const steps = [
  {
    title: "Describe Your Vision",
    description: "Write a detailed description of the image you want to create or how you want to edit an existing one",
  },
  {
    title: "AI Generation",
    description: "Our AI instantly processes your request and generates high-quality results",
  },
  {
    title: "Refine & Download",
    description: "Make adjustments through natural conversation and download your final creation",
  },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "9.99",
    features: [
      "50 generations per month",
      "Basic editing features",
      "Standard response time",
      "Community support",
      "Download in standard quality"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "19.99",
    features: [
      "150 generations per month",
      "Advanced editing features",
      "Priority processing",
      "Email support",
      "Download in high quality",
      "Commercial usage rights"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "49.99",
    features: [
      "Unlimited generations",
      "Premium editing features",
      "Fastest processing",
      "24/7 priority support",
      "Custom API access",
      "Team collaboration tools"
    ],
    popular: false
  }
];

const faqs = [
  {
    question: "What is included in the free trial?",
    answer: "You get 10 free image generations to start. This includes both creating new images and editing existing ones."
  },
  {
    question: "Can I use the generated images commercially?",
    answer: "Commercial usage rights are included in the Pro and Enterprise plans. The Basic plan is for personal use only."
  },
  {
    question: "How does the generation limit work?",
    answer: "Generation limits reset monthly. Unused generations don't roll over to the next month."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Changes take effect at the start of your next billing cycle."
  }
];