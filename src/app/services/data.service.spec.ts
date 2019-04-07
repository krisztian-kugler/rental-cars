import { TestBed } from "@angular/core/testing";

import { DataService } from "./data.service";
import { HttpClientModule } from "@angular/common/http";

describe("DataService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DataService]
    })
  );

  it("should be created", () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it("should have the 'baseURL' set to 'https://www.rentalcars.com'", () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.baseURL).toBe("https://www.rentalcars.com");
  });
});
