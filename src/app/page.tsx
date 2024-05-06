
import HeroComponent from "@/components/HeroComponent";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/skills";
import Projects from "@/components/projects"
export default function Home() {
  return (
        <main className="min-h-screen">
        <HeroComponent /> 
        <WorkExperience />
        <Skills />
        <Projects />
        </main>
  );
}