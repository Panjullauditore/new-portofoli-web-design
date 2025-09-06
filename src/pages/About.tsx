import FloatingCard from '@/components/react-bits/FloatingCard';
import AnimatedButton from '@/components/react-bits/AnimatedButton';
import SplitText from '@/components/react-bits/SplitText';
import GradientText from '@/components/react-bits/GradientText';
import AnimatedCounter from '@/components/react-bits/AnimatedCounter';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Rocket, Heart, Play, Pause, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { useSpotifyPlayer } from '@/hooks/useSpotifyPlayer';

const About = () => {
  const { 
    playingId, 
    currentTime, 
    duration, 
    isLoading, 
    playTrack, 
    pauseTrack,
    seekTo 
  } = useSpotifyPlayer();

  const skills = [
    "React", "TypeScript", "Node.js", "JavaScript", "HTML/CSS", "Laravel",
    "Next.js", "TailwindCSS", "PHP", "Python", "Figma", "MySQL", 
  ];

  const interests = [
    { icon: Code, title: "Full-Stack Development", description: "Building scalable web applications with modern technologies" },
    { icon: Rocket, title: "Frontend Technologies", description: "Creating responsive and interactive user interfaces" },
    { icon: Palette, title: "UI/UX Design", description: "Designing beautiful and intuitive user experiences" },
    { icon: Heart, title: "Music & Creativity", description: "Finding inspiration through music and creative expression" }
  ];

  const songs = [
    {
      id: "0uxSUdBrJy9Un0EYoBowng",
      title: "20 Min",
      artist: "Lil Uzi Vert",
      duration: "3:41",
      color: "from-purple-600 to-purple-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/0uxSUdBrJy9Un0EYoBowng?si=aa2af6e690794505",
      spotifyEmbed: "https://open.spotify.com/embed/track/0uxSUdBrJy9Un0EYoBowng", 
      albumArt: "https://i.scdn.co/image/ab67616d0000b273400b690ac915aa2bb4e0fa8a",
    },
    {
      id: "4cBm8rv2B5BJWU2pDaHVbF",
      title: "Headshot",
      artist: "Ardy Minaj",
      duration: "2:05",
      color: "from-red-600 to-red-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/56BG3JPRrvRFLsnk4DvOg4?si=77ee81e286a44595",
      spotifyEmbed: "https://open.spotify.com/embed/track/56BG3JPRrvRFLsnk4DvOg4?utm_source=oembed", 
      albumArt: "https://i.scdn.co/image/ab67616d0000b273b024bb5b39e3bad5fbe7acb6",
    },
    {
      id: "278PwGlIm7MxVTZud18Rx4",
      title: "mejikuhibuniu",
      artist: "Tenxi, Suise, Jemsi",
      duration: "3:16",
      color: "from-gray-600 to-gray-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/278PwGlIm7MxVTZud18Rx4?si=bea1d2f7d32b4d25",
      spotifyEmbed: "https://open.spotify.com/embed/track/278PwGlIm7MxVTZud18Rx4", 
      albumArt: "https://i.scdn.co/image/ab67616d0000b273c6bf39cbfbfdbfe5aa966f7c",
    },
    {
      id: "68qeaZhtMZ6abrJCYt6nQn",
      title: "RATHER LIE",
      artist: "Playboi Carti, The Weeknd",
      duration: "3:29",
      color: "from-blue-600 to-blue-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/68qeaZhtMZ6abrJCYt6nQn?si=da3fd434a70941f1",
      spotifyEmbed: "https://open.spotify.com/embed/track/68qeaZhtMZ6abrJCYt6nQn", 
      albumArt: "https://i.scdn.co/image/ab67616d0000b273c4b094b56f4efed020847129",
    },
    {
      id: "40tAi41702KbnQcWQjSPwZ",
      title: "main-main!",
      artist: "RYO, Josua Natanael",
      duration: "2:08",
      color: "from-green-600 to-green-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/40tAi41702KbnQcWQjSPwZ?si=c2a4f970193442a0",
      spotifyEmbed: "https://open.spotify.com/embed/track/40tAi41702KbnQcWQjSPwZ", 
      albumArt: "https://i.scdn.co/image/ab67616d0000b273b2e8e1f4b3e9b8f1a3c4d5e6",
    },
    {
      id: "2hXPmiqKdXcbV0L1VKnTDN",
      title: "最高到達点",
      artist: "Sekai no Owari",
      duration: "3:47",
      color: "from-yellow-600 to-yellow-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/2hXPmiqKdXcbV0L1VKnTDN?si=e6583f7862c04ec8",
      spotifyEmbed: "https://open.spotify.com/embed/track/2hXPmiqKdXcbV0L1VKnTDN", 
      albumArt: "https://i.scdn.co/image/ab67616d0000b2737e9c6c1b9b7e1f2a3e8d9c0b",
    },
    {
      id: "1CsJzYjEbcbaQCBxg5iOCv",
      title: "With U",
      artist: "Napking",
      duration: "2:47",
      color: "from-teal-600 to-teal-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/1CsJzYjEbcbaQCBxg5iOCv?si=d6efe6806c194823",
      spotifyEmbed: "https://open.spotify.com/embed/track/1CsJzYjEbcbaQCBxg5iOCv", 
      albumArt: "https://i.scdn.co/image/ab67616d0000b273f1e2d3c4b5a6e7f8g9h0i1j2",
    },
    {
      id: "0KifLRxrBPUPwpNcJmtCiG",
      title: "Sorry",
      artist: "Napking",
      duration: "3:11",
      color: "from-pink-600 to-pink-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/0KifLRxrBPUPwpNcJmtCiG?si=ace3c2915d8a4964",
      spotifyEmbed: "https://open.spotify.com/embed/track/0KifLRxrBPUPwpNcJmtCiG", 
      albumArt: "https://i.scdn.co/image/ab67616d0000b273k2l3m4n5o6p7q8r9s0t1u2v3",
    },
    {
      id: "0FIDCNYYjNvPVimz5icugS",
      title: "Timeless",
      artist: "The Weeknd, Playboi Carti",
      duration: "4:16",
      color: "from-indigo-600 to-indigo-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/0FIDCNYYjNvPVimz5icugS?si=14d4448c2fec4d41",
      spotifyEmbed: "https://open.spotify.com/embed/track/0FIDCNYYjNvPVimz5icugS", 
      albumArt: "https://i.scdn.co/image/ab67616d0000b273w3x4y5z6a7b8c9d0e1f2g3h4",
    },
    {
      id: "12VH4g5pTMZmrUVzfJq7F7",
      title: "M a k e I t T o T h e M o r n i n g",
      artist: "PARTYNEXTDOOR",
      duration: "2:48",
      color: "from-orange-600 to-orange-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/12VH4g5pTMZmrUVzfJq7F7?si=3544ea57487745db",
      spotifyEmbed: "https://open.spotify.com/embed/track/12VH4g5pTMZmrUVzfJq7F7", 
      albumArt: "https://i.scdn.co/image/ab67616d0000b273i4j5k6l7m8n9o0p1q2r3s4t5",
    }
  ];

  // Helper functions for the music player
  const handlePlayPause = (song) => {
    if (playingId === song.id) {
      pauseTrack();
    } else {
      playTrack(song.id, song.spotifyUrl);
    }
  };

  const getProgressPercentage = () => {
    if (duration === 0) return 0;
    return (currentTime / duration) * 100;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                <GradientText tag="h1" animate={true}>
                  <SplitText text="About Me" splitType="chars" delay={80} />
                </GradientText>
              </h1>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              {/* Profile Section */}
              <div className="lg:col-span-1">
                <FloatingCard className="p-6 backdrop-blur-sm" glowEffect={true} tiltEffect={true}>
                  <div className="text-center">
                    {/* Profile Image */}
                    <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden border border-gray-800/20">
                      <img 
                        src="/images/foto-gw.jpg" 
                        alt="Profile Picture"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-2">
                      <SplitText text="Ahmad Fahrezi" splitType="chars" delay={60} />
                    </h2>
                    <p className="text-gray-400 mb-4">
                      <SplitText text="Informatics Students" splitType="words" delay={100} />
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex justify-center gap-2 mb-6">
                      <AnimatedButton variant="ghost" size="sm" asChild>
                        <a href="https://github.com/Panjullauditore" target="_blank" rel="noopener noreferrer" className="rounded-full hover:bg-primary/10">
                          <Github className="h-4 w-4" />
                        </a>
                      </AnimatedButton>
                      <AnimatedButton variant="ghost" size="sm" asChild>
                        <a href="https://www.linkedin.com/in/ahmadfahrezi7/" target="_blank" rel="noopener noreferrer" className="rounded-full hover:bg-primary/10">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </AnimatedButton>
                      <AnimatedButton variant="ghost" size="sm" asChild>
                        <a href="mailto:ahmadfahrezir@gmail.com" className="rounded-full hover:bg-primary/10">
                          <Mail className="h-4 w-4" />
                        </a>
                      </AnimatedButton>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed">
                      Email me for any inquiries at ahmadfahrezir@gmail.com
                    </p>
                  </div>
                </FloatingCard>
              </div>

              {/* Description & Interests */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    Hi, you can call me Rezi. I'm a passionate Informatics student who loves creating 
                    beautiful web applications and learning new technologies. When I'm not coding, you'll 
                    find me listening to music or exploring creative projects.
                  </p>
                   <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    I'm very active on social media, having built a strong presence documenting my projects 
                    and sharing tech-related information. I love building things that are related to web 
                    development and modern technologies.
                  </p>
                </div>

                {/* Interests Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <FloatingCard 
                      key={interest.title} 
                      className="p-4"
                      glowEffect={true}
                      tiltEffect={true}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                          <interest.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                            <SplitText text={interest.title} splitType="words" delay={50} />
                          </h3>
                          <p className="text-gray-400 text-xs leading-relaxed">
                            {interest.description}
                          </p>
                        </div>
                      </div>
                    </FloatingCard>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <FloatingCard className="p-8 animate-fade-in mb-16" glowEffect={true}>
              <h3 className="text-2xl font-bold mb-6 text-center">
                <GradientText gradient="from-blue-400 to-blue-500" animate={true}>
                  <SplitText text="Skills & Technologies" splitType="words" delay={80} />
                </GradientText>
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium bg-transparent border border-gray-600/30 text-gray-300 hover:bg-primary/10 hover:border-primary/50 hover:text-primary hover:scale-110 hover:rotate-1 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 cursor-pointer animate-scale-in group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span className="group-hover:animate-pulse">{skill}</span>
                  </Badge>
                ))}
              </div>
            </FloatingCard>

            {/* My Favorite Songs */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-center">
                <GradientText animate={true}>
                  <SplitText text="My Favorite Songs" splitType="words" delay={100} />
                </GradientText>
              </h3>
              <p className="text-center text-gray-400 mb-8">
                <SplitText 
                  text="When I step away from coding, music becomes my sanctuary. My playlist ranges from aespa, Le Sserafim, ILLIT, Hearts2Hearts, and NewJeans to Kendrick Lamar, Young Thug, and much more - each artist bringing a different energy to my creative process."
                  splitType="words"
                  delay={30}
                />
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {songs.map((song, index) => (
                  <div 
                    key={song.id} 
                    className="overflow-hidden rounded-lg"
                  >
                    {/* Spotify Embed */}
                    <iframe
                      src={song.spotifyEmbed}
                      width="100%"
                      height="80"
                      frameBorder="0"
                      allow="encrypted-media"
                      title={`Spotify player for ${song.title}`}
                      className="rounded-lg"
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
