import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "@/utils/path";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-xl shadow-lg border border-[#2A0E61] bg-[#07021a]/60 backdrop-blur-md hover:border-[#7042F8bb] hover:shadow-[0_0_30px_rgba(112,66,248,0.25)] transition-all duration-300 group flex flex-col"
    >
      <div className="relative w-full aspect-video overflow-hidden bg-[#0c0524] border-b border-[#2A0E61]/60">
        <Image
          src={getAssetPath(src)}
          alt={title}
          width={1280}
          height={720}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="relative p-5 flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold text-white group-hover:text-[#c4a9ff] transition-colors">
            {title}
          </h1>
          <p className="mt-2.5 text-[14px] text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};
