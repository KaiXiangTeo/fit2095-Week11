import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-deleteallactor',
  templateUrl: './deleteallactor.component.html',
  styleUrls: ['./deleteallactor.component.css']
})
export class DeleteallactorComponent implements OnInit {
  private actorsDB: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) { }
  ngOnInit() {
    this.onGetActors();
  }

  onGetActors() {
    console.log("From on GetActors");
  }

  onDeleteALLActor() {
    this.dbService.deleteAllActor().subscribe(result => {
      this.onGetActors();
      this.router.navigate(["/listactors"]);
    });
  }
  

}
