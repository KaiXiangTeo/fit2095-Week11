import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addactortomovie',
  templateUrl: './addactortomovie.component.html',
  styleUrls: ['./addactortomovie.component.css']
})
export class AddactortomovieComponent implements OnInit {
  movieDB: any[] = [];
  actorsDB: any[] = [];

  section = 1;

  title: string = "";
  year: number = 0;
  movieId: string = "";
  movieActor:any[]=[];
  aname:string="";
  aid:string="";
  constructor(private dbService: DatabaseService,private router: Router) { }

  onUpdateMovie() {
    if (this.aid !=""){
      this.movieActor.push(this.aid);
    }
    let obj = { title: this.title, year: this.year ,actors:this.movieActor};
    this.dbService.updateMovie(this.movieId, obj).subscribe(result => {
      this.onGetMovies();
    });
  }
  onSelectActor(item) {
    this.aname = item.name;
    this.aid = item._id;
   
  }
  onSelectUpdate(item) {
    this.title = item.title;
    this.year = item.year;
    this.movieId=item._id;
    this.movieActor= item.actors;
  }
  onGetActors() {
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }

  onGetMovies(){
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.movieDB = data;
    })
  }


  ngOnInit() {
    this.onGetMovies();
    this.onGetActors();
  }

}
