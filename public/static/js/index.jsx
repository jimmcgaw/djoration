(function(){

  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var speechPlayer;
  var musicPlayer;
  window.onYouTubeIframeAPIReady = function() {
    speechPlayer = new YT.Player('speech-player', {
      height: '390',
      width: '640',
      videoId: 'xo-6BNtq5RY',
      playerVars: {
        'fs': 0,
        'autoplay': 1
      },
      events: {
        onReady: function(event){
          event.target.setVolume(50);
          event.target.playVideo();
        }
      }
    });

    musicPlayer = new YT.Player('music-player', {
      height: '390',
      width: '640',
      videoId: 'vnHudUSzDuY',
      playerVars: {
        'fs': 0,
        'autoplay': 1
      },
      events: {
        onReady: function(event){
          event.target.setVolume(50);
          event.target.playVideo();
        }
      }
    });
  };


  var videoPlayerStyles = {
    'float': 'left',
    'width': '500px'
  };

  class VideoPlayer extends React.Component {
    constructor(props){
      super(props)
    }

    render(){
      return (
        <div id="player-panel">
          <div id="speech-player" style={videoPlayerStyles}></div>
          <div id="music-player" style={videoPlayerStyles}></div>
        </div>
      );
    }
  }
  ReactDOM.render(<VideoPlayer />, document.getElementById('panel'));


  class VideoLink extends React.Component {
    constructor(props){
      super(props)
    }

    render(){
      return (
        <a href="#" onClick={this.props.onSelect.bind(this)} data-video_id={this.props.videoId}>{this.props.videoId}</a>
      );
    }
  }

  class VideoMenu extends React.Component {
    constructor(props){
      super(props)
    }

    onSpeechSelect(e){
      let anchor = $(e.target);
      let videoId = anchor.data('video_id');
      speechPlayer.loadVideoById(videoId);
    }

    onMusicSelect(e){
      let anchor = $(e.target);
      let videoId = anchor.data('video_id');
      musicPlayer.loadVideoById(videoId);
    }

    render(){
      var self = this;
      return (
        <div id="player-menu">
          <div id="speech-menu" style={videoPlayerStyles}>
            <h3>Change Speech</h3>
            <br />
            <ul>
              {this.props.speechOptions.map(function(videoId){
                return <li><VideoLink videoId={videoId} onSelect={self.onSpeechSelect.bind(self)} key={videoId} /></li>;
              })}
            </ul>
          </div>  
          <div id="music-menu" style={videoPlayerStyles}>
            <h3>Select Beat</h3>
            <br />
            <ul>
              {this.props.musicOptions.map(function(videoId){
                return <li><VideoLink videoId={videoId} onSelect={self.onMusicSelect.bind(self)} key={videoId} /></li>;
              })}
            </ul>
          </div>  
        </div>
      );
    }
  }

  const speechOptions = ['j8d-IYSM-08', 'pOjpaIO2seY', 'xo-6BNtq5RY', 'IDl84vusXos'];
  const musicOptions = ['vnHudUSzDuY', 'fzyiFyg6LV4', 'qOTYKSgJwMs', 'FY3Av5Wo0tU'];

  ReactDOM.render(<VideoMenu speechOptions={speechOptions} musicOptions={musicOptions} />, document.getElementById('menu'));


    $('#slider').slider({
      slide: function(event, ui){
        var speechVolume = 100 - ui.value;
        var musicVolume = ui.value;
        speechPlayer.setVolume(speechVolume);
        musicPlayer.setVolume(musicVolume);
      },
      value: 50
    });

})();
