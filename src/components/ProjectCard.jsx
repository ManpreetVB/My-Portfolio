import { FaStar, FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

export function ProjectCard({ repo }) {
  return (
    <div className="neo-brutal-border p-6 bg-white hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform">
      <div className="flex justify-between items-start mb-4 border-b-2 border-black pb-3">
        <h3 className="font-mono text-xl font-bold truncate">{repo.name}</h3>
        <div className="flex items-center gap-1 text-sm font-bold">
          <FaStar className="text-yellow-500" />
          {repo.stargazers_count}
        </div>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-3">
        {repo.description || 'No description provided.'}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {repo.language && (
          <span className="border-2 border-black px-2 py-1 text-xs font-bold flex items-center gap-1">
            <FaCode /> {repo.language}
          </span>
        )}
        {repo.topics?.slice(0, 2).map(topic => (
          <span key={topic} className="bg-gray-200 px-2 py-1 text-xs font-bold">
            #{topic}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex-1">
          <button className="neo-brutal-button w-full flex items-center justify-center gap-2 text-sm">
            <FaGithub /> CODE
          </button>
        </a>
        {repo.homepage && (
          <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="flex-1">
            <button className="neo-brutal-button w-full flex items-center justify-center gap-2 text-sm bg-green-400">
              <FaExternalLinkAlt /> DEMO
            </button>
          </a>
        )}
      </div>
    </div>
  );
}