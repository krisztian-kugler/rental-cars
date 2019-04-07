import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./components/search/search.component";
import { ResultComponent } from "./components/search/result/result.component";
import { SpinnerComponent } from "./components/search/spinner/spinner.component";

import { DataService } from "./services/data.service";

import { MarkerPipe } from "./pipes/marker.pipe";

@NgModule({
  declarations: [AppComponent, SearchComponent, ResultComponent, SpinnerComponent, MarkerPipe],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
