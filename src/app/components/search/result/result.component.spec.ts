import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";

import { ResultComponent } from "./result.component";

import { DataService } from "src/app/services/data.service";

import { MarkerPipe } from "src/app/pipes/marker.pipe";

describe("ResultComponent", () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultComponent, MarkerPipe],
      imports: [HttpClientModule],
      providers: [DataService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
