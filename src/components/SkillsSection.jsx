import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Tools (Backend removed)
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "VS Code", level: 75, category: "tools" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "frontend", "tools"]; // Backend removed

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full border text-sm transition-all",
                activeCategory === category
                  ? "bg-primary text-white border-primary"
                  : "border-gray-500 text-gray-300 hover:bg-gray-700"
              )}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="p-6 rounded-xl bg-secondary/40 border border-white/10 backdrop-blur-md"
            >
              {/* Skill Name */}
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-primary"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Percent Label */}
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
