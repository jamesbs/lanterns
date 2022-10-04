export type Event<
  E extends string = string,
  Data extends Record<string, unknown> = Record<string, unknown>
> = {
  event: E;
} & (Data extends { event: unknown } ? never : Data);
