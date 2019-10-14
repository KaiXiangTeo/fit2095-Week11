import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-deleteallmovie',
  templateUrl: './deleteallmovie.component.html',
  styleUrls: ['./deleteallmovie.component.css']
})
export class DeleteallmovieComponent implements OnInit {
  private movieDB: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.onGetMovies();
  }

  onGetMovies(){
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.movieDB = data;
    })
  }
  onDeleteAllMovie(){
    this.dbService.deleteAllMovie().subscribe(result => {
      this.onGetMovies();
      this.router.navigate(["/listmovie"]);
    })
  }

}
