import { FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

export function Hero({ profile }) {
  if (!profile) return null;

  return (
    <section className="border-b-4 border-black bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Avatar */}
          <div className="relative">
            <div className="w-48 h-48 border-4 border-black bg-white overflow-hidden">
              <img 
                src={profile.avatar_url} 
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 w-48 h-48 bg-green-400 border-4 border-black -z-10"></div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <div className="inline-block bg-black text-white px-4 py-2 mb-4 font-mono font-bold text-sm">
             Manpreet Kour
            </div>

            <h1 className="text-5xl font-black mb-4 uppercase">{profile.name}</h1>

            <p className="text-xl font-mono mb-6 border-l-4 border-green-400 pl-4">
              {profile.bio || 'Full Stack Developer'}
            </p>

            <div className="flex flex-wrap gap-4 mb-8 font-mono text-sm font-bold">
              {profile.location && (
                <div className="border-2 border-black px-3 py-1 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-green-400" />
                  {profile.location}
                </div>
              )}
              <div className="border-2 border-black px-3 py-1">
                REPOS: {profile.public_repos}
              </div>
            </div>

            <div className="flex gap-4">
              <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
                <button className="neo-brutal-button flex items-center gap-2">
                  <FaGithub /> GITHUB PROFILE
                </button>
              </a>
              <a href="#projects">
                <button className="neo-brutal-button ">
                  VIEW PROJECTS
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

     
     {/* Marquee */}
<div className="bg-green-400 text-black border-t-4 border-black py-2 overflow-hidden mt-10">
  <div className="relative flex overflow-hidden">
    <div className="animate-marquee whitespace-nowrap font-mono font-bold flex">
      <span className="mx-4">
        REACT • C# • .NET • JAVASCRIPT • SQL • WEB API • FRONTEND • BACKEND • FULL STACK •
      </span>
      <span className="mx-4">
        REACT • C# • .NET • JAVASCRIPT • SQL • WEB API • FRONTEND • BACKEND • FULL STACK •
      </span>
    </div>
  </div>
</div>

    </section>
  );
}