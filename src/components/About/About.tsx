import IconCarousel from "@/components/About/SkilsCarosuel";

export function About() {
  const aboutMessage = [
    `Hello, my name is Ahmed Calif. I’m an aspiring full-stack developer who recently completed my diploma in web development at BCIT. 
    I’m passionate about creating production-ready web applications that solve real-world problems.`,
    `When I’m not coding, you’ll find me on the basketball court, a passion I’ve had since childhood. Basketball taught me the value of teamwork, patience, and performing under pressure, skills that translate perfectly into web development. `,
    `While I may not be the most naturally gifted player, my love for the game keeps me returning. I bring that same dedication to development. There is nothing quite like creating something that impacts people’s lives. It’s what drives me to keep learning and growing as a developer.`, 
    `Are you looking for a developer who’s passionate about creating impactful solutions? Let’s connect!`
  ];

  const skillImages: string[] = [
    "/react-2.svg",
    "next.svg",
    "typescript.svg",
    "nodejs.svg",
    "tailwind-css-2.svg",
    "css-3.svg",
    "html-1.svg",
    "git-icon.svg",
    "docker-3.svg",
    'C# (CSharp).svg',
    'dotnet-svgrepo-com.svg',
    "php-svg-repo-com.svg",
    "laravel-svgrepo-com.svg"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Ahmed Calif
          </h1>
          <p className="mt-3 text-xl text-gray-500 dark:text-gray-400">
            Full Stack Web Developer
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="space-y-4">
            {aboutMessage.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Technical Skills
          </h2>
          <div>
            <IconCarousel
              autoplay={true}
              autoplaySpeed={2000}
              images={skillImages}
              slidesToShow={5}
              imageSize={180}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
