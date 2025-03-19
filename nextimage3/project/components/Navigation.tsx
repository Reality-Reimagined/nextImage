"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
// import { Menu } from "lucide-react";
import { Wand2, Image as ImageIcon, Home, User, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Create",
    href: "/create",
    icon: Wand2,
  },
  // {
  //   name: "Gallery",
  //   href: "/gallery",
  //   icon: ImageIcon,
  // },
  {
    name: "Profile",
    href: "/profile",
    icon: User,
  },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Link href="/" className="flex items-center">
              <svg width="150" height="40" viewBox="0 0 200 60" className="mr-2">
                <g fill="url(#gradient)">
                  <rect x="10" y="50" width="5" height="5" rx="1" opacity="0.8">
                    <animate attributeName="opacity" values="0;0.8;0" dur="3s" repeatCount="indefinite" />
                  </rect>
                  <rect x="20" y="50" width="5" height="5" rx="1" opacity="0.8">
                    <animate attributeName="opacity" values="0;0.8;0" dur="3s" begin="0.2s" repeatCount="indefinite" />
                  </rect>
                  <rect x="30" y="50" width="5" height="5" rx="1" opacity="0.8">
                    <animate attributeName="opacity" values="0;0.8;0" dur="3s" begin="0.4s" repeatCount="indefinite" />
                  </rect>
                </g>
                <text x="10" y="40" fontFamily="Inter, sans-serif" fontSize="40" fontWeight="bold" fill="currentColor">
                  MOS
                  <tspan fill="url(#gradient)" dx="5" className="animate-pulse">
                    AI
                  </tspan>
                  <tspan dx="5">C</tspan>
                </text>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#1e40af", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#9333ea", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-6"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary relative py-2",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      layoutId="navbar-active"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
            <ThemeToggle />
          </motion.div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary p-2 rounded-md",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground"
                        )}
                      >
                        <Icon className="w-5 h-5" />
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

// // Assuming these are imported elsewhere or defined in your project
// const Home = () => <></>; // Placeholder to avoid undefined errors
// const Wand2 = () => <></>;
// const ImageIcon = () => <></>;
// const User = () => <></>;



// "use client";

// import * as React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";
// import { Wand2, Image as ImageIcon, Home, User, Menu } from "lucide-react";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { ThemeToggle } from "./ThemeToggle";
// import { Button } from "./ui/button";

// const navItems = [
//   {
//     name: "Home",
//     href: "/",
//     icon: Home,
//   },
//   {
//     name: "Create",
//     href: "/create",
//     icon: Wand2,
//   },
//   {
//     name: "Gallery",
//     href: "/gallery",
//     icon: ImageIcon,
//   },
//   {
//     name: "Profile",
//     href: "/profile",
//     icon: User,
//   },
// ];

// export function Navigation() {
//   const pathname = usePathname();

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
//       <div className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="flex items-center gap-2"
//           >
//             <Wand2 className="w-6 h-6 text-primary" />
//             <span className="font-semibold text-lg">Mosaic Studio</span>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hidden md:flex items-center gap-6"
//           >
//             {navItems.map((item) => {
//               const isActive = pathname === item.href;
//               const Icon = item.icon;

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={cn(
//                     "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary relative py-2",
//                     isActive ? "text-primary" : "text-muted-foreground"
//                   )}
//                 >
//                   <Icon className="w-4 h-4" />
//                   {item.name}
//                   {isActive && (
//                     <motion.div
//                       className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
//                       layoutId="navbar-active"
//                       transition={{
//                         type: "spring",
//                         stiffness: 380,
//                         damping: 30,
//                       }}
//                     />
//                   )}
//                 </Link>
//               );
//             })}
//             <ThemeToggle />
//           </motion.div>

//           <div className="md:hidden flex items-center gap-2">
//             <ThemeToggle />
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <Menu className="h-6 w-6" />
//                   <span className="sr-only">Open menu</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-[300px] sm:w-[400px]">
//                 <nav className="flex flex-col gap-4">
//                   {navItems.map((item) => {
//                     const isActive = pathname === item.href;
//                     const Icon = item.icon;

//                     return (
//                       <Link
//                         key={item.href}
//                         href={item.href}
//                         className={cn(
//                           "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary p-2 rounded-md",
//                           isActive
//                             ? "bg-primary/10 text-primary"
//                             : "text-muted-foreground"
//                         )}
//                       >
//                         <Icon className="w-5 h-5" />
//                         {item.name}
//                       </Link>
//                     );
//                   })}
//                 </nav>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }