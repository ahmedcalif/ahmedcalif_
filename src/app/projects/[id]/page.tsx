// app/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ChevronLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Params {
  params: {
    id: string;
  };
}

export default async function ProjectDetails({ params }: Params) {
  const projectParams = await params;
  const project = await projects.find(
    (p) => p.id.toString() === projectParams.id
  );

  if (!project) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Button variant="outline" size="sm" asChild>
            <a href="/#projects" className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Project Gallery */}
          <div className="lg:order-2 space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="relative h-64 md:h-96 w-full flex items-center justify-center p-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-contain max-h-full max-w-full"
                  priority
                />
              </div>
            </div>

            {project.images && project.images.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {project.images.map((img, index) => (
                  <div
                    key={index}
                    className="aspect-square overflow-hidden rounded border border-gray-200 dark:border-gray-700"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="lg:order-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {project.description}
            </p>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md px-3 py-1 text-sm"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              {project.github && (
                <Button variant="outline" size="lg" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    View Code
                  </a>
                </Button>
              )}
              {project.link && project.link !== "#" && (
                <Button size="lg" asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    {project.link === "/in-progress"
                      ? "Coming Soon"
                      : "Live Demo"}
                  </a>
                </Button>
              )}
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold mb-2">Project Overview</h3>
              <p>{project.details}</p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {project.lessons && project.lessons.length > 0 && (
          <Card className="mb-16">
            <CardHeader>
              <CardTitle>Lessons Learned</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.lessons.map((lesson, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Testimonial Section (placeholder - add real testimonials if available) */}
        <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle>What People Say</CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="italic text-gray-600 dark:text-gray-300">
              "This project demonstrates excellent problem-solving skills and
              attention to detail. The implementation shows deep understanding
              of both technical and user experience considerations."
            </blockquote>
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              — Project Stakeholder
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
