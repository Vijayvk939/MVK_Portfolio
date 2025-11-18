import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Dashboard } from "@/components/dashboard";
import { WorkExperience } from "@/components/work-experience";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Dashboard />
        <WorkExperience />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
