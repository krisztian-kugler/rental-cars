import { Location } from "./location.model";

export interface ResponseData {
  results: {
    docs: Location[];
    isGooglePowered: boolean;
    numFound: number;
  };
}
