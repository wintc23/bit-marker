import { BitMarker } from "../index";

describe("测试 BitMarker", () => {
  let bitMarker: BitMarker;

  beforeEach(() => {
    bitMarker = new BitMarker();
  });

  it("测试 set 和 get", () => {
    bitMarker.set(0, true);
    bitMarker.set(1, false);
    bitMarker.set(3, true);
    expect(bitMarker.get(0)).toBe(true);
    expect(bitMarker.get(1)).toBe(false);
    expect(bitMarker.get(2)).toBe(false);
    expect(bitMarker.get(3)).toBe(true);
    expect(bitMarker.getValues()).toEqual([9]);
  });

  it('测试多位标记', () => {
    bitMarker.set(0, true);
    bitMarker.set(1, true);
    bitMarker.set(32, true);
    expect(bitMarker.getValues()).toEqual([3, 1]);
  });

  it('测试 setValues', () => {
    bitMarker.setValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(bitMarker.getValues()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('测试 resize 和 clear', () => {
    bitMarker.set(320, true);
    expect(bitMarker.getValues()).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    bitMarker.clear();
    expect(bitMarker.getValues()).toEqual([]);
  });
});