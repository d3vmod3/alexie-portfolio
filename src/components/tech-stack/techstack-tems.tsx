import Image from "next/image";
import StackIcon from "tech-stack-icons";
import FluxUI from "@/components/ui/logos/flux-ui";
import MSSql from "@/components/ui/logos/microsoft-sql-server-logo-svgrepo-com.svg";
import Livewire from "@/components/ui/logos/livewire.svg";

const TechStackItems = () => {
  const items = [
    { name: "bootstrap5", className: "w-24 h-24" },
    { name: "css3", className: "w-24 h-24" },
    { name: "cypress", className: "w-24 h-24" },
    { name: "docker", className: "w-24 h-24" },
    { name: "figma", className: "w-24 h-24" },
    { name: "git", className: "w-24 h-24" },
    { name: "gsap", className: "w-24 h-24" },
    { name: "html5", className: "w-24 h-24" },
    { name: "js", className: "w-24 h-24" },
    { name: "laravel", className: "w-24 h-24" },
    { name: "nextjs", className: "w-24 h-24" },
    { name: "mysql", className: "w-24 h-24" },
    { name: "postgresql", className: "w-24 h-24" },
    { name: "tailwindcss", className: "w-24 h-24" },
    { name: "typescript", className: "w-24 h-24" },
    { name: "vuejs", className: "w-24 h-24" },
    { name: "wordpress", className: "w-24 h-24" },
  ];

  return (
    <div>
      <div className="grid grid-cols-6 gap-12">
        {items.map((item, index) => (
          <div key={index}>
            <StackIcon name={item.name} className={item.className} />
          </div>
        ))}
        <div>
          <FluxUI />
        </div>
        <div>
          <Image src={MSSql} alt="Logo" width={100} height={100} />
        </div>
        <div>
          <Image src={Livewire} alt="Logo" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default TechStackItems;
