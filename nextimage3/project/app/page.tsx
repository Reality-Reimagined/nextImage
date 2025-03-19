// "use client";

// import { motion } from "framer-motion";
// import { Wand2, Image as ImageIcon, ArrowRight, Sparkles, MessageSquare, Download, Zap, Check } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: { 
//     opacity: 1, 
//     y: 0,
//     transition: {
//       type: "spring",
//       bounce: 0.4,
//     },
//   },
// };

// const glowVariants = {
//   animate: {
//     scale: [1, 1.05, 1],
//     opacity: [0.5, 0.8, 0.5],
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//     },
//   },
// };

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
//       {/* Hero Section */}
//       <section className="relative py-24 px-4 overflow-hidden">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.2 }}
//           className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"
//         />
//         <motion.div
//           variants={glowVariants}
//           animate="animate"
//           className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"
//         />
//         <motion.div
//           variants={glowVariants}
//           animate="animate"
//           className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10"
//         />
//         {/* Particle Effect */}
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           <div className="particles animate-float" />
//         </div>
//         <motion.div
//           className="max-w-6xl mx-auto text-center relative z-10"
//           variants={container}
//           initial="hidden"
//           animate="show"
//         >
//           <motion.div
//             className="flex items-center justify-center mb-8"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <svg width="200" height="60" viewBox="0 0 200 60" className="mr-2">
//               <g fill="url(#gradient)">
//                 <rect x="10" y="50" width="5" height="5" rx="1" opacity="0.8">
//                   <animate attributeName="opacity" values="0;0.8;0" dur="3s" repeatCount="indefinite" />
//                 </rect>
//                 <rect x="20" y="50" width="5" height="5" rx="1" opacity="0.8">
//                   <animate attributeName="opacity" values="0;0.8;0" dur="3s" begin="0.2s" repeatCount="indefinite" />
//                 </rect>
//                 <rect x="30" y="50" width="5" height="5" rx="1" opacity="0.8">
//                   <animate attributeName="opacity" values="0;0.8;0" dur="3s" begin="0.4s" repeatCount="indefinite" />
//                 </rect>
//               </g>
//               <text x="10" y="40" fontFamily="Inter, sans-serif" fontSize="40" fontWeight="bold" fill="currentColor">
//                 MOS
//                 <tspan fill="url(#gradient)" dx="5" className="animate-pulse">
//                   AI
//                 </tspan>
//                 <tspan dx="5">C</tspan>
//               </text>
//               <defs>
//                 <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" style={{ stopColor: "#1e40af", stopOpacity: 1 }} />
//                   <stop offset="100%" style={{ stopColor: "#9333ea", stopOpacity: 1 }} />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </motion.div>
//           <motion.div variants={item}>
//             <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary drop-shadow-lg dark:text-white">
//               Craft Your Vision with Mosaic
//             </h1>
//           </motion.div>
//           <motion.div variants={item}>
//             <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto font-light tracking-wide">
//               Turn your ideas into stunning images or enhance your photos with cutting-edge technology.
//             </p>
//           </motion.div>
//           <motion.div variants={item} className="flex gap-6 justify-center">
//             <Button
//               asChild
//               size="lg"
//               className="gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               <Link href="/create">
//                 <Wand2 className="w-5 h-5 animate-pulse" />
//                 Create Now
//                 <ArrowRight className="w-5 h-5" />
//               </Link>
//             </Button>
//           </motion.div>
//           <motion.div variants={item} className="mt-12 max-w-4xl mx-auto">
//             <img
//               src="/assets/thumbnail.png"
//               alt="Mosaic Thumbnail"
//               className="w-full h-auto rounded-lg shadow-lg"
//             />
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Features Section */}
//       <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
//         <motion.div
//           className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 -z-10"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 0.1 }}
//           viewport={{ once: true }}
//         />
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:text-white">
//               Unleash Your Creativity with Mosaic
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Powerful tools to make your imagination reality
//             </p>
//           </motion.div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="group bg-card p-6 rounded-xl border border-primary/10 hover:border-primary/30 hover:bg-primary/5 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
//               >
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                 />
//                 <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 relative z-10 group-hover:bg-primary/30 transition-colors">
//                   <feature.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-primary/90 relative z-10">
//                   {feature.title}
//                 </h3>
//                 <p className="text-muted-foreground relative z-10">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="py-24 px-4 relative">
//         <motion.div
//           className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 to-transparent -z-10"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.15 }}
//         />
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:text-white">
//               Plans for Every Creator
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Kick off with 10 free generations, then choose your perfect Mosaic plan.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {pricingPlans.map((plan, index) => (
//               <motion.div
//                 key={plan.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className={`bg-card p-8 rounded-xl border shadow-lg ${
//                   plan.popular
//                     ? "border-primary/50 bg-gradient-to-b from-primary/5 to-background scale-105"
//                     : "border-primary/10 hover:border-primary/30"
//                 } relative overflow-hidden transition-all duration-300`}
//               >
//                 {plan.popular && (
//                   <motion.span
//                     className="absolute top-0 right-0 bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-bl-lg"
//                     initial={{ x: 20, opacity: 0 }}
//                     whileInView={{ x: 0, opacity: 1 }}
//                     viewport={{ once: true }}
//                   >
//                     Top Choice
//                   </motion.span>
//                 )}
//                 <h3 className="text-2xl font-bold mt-4 text-primary">{plan.name}</h3>
//                 <div className="mt-4 mb-6">
//                   <span className="text-5xl font-extrabold text-primary/90">${plan.price}</span>
//                   <span className="text-muted-foreground">/month</span>
//                 </div>
//                 <ul className="space-y-4 mb-8">
//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex items-center gap-2">
//                       <Check className="w-5 h-5 text-primary flex-shrink-0" />
//                       <span className="text-muted-foreground">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <Button
//                   className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
//                   variant={plan.popular ? "default" : "outline"}
//                   asChild
//                 >
//                   <Link href="/create">Get {plan.name}</Link>
//                 </Button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// const features = [
//   {
//     title: "Image Generation",
//     description: "Turn your wildest ideas into breathtaking visuals with AI power",
//     icon: Wand2,
//   },
//   {
//     title: "Photo Editing",
//     description: "Perfect your images with intuitive, AI-driven enhancements",
//     icon: ImageIcon,
//   },
//   {
//     title: "Conversation History",
//     description: "Keep your edits flowing with seamless context tracking",
//     icon: MessageSquare,
//   },
//   {
//     title: "Quick Downloads",
//     description: "Get your high-res creations instantly, ready to share",
//     icon: Download,
//   },
//   {
//     title: "Blazing Speed",
//     description: "Fast results that keep up with your creative spark",
//     icon: Zap,
//   },
//   {
//     title: "Fine-Tuned Control",
//     description: "Shape your art with precision and ease",
//     icon: Sparkles,
//   },
// ];

// const pricingPlans = [
//   {
//     name: "Starter",
//     price: "9.99",
//     features: [
//       "50 generations per month",
//       "Basic editing tools",
//       "Standard speed",
//       "Community support",
//       "Standard quality downloads",
//     ],
//     popular: false,
//   },
//   {
//     name: "Creator",
//     price: "19.99",
//     features: [
//       "150 generations per month",
//       "Advanced editing tools",
//       "Priority speed",
//       "Email support",
//       "High-quality downloads",
//       "Commercial use",
//     ],
//     popular: true,
//   },
//   {
//     name: "Pro",
//     price: "49.99",
//     features: [
//       "Unlimited generations",
//       "Premium editing features",
//       "Fastest speed",
//       "24/7 support",
//       "Custom API access",
//       "Team tools",
//     ],
//     popular: false,
//   },
// ];


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
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
    },
  },
};

const glowVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"
        />
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"
        />
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10"
        />
        {/* Particle Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="particles animate-float" />
        </div>
        <motion.div
          className="max-w-6xl mx-auto text-center relative z-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary drop-shadow-lg dark:text-white">
              Craft Your Vision with AI
            </h1>
          </motion.div>
          <motion.div variants={item}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto font-light tracking-wide">
              Turn your ideas into stunning images or enhance your photos with cutting-edge AI technology.
            </p>
          </motion.div>
          <motion.div variants={item} className="flex gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/create">
                <Wand2 className="w-5 h-5 animate-pulse" />
                Create Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            {/* <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-primary/50 text-primary hover:bg-primary/10"
            >
              <Link href="/explore">
                Explore Features
              </Link>
            </Button> */}
          </motion.div>
          {/* Hero Image Placeholder */}
          {/* <motion.div
            variants={item}
            className="mt-12 max-w-4xl mx-auto h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground"
          >
            [Your Stunning AI-Generated Image Here]
          </motion.div> */}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
        />
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:text-white">
              Unleash Your Creativity
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful tools to make your imagination reality
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card p-6 rounded-xl border border-primary/10 hover:border-primary/30 hover:bg-primary/5 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 relative z-10 group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-primary/90 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground relative z-10">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            {/* <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-primary/50 text-primary hover:bg-primary/10"
            >
              <Link href="/features">See All Features</Link>
            </Button> */}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 relative">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 to-transparent -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
        />
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:text-white">
              Plans for Every Creator
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kick off with 10 free generations, then choose your perfect plan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-card p-8 rounded-xl border shadow-lg ${
                  plan.popular
                    ? "border-primary/50 bg-gradient-to-b from-primary/5 to-background scale-105"
                    : "border-primary/10 hover:border-primary/30"
                } relative overflow-hidden transition-all duration-300`}
              >
                {plan.popular && (
                  <motion.span
                    className="absolute top-0 right-0 bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-bl-lg"
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    Top Choice
                  </motion.span>
                )}
                <h3 className="text-2xl font-bold mt-4 text-primary">{plan.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-5xl font-extrabold text-primary/90">${plan.price}</span>
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
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href="/create">Get {plan.name}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 bg-muted/30 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:text-white">
              From Idea to Masterpiece
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple process to spark your creativity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto border border-primary/30 group-hover:bg-primary/30 transition-colors">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-8 -right-6 w-12 h-1 bg-primary/20"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              asChild
              size="lg"
              className="gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
            >
              <Link href="/create">
                <Sparkles className="w-5 h-5" />
                Try It Now
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 relative">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-primary/10 to-transparent -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
        />
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:text-white">
              Got Questions?
            </h2>
            <p className="text-lg text-muted-foreground">
              We’ve got answers to fuel your creativity
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
                className="bg-card p-6 rounded-xl border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-2 text-primary">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-t from-primary/10 via-muted/50 to-background relative overflow-hidden">
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:text-white">
            Bring Your Ideas to Life
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join creators turning their visions into reality with AI magic
          </p>
          <div className="flex gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/create">
                <Sparkles className="w-5 h-5 animate-pulse" />
                Start Creating
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-primary/50 text-primary hover:bg-primary/10"
            >
              <Link href="/signup">Sign Up Free</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Image Generation",
    description: "Turn your wildest ideas into breathtaking visuals with AI power",
    icon: Wand2,
  },
  {
    title: "Photo Editing",
    description: "Perfect your images with intuitive, AI-driven enhancements",
    icon: ImageIcon,
  },
  {
    title: "Conversation History",
    description: "Keep your edits flowing with seamless context tracking",
    icon: MessageSquare,
  },
  {
    title: "Quick Downloads",
    description: "Get your high-res creations instantly, ready to share",
    icon: Download,
  },
  {
    title: "Blazing Speed",
    description: "Fast results that keep up with your creative spark",
    icon: Zap,
  },
  {
    title: "Fine-Tuned Control",
    description: "Shape your art with precision and ease",
    icon: Sparkles,
  },
];

const steps = [
  {
    title: "Share Your Idea",
    description: "Describe what you want to create or edit in your own words",
  },
  {
    title: "AI Works Its Magic",
    description: "Watch as AI brings your vision to life in seconds",
  },
  {
    title: "Polish & Save",
    description: "Refine your creation and download it instantly",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "9.99",
    features: [
      "50 generations per month",
      "Basic editing tools",
      "Standard speed",
      "Community support",
      "Standard quality downloads",
    ],
    popular: false,
  },
  {
    name: "Creator",
    price: "19.99",
    features: [
      "150 generations per month",
      "Advanced editing tools",
      "Priority speed",
      "Email support",
      "High-quality downloads",
      "Commercial use",
    ],
    popular: true,
  },
  {
    name: "Pro",
    price: "49.99",
    features: [
      "Unlimited generations",
      "Premium editing features",
      "Fastest speed",
      "24/7 support",
      "Custom API access",
      "Team tools",
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: "What’s in the free trial?",
    answer: "10 free generations to create or edit images—no commitment needed.",
  },
  {
    question: "Can I use my creations commercially?",
    answer: "Yes, Creator and Pro plans include commercial rights; Starter is for personal use.",
  },
  {
    question: "How do generation limits work?",
    answer: "They reset monthly—plenty of chances to create each month.",
  },
  {
    question: "Can I switch plans?",
    answer: "Sure, change anytime; your new plan starts next billing cycle.",
  },
];




// "use client";

// import { motion } from "framer-motion";
// import { Wand2, Image as ImageIcon, ArrowRight, Sparkles, MessageSquare, Download, Zap, Check } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 },
// };

// export default function Home() {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative py-20 px-4 overflow-hidden">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.1 }}
//           className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 dark:from-primary/10 dark:to-primary/5"
//         />
//         <motion.div
//           className="max-w-5xl mx-auto text-center relative z-10"
//           variants={container}
//           initial="hidden"
//           animate="show"
//         >
//           <motion.div variants={item}>
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
//               Transform Your Ideas Into Art
//             </h1>
//           </motion.div>
//           <motion.div variants={item}>
//             <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
//               Create stunning images with AI or enhance your existing photos using
//               Google DeepMind Gemini 2.0 technology. Experience the future of image generation.
//             </p>
//           </motion.div>
//           <motion.div variants={item} className="flex gap-4 justify-center">
//             <Button asChild size="lg" className="gap-2">
//               <Link href="/create">
//                 <Wand2 className="w-5 h-5" />
//                 Start Creating
//                 <ArrowRight className="w-5 h-5" />
//               </Link>
//             </Button>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-4 bg-muted/50">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Powerful Features
//             </h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Everything you need to bring your creative vision to life with the power of AI
//             </p>
//           </motion.div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300"
//               >
//                 <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
//                   <feature.icon className="w-6 h-6 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-muted-foreground">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Simple, Transparent Pricing
//             </h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Start with 10 free generations. Choose the plan that works best for you.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {pricingPlans.map((plan, index) => (
//               <motion.div
//                 key={plan.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className={`bg-card p-8 rounded-lg border ${
//                   plan.popular ? "border-primary shadow-lg" : ""
//                 }`}
//               >
//                 {plan.popular && (
//                   <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
//                     Most Popular
//                   </span>
//                 )}
//                 <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
//                 <div className="mt-4 mb-6">
//                   <span className="text-4xl font-bold">${plan.price}</span>
//                   <span className="text-muted-foreground">/month</span>
//                 </div>
//                 <ul className="space-y-4 mb-8">
//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex items-center gap-2">
//                       <Check className="w-5 h-5 text-primary flex-shrink-0" />
//                       <span className="text-muted-foreground">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <Button
//                   className="w-full"
//                   variant={plan.popular ? "default" : "outline"}
//                   asChild
//                 >
//                   <Link href="/create">Choose {plan.name}</Link>
//                 </Button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="py-20 px-4 bg-muted/50">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               How It Works
//             </h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Get started in minutes with our simple workflow
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {steps.map((step, index) => (
//               <motion.div
//                 key={step.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="text-center"
//               >
//                 <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
//                   <span className="text-2xl font-bold text-primary">{index + 1}</span>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
//                 <p className="text-muted-foreground">{step.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-muted-foreground">
//               Everything you need to know about our services
//             </p>
//           </motion.div>

//           <div className="space-y-6">
//             {faqs.map((faq, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-card p-6 rounded-lg border"
//               >
//                 <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
//                 <p className="text-muted-foreground">{faq.answer}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 bg-muted/50">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="max-w-4xl mx-auto text-center"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Ready to Create Something Amazing?
//           </h2>
//           <p className="text-muted-foreground mb-8">
//             Join thousands of creators using Gemini Studio to bring their ideas to life
//           </p>
//           <Button asChild size="lg" className="gap-2">
//             <Link href="/create">
//               <Sparkles className="w-5 h-5" />
//               Start Creating Now
//               <ArrowRight className="w-5 h-5" />
//             </Link>
//           </Button>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// const features = [
//   {
//     title: "AI Image Generation",
//     description: "Create unique, high-quality images from detailed text descriptions using advanced AI",
//     icon: Wand2,
//   },
//   {
//     title: "Smart Image Editing",
//     description: "Edit and enhance your photos with natural language instructions and AI assistance",
//     icon: ImageIcon,
//   },
//   {
//     title: "Conversation History",
//     description: "Keep track of your edits and maintain context for perfect iterative refinements",
//     icon: MessageSquare,
//   },
//   {
//     title: "Easy Downloads",
//     description: "Download your creations instantly in high resolution for immediate use",
//     icon: Download,
//   },
//   {
//     title: "Lightning Fast",
//     description: "Powered by Google's Gemini 2.0 Flash for rapid image generation and editing",
//     icon: Zap,
//   },
//   {
//     title: "Advanced Controls",
//     description: "Fine-tune your creations with precise control over the generation process",
//     icon: Sparkles,
//   },
// ];

// const steps = [
//   {
//     title: "Describe Your Vision",
//     description: "Write a detailed description of the image you want to create or how you want to edit an existing one",
//   },
//   {
//     title: "AI Generation",
//     description: "Our AI instantly processes your request and generates high-quality results",
//   },
//   {
//     title: "Refine & Download",
//     description: "Make adjustments through natural conversation and download your final creation",
//   },
// ];

// const pricingPlans = [
//   {
//     name: "Basic",
//     price: "9.99",
//     features: [
//       "50 generations per month",
//       "Basic editing features",
//       "Standard response time",
//       "Community support",
//       "Download in standard quality"
//     ],
//     popular: false
//   },
//   {
//     name: "Pro",
//     price: "19.99",
//     features: [
//       "150 generations per month",
//       "Advanced editing features",
//       "Priority processing",
//       "Email support",
//       "Download in high quality",
//       "Commercial usage rights"
//     ],
//     popular: true
//   },
//   {
//     name: "Enterprise",
//     price: "49.99",
//     features: [
//       "Unlimited generations",
//       "Premium editing features",
//       "Fastest processing",
//       "24/7 priority support",
//       "Custom API access",
//       "Team collaboration tools"
//     ],
//     popular: false
//   }
// ];

// const faqs = [
//   {
//     question: "What is included in the free trial?",
//     answer: "You get 10 free image generations to start. This includes both creating new images and editing existing ones."
//   },
//   {
//     question: "Can I use the generated images commercially?",
//     answer: "Commercial usage rights are included in the Pro and Enterprise plans. The Basic plan is for personal use only."
//   },
//   {
//     question: "How does the generation limit work?",
//     answer: "Generation limits reset monthly. Unused generations don't roll over to the next month."
//   },
//   {
//     question: "Can I upgrade or downgrade my plan?",
//     answer: "Yes, you can change your plan at any time. Changes take effect at the start of your next billing cycle."
//   }
// ];