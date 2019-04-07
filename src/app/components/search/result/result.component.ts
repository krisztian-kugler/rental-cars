import { Component, Input } from "@angular/core";
import { Location } from "../../../models/location.model";

@Component({
  selector: "rc-result",
  templateUrl: "./result.component.pug",
  styleUrls: ["./result.component.sass"]
})
export class ResultComponent {
  @Input("doc") public location: Location;

  public generateLocationData(): string {
    let output: string = "";
    this.location.city ? (output += `${this.location.city}, `) : null;
    this.location.region ? (output += `${this.location.region}, `) : null;
    this.location.country ? (output += `${this.location.country}`) : null;
    return output;
  }
}
