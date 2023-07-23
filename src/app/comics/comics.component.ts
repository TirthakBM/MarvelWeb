import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../Service/marvel.service';
@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private service:MarvelService) {}
    allComics:any=[];
   

  ngOnInit(): void {
    this.service.allComics().subscribe((result)=>{
      console.log(result);
      this.allComics = result.data.results;
    })
  }

}
