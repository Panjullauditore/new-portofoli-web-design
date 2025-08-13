import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, Palette, Rocket, Heart, Play, Pause, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import Footer from '@/components/Footer';

const About = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);

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
      color: "from-gray-600 to-gray-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/0uxSUdBrJy9Un0EYoBowng?si=aa2af6e690794505"
    },
    {
      id: 2,
      title: "Multo",
      artist: "Cup of Joe",
      duration: "3:57",
      color: "from-red-600 to-red-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/4cBm8rv2B5BJWU2pDaHVbF?si=704c2d9e07544e4b"
    },
    {
      id: 3,
      title: "mejikuhibuniu",
      artist: "Tenxi, Suise, Jemsi",
      duration: "3:16",
      color: "from-gray-700 to-gray-900",
      spotifyUrl: "https://open.spotify.com/intl-id/track/278PwGlIm7MxVTZud18Rx4?si=bea1d2f7d32b4d25"
    },
    {
      id: 4,
      title: "RATHER LIE",
      artist: "Playboi Carti, The Weeknd",
      duration: "3:29",
      color: "from-gray-600 to-gray-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/68qeaZhtMZ6abrJCYt6nQn?si=da3fd434a70941f1"
    },
    {
      id: 5,
      title: "main-main!",
      artist: "RYO, Josua Natanael",
      duration: "2:08",
      color: "from-blue-600 to-blue-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/40tAi41702KbnQcWQjSPwZ?si=c2a4f970193442a0"
    },
    {
      id: 6,
      title: "最高到達点",
      artist: "Sekai no Owari",
      duration: "3:47",
      color: "from-gray-600 to-gray-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/2hXPmiqKdXcbV0L1VKnTDN?si=e6583f7862c04ec8"
    },
    {
      id: 7,
      title: "With U",
      artist: "Napking",
      duration: "2:47",
      color: "from-blue-600-to-blue-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/1CsJzYjEbcbaQCBxg5iOCv?si=d6efe6806c194823"
    },
    {
      id: 8,
      title: "Sorry",
      artist: "Napking",
      duration: "3:11",
      color: "from-white-600 to-white-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/0KifLRxrBPUPwpNcJmtCiG?si=ace3c2915d8a4964"
    },
    {
      id: 9,
      title: "Timeless",
      artist: "The Weeknd, Playboi Carti",
      duration: "4:16",
      color: "from-gray-600 to-gray-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/0FIDCNYYjNvPVimz5icugS?si=14d4448c2fec4d41"
    },
    {
      id: 10,
      title: "M a k e I t T o T h e M o r n i n g",
      artist: "PARTYNEXTDOOR",
      duration: "2:48",
      color: "from-white-600-to-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/12VH4g5pTMZmrUVzfJq7F7?si=3544ea57487745db"
    }
  ];

  const togglePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
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
                          <div className="w-12 h-12 bg-black/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                            <Heart className="h-5 w-5 text-white/80" />
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