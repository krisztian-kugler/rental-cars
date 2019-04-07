import { MarkerPipe } from "./marker.pipe";

describe("MarkerPipe", () => {
  it("create an instance", () => {
    const pipe = new MarkerPipe(null, null);
    expect(pipe).toBeTruthy();
  });

  it("should make the query string bold", () => {
    const pipe = new MarkerPipe(null, null);
    const value: string = "abcdefgh";
    const query: string = "cdef";

    const output: string = pipe.mark(value, query);

    expect(output).toContain(`ab<strong style="color: black">cdef</strong>gh`);
  });
});
