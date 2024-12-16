$urls = @{
    "public/images/team/john.jpg" = "https://source.unsplash.com/random/800x800/?businessman"
    "public/images/team/sarah.jpg" = "https://source.unsplash.com/random/800x800/?businesswoman"
    "public/images/team/michael.jpg" = "https://source.unsplash.com/random/800x800/?professional"
    "public/images/about/story.jpg" = "https://source.unsplash.com/random/1200x800/?trading,office"
    "public/videos/trading-background.mp4" = "https://cdn.videvo.net/videvo_files/video/free/2019-11/small_watermarked/190301_1_25_11_preview.webm"
}

foreach ($file in $urls.Keys) {
    $url = $urls[$file]
    Write-Host "Downloading $file..."
    
    # Create directory if it doesn't exist
    $directory = Split-Path -Path $file -Parent
    if (!(Test-Path $directory)) {
        New-Item -ItemType Directory -Force -Path $directory
    }
    
    # Download file using System.Net.WebClient (more reliable for different content types)
    $webClient = New-Object System.Net.WebClient
    $webClient.Headers.Add("User-Agent", "Mozilla/5.0")
    try {
        $webClient.DownloadFile($url, $file)
        Write-Host "Downloaded $file successfully"
    } catch {
        Write-Host "Failed to download $file: $_"
    } finally {
        $webClient.Dispose()
    }
}
