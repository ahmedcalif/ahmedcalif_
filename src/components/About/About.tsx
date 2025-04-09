import SkillsGallery from "@/components/About/SkilsGallery"; // Import the SkillsGallery component

export function About() {
  const aboutMessage = [
    `Hello my name is Ahmed Calif, I am a Full Stack Web Developer based in Vancouver. 
        I excel in developing profitable and scalable applications.`,
    `With over 2 years of experience in web development, I create elegant solutions
        that combine modern design with robust functionality.`,
    `I'm passionate about building user-centric experiences and continuously expanding
        my technical expertise to deliver cutting-edge applications.`,
  ];

  // Images for the gallery - coding-related images
  const skillImages: string[] = [
    "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop", // React
    "https://images.unsplash.com/photo-1599069692562-9539b6b2a73f?q=80&w=1948&auto=format&fit=crop", // Next.js
    "https://images.unsplash.com/photo-1598425237654-4fc758e50a93?q=80&w=2069&auto=format&fit=crop", // TypeScript
    "https://images.unsplash.com/photo-1673748639541-fc1a7d432232?q=80&w=2070&auto=format&fit=crop", // Node.js
    "https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=2069&auto=format&fit=crop", // Tailwind CSS
    "https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=2070&auto=format&fit=crop", // JavaScript
    "https://images.unsplash.com/photo-1597239451147-f163438ada6f?q=80&w=2034&auto=format&fit=crop", // HTML/CSS
    "https://images.unsplash.com/photo-1629904853893-c2c8c2417d1c?q=80&w=2070&auto=format&fit=crop", // Git
    "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=2070&auto=format&fit=crop", // Docker
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
            <SkillsGallery
              autoplay={true}
              pauseOnHover={true}
              images={skillImages}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
