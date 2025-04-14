"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Loader2, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function InProgress() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-black dark:text-white">
      <nav className="w-full bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xl font-bold">Ahmed Calif</span>
            </motion.div>
          </div>
        </div>
      </nav>
      <main className="flex-grow flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg"
        >
          <Card className="border-gray-200 dark:border-gray-800 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <Construction className="h-12 w-12 text-amber-500" />
              </div>
              <CardTitle className="text-2xl">Project In Progress</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400 text-lg">
                This section is currently under development
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="flex justify-center"
              >
                <Loader2 className="h-16 w-16 text-gray-400 dark:text-gray-500 animate-spin" />
              </motion.div>
              <Alert className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900">
                <AlertTitle className="text-blue-800 dark:text-blue-300">
                  Coming Soon!
                </AlertTitle>
                <AlertDescription className="text-blue-700 dark:text-blue-400">
                  I&apos;m working hard to complete this project. Check back
                  soon to see the finished product!
                </AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter className="flex justify-center pt-2 pb-6">
              <Button
                asChild
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90"
              >
                <Link href="/">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to Portfolio
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </main>
      <footer className="py-6 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Ahmed Calif. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
