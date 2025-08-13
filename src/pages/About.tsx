import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, Palette, Rocket, Heart, Play, Pause, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const About = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement }>({});

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
      id: 1,
      title: "20 Min",
      artist: "Lil Uzi Vert",
      duration: "3:41",
      color: "from-purple-600 to-purple-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/0uxSUdBrJy9Un0EYoBowng?si=aa2af6e690794505",
      albumArt: "https://i.scdn.co/image/ab67616d0000b273400b690ac915aa2bb4e0fa8a",
      previewUrl: "https://p.scdn.co/mp3-preview/05c463c94fa2c3c0e6b7ce9b11dd45a66ba1423b?cid=774b29d4f13844c495f206cafdad9c86_0"
    },
    {
      id: 2,
      title: "Multo",
      artist: "Cup of Joe",
      duration: "3:57",
      color: "from-red-600 to-red-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/4cBm8rv2B5BJWU2pDaHVbF?si=704c2d9e07544e4b",
      albumArt: "https://i.scdn.co/image/ab67616d0000b273b024bb5b39e3bad5fbe7acb6",
      previewUrl: "https://p.scdn.co/mp3-preview/d3b0e1ba2f9e8daef0cc25bfefac69c2aa1c41c8?cid=774b29d4f13844c495f206cafdad9c86_0"
    },
    {
      id: 3,
      title: "mejikuhibuniu",
      artist: "Tenxi, Suise, Jemsi",
      duration: "3:16",
      color: "from-gray-600 to-gray-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/278PwGlIm7MxVTZud18Rx4?si=bea1d2f7d32b4d25",
      albumArt: "https://i.scdn.co/image/ab67616d0000b273c6bf39cbfbfdbfe5aa966f7c",
      previewUrl: "https://p.scdn.co/mp3-preview/e8b0f1d2c3a4b5c6d7e8f9g0h1i2j3k4l5m6n7o8?cid=774b29d4f13844c495f206cafdad9c86_0"
    },
    {
      id: 4,
      title: "RATHER LIE",
      artist: "Playboi Carti, The Weeknd",
      duration: "3:29",
      color: "from-blue-600 to-blue-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/68qeaZhtMZ6abrJCYt6nQn?si=da3fd434a70941f1",
      albumArt: "https://i.scdn.co/image/ab67616d0000b273c4b094b56f4efed020847129",
      previewUrl: "https://p.scdn.co/mp3-preview/f9g0h1i2j3k4l5m6n7o8p9q0r1s2t3u4v5w6x7y8?cid=774b29d4f13844c495f206cafdad9c86_0"
    },
    {
      id: 5,
      title: "main-main!",
      artist: "RYO, Josua Natanael",
      duration: "2:08",
      color: "from-green-600 to-green-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/40tAi41702KbnQcWQjSPwZ?si=c2a4f970193442a0",
      albumArt: "https://i.scdn.co/image/ab67616d0000b273b2e8e1f4b3e9b8f1a3c4d5e6",
      previewUrl: null
    },
    {
      id: 6,
      title: "最高到達点",
      artist: "Sekai no Owari",
      duration: "3:47",
      color: "from-yellow-600 to-yellow-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/2hXPmiqKdXcbV0L1VKnTDN?si=e6583f7862c04ec8",
      albumArt: "https://i.scdn.co/image/ab67616d0000b2737e9c6c1b9b7e1f2a3e8d9c0b",
      previewUrl: null
    },
    {
      id: 7,
      title: "With U",
      artist: "Napking",
      duration: "2:47",
      color: "from-teal-600 to-teal-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/1CsJzYjEbcbaQCBxg5iOCv?si=d6efe6806c194823",
      albumArt: "https://i.scdn.co/image/ab67616d0000b273f1e2d3c4b5a6e7f8g9h0i1j2",
      previewUrl: null
    },
    {
      id: 8,
      title: "Sorry",
      artist: "Napking",
      duration: "3:11",
      color: "from-pink-600 to-pink-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/0KifLRxrBPUPwpNcJmtCiG?si=ace3c2915d8a4964",
      albumArt: "https://i.scdn.co/image/ab67616d0000b273k2l3m4n5o6p7q8r9s0t1u2v3",
      previewUrl: null
    },
    {
      id: 9,
      title: "Timeless",
      artist: "The Weeknd, Playboi Carti",
      duration: "4:16",
      color: "from-indigo-600 to-indigo-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/0FIDCNYYjNvPVimz5icugS?si=14d4448c2fec4d41",
      albumArt: "https://i.scdn.co/image/ab67616d0000b273w3x4y5z6a7b8c9d0e1f2g3h4",
      previewUrl: null
    },
    {
      id: 10,
      title: "M a k e I t T o T h e M o r n i n g",
      artist: "PARTYNEXTDOOR",
      duration: "2:48",
      color: "from-orange-600 to-orange-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/12VH4g5pTMZmrUVzfJq7F7?si=3544ea57487745db",
      albumArt: "https://i.scdn.co/image/ab67616d0000b273i4j5k6l7m8n9o0p1q2r3s4t5",
      previewUrl: null
    }
  ];

  useEffect(() => {
    songs.forEach(song => {
      if (song.previewUrl && !audioRefs.current[song.id]) {
        audioRefs.current[song.id] = new Audio(song.previewUrl);
        audioRefs.current[song.id].volume = 0.5;
      }
    });

    return () => {
      Object.values(audioRefs.current).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
    };
  }, []);

  const togglePlay = (id: number) => {
    const audio = audioRefs.current[id];
    
    if (playingId === id) {
      // Stop current song
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      setPlayingId(null);
    } else {
      // Stop any currently playing song
      if (playingId && audioRefs.current[playingId]) {
        audioRefs.current[playingId].pause();
        audioRefs.current[playingId].currentTime = 0;
      }
      
      // Play new song if it has preview
      if (audio) {
        audio.play().catch(error => {
          console.log('Audio play failed:', error);
        });
      }
      setPlayingId(id);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                About Me
              </h1>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              {/* Profile Section */}
              <div className="lg:col-span-1">
                <Card className="bg-gradient-card border-border/50 p-6 animate-scale-in">
                  <div className="text-center">
                    {/* Profile Image Placeholder */}
                    <div className="w-48 h-48 mx-auto mb-6 rounded-2xl bg-gradient-primary/20 flex items-center justify-center border border-primary/20">
                      <div className="text-primary/60 text-6xl">👤</div>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-2 text-foreground">Ahmad Fahrezi Portfolio</h2>
                    <p className="text-foreground/70 mb-4">Informatics Students</p>
                    
                    {/* Social Links */}
                    <div className="flex justify-center gap-2 mb-6">
                      <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10">
                        <a href="https://github.com/Panjullauditore" target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10">
                        <a href="https://www.linkedin.com/in/ahmadfahrezi7/" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10">
                        <a href="mailto:ahmadfahrezir@gmail.com">
                          <Mail className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>

                    <p className="text-foreground/60 text-sm leading-relaxed">
                      Email me for any inquiries at ahmadfahrezir@gmail.com
                    </p>
                  </div>
                </Card>
              </div>

              {/* Description & Interests */}
              <div className="lg:col-span-2 space-y-8">
                <div className="animate-fade-in">
                  <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                    Hi, you can call me Rezi. I'm a passionate Informatics student who loves creating 
                    beautiful web applications and learning new technologies. When I'm not coding, you'll 
                    find me listening to music or exploring creative projects.
                  </p>
                  
                  <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                    I'm very active on social media, having built a strong presence documenting my projects 
                    and sharing tech-related information. I love building things that are related to web 
                    development and modern technologies.
                  </p>
                </div>

                {/* Interests Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <Card 
                      key={interest.title} 
                      className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 group animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                            <interest.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                              {interest.title}
                            </h3>
                            <p className="text-foreground/60 text-xs leading-relaxed">
                              {interest.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <Card className="bg-gradient-card border-border/50 animate-fade-in mb-16">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
                  Skills & Technologies
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-4 py-2 text-sm font-medium bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-105 animate-scale-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* My Favorite Songs */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-primary bg-clip-text text-transparent">
                My Favorite Songs
              </h3>
              <p className="text-center text-foreground/70 mb-8">
                Aside of the nitty gritty, I love listening to aespa, Le Sserafim, ILLIT, Hearts2Hearts, Kendrick Lamar, NewJeans, Young Thug, and much more.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {songs.map((song, index) => (
                  <Card 
                    key={song.id} 
                    className="group bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 animate-scale-in overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-0">
                      <div className={`bg-gradient-to-r ${song.color} p-4 relative`}>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-lg overflow-hidden backdrop-blur-sm">
                            <img 
                              src={song.albumArt} 
                              alt={`${song.title} album art`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = '<div class="w-full h-full bg-black/20 rounded-lg flex items-center justify-center"><svg class="h-5 w-5 text-white/80" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>';
                                }
                              }}
                            />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-white text-sm leading-tight mb-1 truncate">
                              {song.title}
                            </h4>
                            <p className="text-white/80 text-xs truncate">
                              {song.artist}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center space-x-2 flex-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => togglePlay(song.id)}
                              className="bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 h-8 w-8"
                            >
                              {playingId === song.id ? (
                                <Pause className="h-3 w-3" />
                              ) : (
                                <Play className="h-3 w-3 ml-0.5" />
                              )}
                            </Button>
                            
                            <div className="flex-1 bg-white/20 rounded-full h-1 overflow-hidden">
                              <div 
                                className="bg-white h-full rounded-full transition-all duration-300"
                                style={{ 
                                  width: playingId === song.id ? '45%' : '0%',
                                  transition: playingId === song.id ? 'width 1s linear' : 'width 0.3s ease'
                                }}
                              />
                            </div>
                            
                            <span className="text-white/80 text-xs font-medium">
                              {song.duration}
                            </span>
                          </div>

                          <Button
                            variant="ghost"
                            size="icon"
                            asChild
                            className="text-white/60 hover:text-white hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 h-6 w-6 ml-2"
                          >
                            <a href={song.spotifyUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="text-center animate-fade-in">
              <div className="bg-gradient-card border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
                <p className="text-lg text-foreground/70 italic leading-relaxed">
                  "Technology is not just about code – it's about creating meaningful experiences that improve people's lives."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default About;