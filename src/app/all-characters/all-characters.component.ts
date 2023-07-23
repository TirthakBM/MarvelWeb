import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../Service/marvel.service';
@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.css']
})
export class AllCharactersComponent implements OnInit {

  constructor(private service:MarvelService) { }

  allcharacters:any=[];
  comics:any=[];
  series:any=[];
  showSearchResult!: boolean;
  showComicsDiv!: boolean;
  showSeriesDiv!: boolean;
  characterName!: string;
  searchedCharacter:any=[];

  ngOnInit(): void {
    this.showSearchResult=false;
    this.showComicsDiv=false;
    this.showSeriesDiv=false;

    this.service.allCharacters().subscribe((result) =>{console.log(result);
    this.allcharacters=result.data.results}
    )
  }

  findCharacter(event:any)
  {
   this.characterName = event.target.value;
   console.log(this.characterName);
   this.service.getCharacterByName(this.characterName).subscribe((result)=>{
     console.log(result);
     if(result.data.count>0)
     {
       this.showSearchResult = true;
       this.searchedCharacter = result.data.results;
     }
     else{

       this.ngOnInit();
     }
   })
}

  fetchComicsByCharacter(characterId:string)
  {
    console.log(characterId);
    this.service.getComicsByCharacter(characterId).subscribe((result)=>{
      //console.log(result);

      if(result.data.count>0)
      {
        this.comics = result.data.results;
        this.showComicsDiv = true;
      }
    })
  }

  fetchSeriesByCharacter(characterId:string)
  {
    console.log(characterId);
    this.service.getSeriesByCharacter(characterId).subscribe((result)=>{
      //console.log(result);

      if(result.data.count>0)
      {
        this.series = result.data.results;
        this.showSeriesDiv = true;
      }
    })
  }

}
