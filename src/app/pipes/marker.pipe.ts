import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { DataService } from "../services/data.service";

@Pipe({
  name: "marker"
})
export class MarkerPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer, private dataService: DataService) {}

  transform(value: string): SafeHtml {
    if (!this.dataService.toBeMarked) return value;
    return this.domSanitizer.bypassSecurityTrustHtml(this.mark(value, this.dataService.toBeMarked));
  }

  mark(value: string, query: string): string {
    const regExp = new RegExp(`(${query})`, "ig");
    const marked: string = `<strong style="color: black">$1</strong>`;
    return value.replace(regExp, marked);
  }
}
