"use client";

import { ExperienceCard } from "@/src/components/ExperienceCard";

export const ExperienceSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-medium text-primary mb-4">Experience</h2>
      <p className="text-muted-foreground mb-6">
        A snapshot of my professional journey, showcasing my roles and contributions in
        blockchain and full-stack development.
      </p>
      <ExperienceCard />
    </section>
  );
};
