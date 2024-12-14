import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "docker",
  "git",
  "github",
  "gitlab",
  "figma",
];

export function Skills() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  bg-slate-950 px-8 pb-20 pt-2 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
