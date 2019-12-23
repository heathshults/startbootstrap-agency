(function audioplayer() {
  let ap = `
    <div class="player-container container">
    <div class="player ">
      <div class="album-art-container">
        <img src="/img/cf-cd-cover-2002.jpg" class="album-art"/>
        <div class="song-title">Represent <sup class="number">#1</sup></divv>
        <div class="song-artist">Crankfish</div>
       </div>
    </div>
    
    
    
      <div class="meta-container">
        <div class="control-container">
          <div class="amplitude-prev">

          </div>
          <div class="play-pause-contianer hvr-rectangle-out">
            <div class="amplitude-play-pause" data-amplitude-song-index="0">
          </div>
          </div>
          <div class="amplitude-next">

          </div>
        </div>
        <div class="time-container">
          <span class="current-time">
            <span class="amplitude-current-minutes" data-amplitude-song-index="0"></span>:<span class="amplitude-current-seconds" data-amplitude-song-index="0"></span>
          </span>
          <span style="margin: 0 4px 0 4px;"> / </span>
          <span class="duration">
            <span class="amplitude-duration-minutes" data-amplitude-song-index="0">3</span>:<span class="amplitude-duration-seconds" data-amplitude-song-index="0">30</span>
          </span>
        </div>
        
        <progress class="amplitude-song-played-progress" data-amplitude-song-index="0" id="song-played-progress-1"></progress>
        
        
      </div>
    </div>
    
    <div id="preload">
      <img src="/img/icons/skip-previous.svg"/>
      <img src="/img/icons/play-arrow.svg"/>
      <img src="/img/icons/pause.svg"/>
      <img src="/img/icons/skip-next.svg"/>
    </div>
  </div>`
  $(BODY).append(ap);
  
  Amplitude.init({
    "songs": [
      {
        "name": "Represent",
        "artist": "Crankfish",
        "album": "Red Swallow",
        "url": "/music/eMastered_Represent.mp3",
        "cover_art_url": "img/cf-cd-cover-2002.jpg" 
      },
      {
        "name": "Walk with Roland",
        "artist": "Crankfish",
        "album": "Red Swallow",
        "url": "/music/eMastered_Roland.mp3",
        "cover_art_url": "img/cf-cd-cover-2002.jpg" 
      },
      {
        "name": "King Pin",
        "artist": "Crankfish",
        "album": "Red Swallow",
        "url": "/music/King_Pin.mp3",
        "cover_art_url": "img/cf-cd-cover-2002.jpg" 
      },
      {
        "name": "Syllable",
        "artist": "Crankfish",
        "album": "Red Swallow",
        "url": "/music/eMastered_Syllable.mp3",
        "cover_art_url": "img/cf-cd-cover-2002.jpg" 
      },
      {
        "name": "Red Swallow",
        "artist": "Crankfish",
        "album": "Red Swallow",
        "url": "/music/eMastered_Red_swallow.mp3",
        "cover_art_url": "img/cf-cd-cover-2002.jpg" 
      }
    
    ] });
})
