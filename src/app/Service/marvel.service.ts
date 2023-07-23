import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http:HttpClient) { }
  
  BaseUrl = 'https://gateway.marvel.com:443/v1/public/characters?limit=20&ts=1&apikey=60cb3afdd06970202d667b83c8b9aa5f&hash=39e3ccc64e88117f17e7724a8864584c';
  allCharacters():Observable<any>{
    return this.http.get(this.BaseUrl);
  }

  allComics():Observable<any>
  {
    const comicUrl ='https://gateway.marvel.com:443/v1/public/comics?limit=20&ts=1&apikey=60cb3afdd06970202d667b83c8b9aa5f&hash=39e3ccc64e88117f17e7724a8864584c';
    
    return this.http.get(comicUrl);
  }
  allSeries():Observable<any>
  {
    const seriesUrl ='https://gateway.marvel.com:443/v1/public/series?limit=20&ts=1&apikey=60cb3afdd06970202d667b83c8b9aa5f&hash=39e3ccc64e88117f17e7724a8864584c';
    
    return this.http.get(seriesUrl);
  }

  getComicsByCharacter(characterId:string):Observable<any>
  {
    const comicByCharacterUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?ts=1&apikey=60cb3afdd06970202d667b83c8b9aa5f&hash=39e3ccc64e88117f17e7724a8864584c`;
    return this.http.get(comicByCharacterUrl);
  }

  getSeriesByCharacter(characterId:string):Observable<any>
  {
    const seriesByCharacterUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/series?ts=1&apikey=60cb3afdd06970202d667b83c8b9aa5f&hash=39e3ccc64e88117f17e7724a8864584c`;
    return this.http.get(seriesByCharacterUrl);
  }
  getCharacterByName(characterName:string):Observable<any>
  {
    const characterBYNameUrl = `https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&ts=1&apikey=60cb3afdd06970202d667b83c8b9aa5f&hash=39e3ccc64e88117f17e7724a8864584c`;
    return this.http.get(characterBYNameUrl);
  }
}



