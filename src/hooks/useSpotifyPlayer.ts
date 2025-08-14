import { useState, useRef, useEffect } from 'react'

// Fallback to use preview URLs if Supabase edge function is not available
const FALLBACK_MODE = true

interface SpotifyTrack {
  id: string
  name: string
  artists: string[]
  album: {
    name: string
    image: string
  }
  preview_url: string | null
  external_urls: {
    spotify: string
  }
  duration_ms: number
}

export const useSpotifyPlayer = () => {
  const [playingId, setPlayingId] = useState<string | null>(null)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const fetchTrackData = async (trackId: string): Promise<SpotifyTrack | null> => {
    if (FALLBACK_MODE) {
      // Use fallback mode with preview URLs
      return null
    }
    
    try {
      setIsLoading(true)
      // This would require Supabase edge function with the secret
      // For now, we'll use the preview URLs provided in the songs array
      return null
    } catch (error) {
      console.error('Error fetching track data:', error)
      return null
    } finally {
      setIsLoading(false)
    }
  }

  const playTrack = async (trackId: string, previewUrl?: string) => {
    // Stop current track if playing
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    if (playingId === trackId) {
      setPlayingId(null)
      setCurrentTime(0)
      setDuration(0)
      return
    }

    // Try to get full track data from Spotify API
    let trackData: SpotifyTrack | null = null
    if (!previewUrl) {
      trackData = await fetchTrackData(trackId)
    }

    const audioUrl = trackData?.preview_url || previewUrl
    
    if (!audioUrl) {
      console.log('No preview available for this track')
      return
    }

    try {
      audioRef.current = new Audio(audioUrl)
      audioRef.current.volume = 0.5

      audioRef.current.addEventListener('loadedmetadata', () => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration)
        }
      })

      audioRef.current.addEventListener('timeupdate', () => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime)
        }
      })

      audioRef.current.addEventListener('ended', () => {
        setPlayingId(null)
        setCurrentTime(0)
        setDuration(0)
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
      })

      await audioRef.current.play()
      setPlayingId(trackId)

      // Update progress
      intervalRef.current = setInterval(() => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime)
        }
      }, 1000)

    } catch (error) {
      console.error('Error playing track:', error)
      setPlayingId(null)
    }
  }

  const pauseTrack = () => {
    if (audioRef.current && playingId) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setPlayingId(null)
      setCurrentTime(0)
      setDuration(0)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }

  const seekTo = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [])

  return {
    playingId,
    currentTime,
    duration,
    isLoading,
    playTrack,
    pauseTrack,
    seekTo,
    fetchTrackData
  }
}