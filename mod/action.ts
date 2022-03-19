export type Action<T extends string, P extends Record<Exclude<string, 'type'>, unknown> = Record<never,never>> = keyof P extends never ? {
  type: T
} : { type: T } & P;
