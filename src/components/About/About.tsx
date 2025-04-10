import IconCarousel from "@/components/About/SkilsCarosuel";

export function About() {
  const aboutMessage = [
    `Hello my name is Ahmed Calif, I am a Full Stack Web Developer based in Vancouver. 
        I excel in developing profitable and scalable applications.`,
    `With over 2 years of experience in web development, I create elegant solutions
        that combine modern design with robust functionality.`,
    `I'm passionate about building user-centric experiences and continuously expanding
        my technical expertise to deliver cutting-edge applications.`,
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
