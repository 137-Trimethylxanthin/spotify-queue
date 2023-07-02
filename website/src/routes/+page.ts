/** @type {import('./$types').PageServerLoad} */

export class _Song {
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
  id: string;

  constructor(title:string, artist:string, album:string, duration:string, id:string) {
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.duration = duration;
    this.cover = "images/cover1.jpg";
    this.id = id;
  }
}




export let _currentSong: _Song = new _Song("test_title", "test_artist", "test_duration", "test_cover", "1");
export let _queue: _Song[] = [];
let queueIndex: number = 0;
let playing: boolean = false;
let shuffle: boolean = false;
let repeat: boolean = false;
let consume: boolean = false;
let volume: number = 0.5;
let muted: boolean = false;
let currentTime: number = 0;
let duration: number = 0;

console.log("test");