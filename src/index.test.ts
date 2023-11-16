import {describe, it, expect } from "vitest";

import { PromiseHandle } from "./index.js";

describe("PromiseHandle", () => {
  it("resolves", async () => {
    const handle = new PromiseHandle<string>();
    handle.resolve("value");
    await expect(handle).resolves.toEqual("value");
  });

  it("rejects", async () => {
    const handle = new PromiseHandle();
    handle.reject(new Error("err"));
    await expect(handle).rejects.toThrow("err");
  });
});