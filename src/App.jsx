import { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { fetchProfile, fetchRepositories } from './lib/github';
import { FaTerminal } from 'react-icons/fa';

function App() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [profileData, reposData] = await Promise.all([
          fetchProfile(),
          fetchRepositories()
        ]);
        setProfile(profileData);
        setRepos(reposData);
      } catch (error) {
        console.error('Failed to load data', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <FaTerminal className="text-6xl mb-4 mx-auto animate-pulse text-green-400" />
          <h2 className="text-2xl font-mono font-bold">INITIALIZING SYSTEM...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Hero profile={profile} />

      <main id="projects" className="max-w-6xl mx-auto py-20 px-4 w-full">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-12 w-4 bg-green-400 border-2 border-black"></div>
          <h2 className="text-5xl font-black uppercase">Selected Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      </main>

      <footer className="border-t-4 border-black bg-white py-12 mt-auto">
        <div className="max-w-6xl mx-auto text-center px-4">
          <p className="font-mono text-sm mb-4">
            © {new Date().getFullYear()} {profile?.name}. BUILT WITH REACT & GITHUB API.
          </p>
          <div className="inline-block border-2 border-black px-4 py-2 font-bold text-xs uppercase bg-green-400">
            SYSTEM STATUS: ONLINE
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;