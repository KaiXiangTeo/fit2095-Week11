import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DatabaseService } from "./database.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddactorComponent } from './addactor/addactor.component';
import { ListactorsComponent } from './listactors/listactors.component';
import { UpdateactorComponent } from './updateactor/updateactor.component';
import { DeleteactorComponent } from './deleteactor/deleteactor.component';
import { RouterModule, Routes } from "@angular/router";
import { AddmovieComponent } from './addmovie/addmovie.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { ListmovieComponent } from './listmovie/listmovie.component';
import { AddactortomovieComponent } from './addactortomovie/addactortomovie.component';
import { ViewnotfoundComponent } from './viewnotfound/viewnotfound.component';
import { DeleteallmovieComponent } from './deleteallmovie/deleteallmovie.component';
import { DeleteallactorComponent } from './deleteallactor/deleteallactor.component';
import { DeleteallComponent } from './deleteall/deleteall.component';

const appRoutes: Routes = [
  { path: "listactors", component: ListactorsComponent },
  { path: "addactor", component: AddactorComponent },
  { path: "updateactor", component: UpdateactorComponent },
  { path: "deleteactor", component: DeleteactorComponent },
  { path: "addmovie", component: AddmovieComponent },
  { path: "deletemovie", component: DeletemovieComponent },
  { path: "listmovie", component: ListmovieComponent },
  { path: "addactortomovie", component: AddactortomovieComponent },
  { path: "deleteall", component: DeleteallComponent },
  { path: "", redirectTo: "/listactors", pathMatch: "full" },
  { path: "**", component: ViewnotfoundComponent },
];

@NgModule({
  declarations: [AppComponent, AddactorComponent, ListactorsComponent, UpdateactorComponent, DeleteactorComponent, AddmovieComponent, DeletemovieComponent, ListmovieComponent, AddactortomovieComponent, ViewnotfoundComponent, DeleteallmovieComponent, DeleteallactorComponent, DeleteallComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule,NgbModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}

