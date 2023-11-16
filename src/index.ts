export type PromiseExecutor<T> = ConstructorParameters<typeof Promise<T>>[0];
export type PromiseResolver<T> = Parameters<PromiseExecutor<T>>[0];
export type PromiseRejecter<T> = Parameters<PromiseExecutor<T>>[1];

export class PromiseHandle<T> extends Promise<T> {
  static get [Symbol.species]() {
    return Promise;
  }

  public resolve: PromiseResolver<T>;
  public reject: PromiseRejecter<T>;

  constructor() {
    let resolve: PromiseResolver<T>;
    let reject: PromiseRejecter<T>;
    super((...args) => {
      resolve = args[0];
      reject = args[1];
    });
    // This assumes the callback is called synchronous
    this.resolve = resolve!;
    this.reject = reject!;
  }
}
