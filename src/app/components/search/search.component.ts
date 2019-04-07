import { Component } from "@angular/core";
import { DataService } from "../../services/data.service";
import { ResponseData } from "../../models/response-data.model";

@Component({
  selector: "rc-search",
  templateUrl: "./search.component.pug",
  styleUrls: ["./search.component.sass"]
})
export class SearchComponent {
  constructor(private dataService: DataService) {}

  public data: ResponseData;
  public fetchingData: boolean = false;
  public placeholder: string = "city, airport, station, region, district…";
  public inputValue: string = "";
  private quantity: number = 6;

  public onInput(): void {
    if (this.inputValue.length > 1) {
      this.fetchingData = true;
      this.dataService.getResults(this.quantity, this.inputValue).subscribe((response: ResponseData) => {
        this.data = response;
        this.data.results.numFound > 0 ? (this.dataService.toBeMarked = this.inputValue) : (this.dataService.toBeMarked = null);
        this.fetchingData = false;
      });
    } else {
      this.data = null;
    }
  }
}
