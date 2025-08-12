import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, ExternalLink, Heart } from 'lucide-react';
import { useState } from 'react';

const FavoriteSongs = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);

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