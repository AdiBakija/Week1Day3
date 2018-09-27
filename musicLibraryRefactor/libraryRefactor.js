var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"
                 }
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlayLists: function () {
    for (var print in this.playlists) {
      var list = this.playlists[print];
      this.formatPlaylist(list);
    }
  },
  printTracks: function () {
    for (var print1 in this.tracks) {
      var listT = this.tracks[print1]
      this.formatTrack(listT);
    }
  },
  formatTrack: function (track) {

    console.log(track.id + ": " + track.name + " by " + track.artist + track.album);

  },
  formatPlaylist: function (playlist) {

    console.log(playlist.id + ": " + playlist.name + " - " + playlist["tracks"].length + " tracks");

  },
  printPlaylist: function (playlistId) {
    var playlist = this["playlists"][playlistId]
    var tracks = playlist["tracks"];
    this.formatPlaylist(playlist);
    for (var trackId of tracks) {
      var track = this["tracks"][trackId];

      this.formatTrack(track);
    }

  },
  addTrackToPlaylist: function (trackId, playlistId) {
    var playlist = this["playlists"][playlistId]["tracks"];
    if (true) {
      playlist.push(trackId);
    }
  console.log(playlist);
  },
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {

    var newTr = {
    id: this.uid(),
    name: name,
    artist: artist,
    album: album
    }

    this.tracks[newTr.id] = newTr;
    return this.tracks;
  },
  addPlaylist: function (name) {

    var newPl = {
    id: this.uid(),
    name: name,
    tracks: ["t04"],
    }

    this.playlists[newPl.id] = newPl;
    return this.playlists;
  }

}

//

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// var printPlaylists = function () {
//   for (var print in library.playlists) {
//     var list = library.playlists[print];
//     formatPlaylist(list);
//   }
// }

console.log(library.printPlayLists());


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

// var printTracks = function () {
//   for (var print1 in library.tracks) {
//     var listT = library.tracks[print1]
//     formatTrack(listT);
//   }
// }

console.log(library.printTracks());

// function formatTrack(track) {

//   console.log(track.id + ": " + track.name + " by " + track.artist + track.album);

// }

// function formatPlaylist(playlist) {

// console.log(playlist.id + ": " + playlist.name + " - " + playlist["tracks"].length + " tracks");

// }
console.log(library.printTracks());


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

// var printPlaylist = function (playlistId) {
//     var playlist = library["playlists"][playlistId]
//     var tracks = playlist["tracks"];
//     formatPlaylist(playlist);
//     for (var trackId of tracks) {
//       var track = library["tracks"][trackId];

//       formatTrack(track);
//     }

// }

console.log(library.printPlaylist("p02"));


// adds an existing track to an existing playlist

// var addTrackToPlaylist = function (trackId, playlistId) {
//   var playlist = library["playlists"][playlistId]["tracks"];
//   if (true) {
//     playlist.push(trackId);
//   }
//   console.log(playlist);
// }

console.log(library.addTrackToPlaylist("t03", "p02"))

// generates a unique id
// (use this for addTrack and addPlaylist)

// var uid = function() {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// }


// adds a track to the library

// var addTrack = function (name, artist, album) {

//   var newTr = {
//   id: uid(),
//   name: name,
//   artist: artist,
//   album: album
//   }

// library.tracks[newTr.id] = newTr;
// return library.tracks;
// }

console.log(library.addTrack("Adi", "Bakija", "hello"));

// adds a playlist to the library

// var addPlaylist = function (name) {

//   var newPl = {
//   id: uid(),
//   name: name,
//   tracks: ["t04"],
//   }

// library.playlists[newPl.id] = newPl;
// return library.playlists;
// }

console.log(library.addPlaylist("ADI"));


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {

// }