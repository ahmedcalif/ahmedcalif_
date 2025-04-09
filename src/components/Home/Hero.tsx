import React, { useState, useEffect, JSX } from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Code to display
  const codeLines: string[] = [
    "import { useState, useEffect } from 'react';",
    "import { motion } from 'framer-motion';",
    "",
    "const Portfolio = () => {",
    "  const [projects, setProjects] = useState([]);",
    "  ",
    "  useEffect(() => {",
    "    // Fetch portfolio data",
    "    fetchProjects().then(data => setProjects(data));",
    "  }, []);",
    "",
    '  return "<Ahmed.Projects />";', // Using quotes to avoid TS errors
    "};",
  ];

  // Typing animation effect
  useEffect(() => {
    if (!isVisible) {
      setIsVisible(true);
      return;
    }

    if (currentLineIndex < codeLines.length) {
      const currentLine = codeLines[currentLineIndex];

      if (currentCharIndex < currentLine.length) {
        const timer = setTimeout(() => {
          setText((prev) => prev + currentLine[currentCharIndex]);
          setCurrentCharIndex(currentCharIndex + 1);
        }, 25);

        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setText((prev) => prev + "\n");
          setCurrentLineIndex(currentLineIndex + 1);
          setCurrentCharIndex(0);
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [currentLineIndex, currentCharIndex, isVisible, codeLines]);

  const applyCodeHighlighting = (code: string): JSX.Element => {
    const highlightedCode = code
      .replace(
        /import|export|from|const|let|var|return|function/g,
        (match) => `<span class="text-purple-400">${match}</span>`
      )
      .replace(
        /useState|useEffect/g,
        (match) => `<span class="text-yellow-400">${match}</span>`
      )
      .replace(
        /'[^']*'/g,
        (match) => `<span class="text-green-400">${match}</span>`
      )
      .replace(
        /\/\/.*/g,
        (match) => `<span class="text-gray-500">${match}</span>`
      )
      .replace(
        /\{|\}|\[|\]|\(|\)/g,
        (match) => `<span class="text-gray-300">${match}</span>`
      )
      .replace(
        /Ahmed\.Projects/g,
        (match) => `<span class="text-blue-400">${match}</span>`
      );

    return <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />;
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <div className="container mx-auto px-6 md:px-12 py-24">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome</h1>
              <p className="text-xl text-gray-600 max-w-lg">
                I&apos;m a passionate developer focused on creating clean,
                efficient, and user-friendly digital experiences.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                  View Projects
                </button>
                <button className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full max-w-md bg-gray-900 rounded-lg shadow-xl overflow-hidden"
            >
              <div className="h-6 bg-gray-800 flex items-center px-2">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-1.5"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1.5"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <pre className="p-4 text-xs font-mono overflow-hidden h-80 text-gray-300">
                {applyCodeHighlighting(text)}
                <span className="animate-pulse">|</span>
              </pre>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
