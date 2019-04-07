import { Component } from "@angular/core";

@Component({
  selector: "rc-root",
  templateUrl: "./app.component.pug",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  public header: string = "Let’s find your ideal car";
}
