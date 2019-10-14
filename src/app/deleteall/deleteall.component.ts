import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-deleteall',
  templateUrl: './deleteall.component.html',
  styleUrls: ['./deleteall.component.css']
})
export class DeleteallComponent implements OnInit {
  private movieDB: any[] = [];
  private actorsDB: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.onGetMovies();

  }

  onGetMovies(){
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.movieDB = data;
    })
  }
  onGetActors() {
    this.dbService.getActors().subscribe((data: any[]) => {
      this.movieDB = data;
    })
  }

  onDeleteALLMovie(){
    this.dbService.deleteAllMovie().subscribe(result => {
      this.onGetMovies();
      this.router.navigate(["/listmovie"]);
    })
  }

  onDeleteALLActor() {
    this.dbService.deleteAllActor().subscribe(result => {
      this.onGetActors();
      this.router.navigate(["/listactors"]);
    });
  }
}
