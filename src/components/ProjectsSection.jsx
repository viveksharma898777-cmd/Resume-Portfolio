
import React from "react";
import { ArrowRight } from "lucide-react";


const projects = [
  {
    title: "Cryptoplace",
    description: "A React + Tailwind based crypto tracking UI.",
    image: "/projects/cryptoplace.png",
    link: "#"
  },
  {
    title: "My Resume Portfolio",
    description: "A React + Tailwind based resume portfolio.",
    image: "/projects/resume_project.png",
    link: "#"
  },
  {
    title: "Upcoming",
    description: "More projects coming soon!",
    image: "/projects/upcoming.png",
    link: "#"
  }
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <div key={idx} className="border rounded-lg overflow-hidden shadow-sm">
              <div className="h-40 bg-gray-100 flex items-center justify-center">
                <img src={p.image} alt={p.title} className="object-contain h-full" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm mt-2">{p.description}</p>
                <a href={p.link} className="inline-flex items-center mt-4 text-primary">
                  View project <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
