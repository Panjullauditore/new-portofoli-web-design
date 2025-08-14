import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, ExternalLink, Heart } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

// Update tipe data untuk lagu
interface Song {
  id: string;
  title: string;
  artist: string;
  duration: string;
  color: string;
  spotifyUrl: string;
  spotifyEmbed: string;
  albumArt: string;
  previewUrl?: string | null; // Tambahkan previewUrl yang opsional
}

const FavoriteSongs = () => {
  const [playingId, setPlayingId] = useState<string | null>(null); // Ganti tipe data menjadi string
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({}); // Ganti tipe data key menjadi string

  const songs: Song[] = [
    {
      id: "0uxSUdBrJy9Un0EYoBowng",
      title: "20 Min",
      artist: "Lil Uzi Vert",
      duration: "3:41",
      color: "from-purple-600 to-purple-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/0uxSUdBrJy9Un0EYoBowng?si=aa2af6e690794505",
      spotifyEmbed: "https://open.spotify.com/embed/track/0uxSUdBrJy9Un0EYoBowng", 
      albumArt: "https://i.scdn.co/image/ab67616d0000b273400b690ac915aa2bb4e0fa8a",
      previewUrl: "https://p.scdn.co/mp3-preview/05c463c94fa2c3c0e6b7ce9b11dd45a66ba1423b?cid=774b29d4f13844c495f206cafdad9c86_0"
    },
    {
      id: "4cBm8rv2B5BJWU2pDaHVbF",
      title: "Multo",
      artist: "Cup of Joe",
      duration: "3:57",
      color: "from-red-600 to-red-800",
      spotifyUrl: "https://open.spotify.com/intl-id/track/4cBm8rv2B5BJWU2pDaHVbF?si=704c2d9e07544e4b",
      spotifyEmbed: "https://open.spotify.com/embed/track/4cBm8rv2B5BJWU2pDaHVbF", 
      albumArt: "https://i.scdn.co/image/ab67616d0000b273b024bb5b39e3bad5fbe7acb6",
      previewUrl: "https://p.scdn.co/mp3-preview/d3b0e1ba2f9e8daef0cc25bfefac69c2aa1c41c8?cid=774b29d4f13844c495f206cafdad9c86_0"
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
      previewUrl: null // Tidak ada previewUrl untuk lagu ini
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
      previewUrl: null // Tidak ada previewUrl untuk lagu ini
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
      previewUrl: null // Tidak ada previewUrl untuk lagu ini
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
      previewUrl: null // Tidak ada previewUrl untuk lagu ini
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
      previewUrl: null // Tidak ada previewUrl untuk lagu ini
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
      previewUrl: null // Tidak ada previewUrl untuk lagu ini
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
      previewUrl: null // Tidak ada previewUrl untuk lagu ini
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
      previewUrl: null // Tidak ada previewUrl untuk lagu ini
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

  const togglePlay = (id: string) => { // Ganti tipe parameter id menjadi string
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
                    {/* Album Art */}
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden backdrop-blur-sm">
                        <img 
                          src={song.albumArt} 
                          alt={`${song.title} album art`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = '<div class="w-full h-full bg-black/20 rounded-lg flex items-center justify-center"><svg class="h-6 w-6 text-white/80" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>';
                            }
                          }}
                        />
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
