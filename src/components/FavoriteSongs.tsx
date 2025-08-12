import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, ExternalLink, Heart } from 'lucide-react';
import { useState } from 'react';

const FavoriteSongs = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const songs = [
    {
      id: 1,
      title: "Stop The World I Wanna Get Off With You",
      artist: "Arctic Monkeys",
      duration: "3:11",
      color: "from-gray-600 to-gray-800",
      spotifyUrl: "https://open.spotify.com/track/example1"
    },
    {
      id: 2,
      title: "Motel 6",
      artist: "River Whyless",
      duration: "3:15",
      color: "from-red-600 to-red-800",
      spotifyUrl: "https://open.spotify.com/track/example2"
    },
    {
      id: 3,
      title: "Back To Me",
      artist: "The Marias",
      duration: "3:34",
      color: "from-gray-700 to-gray-900",
      spotifyUrl: "https://open.spotify.com/track/example3"
    },
    {
      id: 4,
      title: "Cross Your Mind",
      artist: "Shelly",
      duration: "3:48",
      color: "from-gray-600 to-gray-800",
      spotifyUrl: "https://open.spotify.com/track/example4"
    },
    {
      id: 5,
      title: "해야 (HEYA)",
      artist: "IVE",
      duration: "3:09",
      color: "from-blue-600 to-blue-800",
      spotifyUrl: "https://open.spotify.com/track/example5"
    },
    {
      id: 6,
      title: "Infrunami",
      artist: "Steve Lacy",
      duration: "2:58",
      color: "from-red-600 to-red-800",
      spotifyUrl: "https://open.spotify.com/track/example6"
    }
  ];

  const togglePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <section id="music" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              My Favorite Songs
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Music that inspires my creativity and keeps me motivated while coding.
            </p>
          </div>

          {/* Songs Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {songs.map((song, index) => (
              <Card 
                key={song.id} 
                className="group bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${song.color} p-6 relative`}>
                    {/* Album Art Placeholder */}
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-black/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <Heart className="h-6 w-6 text-white/80" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-white text-lg leading-tight mb-1 truncate">
                          {song.title}
                        </h3>
                        <p className="text-white/80 text-sm truncate">
                          {song.artist}
                        </p>
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => togglePlay(song.id)}
                          className="bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
                        >
                          {playingId === song.id ? (
                            <Pause className="h-5 w-5" />
                          ) : (
                            <Play className="h-5 w-5 ml-0.5" />
                          )}
                        </Button>
                        
                        {/* Progress Bar */}
                        <div className="flex-1 bg-white/20 rounded-full h-1.5 overflow-hidden">
                          <div 
                            className="bg-white h-full rounded-full transition-all duration-300"
                            style={{ 
                              width: playingId === song.id ? '45%' : '0%',
                              transition: playingId === song.id ? 'width 1s linear' : 'width 0.3s ease'
                            }}
                          />
                        </div>
                        
                        <span className="text-white/80 text-sm font-medium">
                          {song.duration}
                        </span>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="text-white/60 hover:text-white hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
                      >
                        <a href={song.spotifyUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Music Note */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-gradient-card border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-lg text-foreground/70 italic leading-relaxed">
                "Music is the universal language of mankind. It helps me stay creative and focused while building amazing projects."
              </p>
              <div className="flex items-center justify-center mt-4 space-x-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span className="text-foreground/50 text-sm">Created with love for music</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoriteSongs;