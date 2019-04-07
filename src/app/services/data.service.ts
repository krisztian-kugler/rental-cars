import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  public toBeMarked: string; // Input for the marker pipe
  public baseURL: string = "https://www.rentalcars.com";

  public getResults(quantity: number, query: string): Observable<Object> {
    const url: string = `${this.baseURL}/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${quantity}&solrTerm=${query}`;
    return this.http.get(url);
  }
}
