import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

import { SearchComponent } from "./search.component";
import { SpinnerComponent } from "./spinner/spinner.component";
import { ResultComponent } from "./result/result.component";

import { DataService } from "../../services/data.service";

import { MarkerPipe } from "../../pipes/marker.pipe";

describe("SearchComponent", () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent, SpinnerComponent, ResultComponent, MarkerPipe],
      imports: [HttpClientModule, FormsModule],
      providers: [DataService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should do nothing if there is ONE character in the search input", () => {
    const dataService = TestBed.get(DataService);
    const spy = spyOn(dataService, "getResults");
    const de = fixture.debugElement.query(By.css("#search"));
    const el: HTMLInputElement = de.nativeElement;

    el.value = "a";
    el.dispatchEvent(new Event("input"));

    expect(spy).not.toHaveBeenCalled();
  });

  it("should display search results if 2 or more characters are entered in the search input", () => {
    component.data = {
      results: {
        docs: [{ name: "abc" }],
        isGooglePowered: true,
        numFound: 1
      }
    };
    const searchInput = fixture.debugElement.query(By.css("#search"));

    searchInput.nativeElement.value = "aa";
    searchInput.nativeElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    const results = fixture.debugElement.query(By.css(".results"));

    expect(results.nativeElement).toBeTruthy();
  });
});
