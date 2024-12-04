import { ICardProject } from "./constant";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from React Icons

function CardProject({
  desc,
  name,
  image,
  techStack,
  githubLink,
  liveDemo,
}: ICardProject) {
  return (
    <div
      key={name}
      className="rounded-md group/item p-4 hover:bg-zinc-500/10 hover:scale-105 transform transition duration-300 ease-in-out"
    >
      <img
        src={image}
        alt="portfolio"
        width={1280}
        height={720}
        className="object-contain w-auto"
      />
      <p className="font-bold text-lg py-1 group-hover/item:text-emerald-400 text-white">
        {name}
      </p>
      <p className="py-2">{desc}</p>
      <div className="flex flex-wrap">
        {techStack.map((card) => (
          <div
            key={card}
            className="rounded-full m-2 md:m-1 bg-slate-600/20 text-emerald-400 p-1 px-2 text-sm"
          >
            {card}
          </div>
        ))}
      </div>
      <div className="flex justify-start items-center gap-4 mt-4">
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-emerald-400 text-white"
        >
          {liveDemo && (
            <>
              <span className="mr-2">🌐</span>
              <span>Live Demo</span>
            </>
          )}
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-emerald-400 text-white"
        >
          {githubLink && (
            <>
              <FaGithub className="mr-2" />
              <span>View on GitHub</span>
            </>
          )}
        </a>
      </div>
    </div>
  );
}

export default CardProject;
