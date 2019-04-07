import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./components/search/search.component";
import { SpinnerComponent } from "./components/search/spinner/spinner.component";
import { ResultComponent } from "./components/search/result/result.component";

import { DataService } from "./services/data.service";

import { MarkerPipe } from "./pipes/marker.pipe";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, FormsModule],
      declarations: [AppComponent, SearchComponent, SpinnerComponent, ResultComponent, MarkerPipe],
      providers: [DataService]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
