import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { trackId } = await req.json()
    
    // Get Spotify credentials from environment
    const clientId = '74cf173374bc43bd872d9b1a9078d905'
    const clientSecret = Deno.env.get('7c99c3dce4624cd9b723c5027189cb57')
    
    if (!clientSecret) {
      throw new Error('Spotify client secret not found')
    }

    // Get access token
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`
      },
      body: 'grant_type=client_credentials'
    })

    const tokenData = await tokenResponse.json()
    
    if (!tokenData.access_token) {
      throw new Error('Failed to get Spotify access token')
    }

    // Get track details
    const trackResponse = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`
      }
    })

    const trackData = await trackResponse.json()
    
    return new Response(
      JSON.stringify({
        success: true,
        track: {
          id: trackData.id,
          name: trackData.name,
          artists: trackData.artists.map((artist: any) => artist.name),
          album: {
            name: trackData.album.name,
            image: trackData.album.images[0]?.url
          },
          preview_url: trackData.preview_url,
          external_urls: trackData.external_urls,
          duration_ms: trackData.duration_ms
        }
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})