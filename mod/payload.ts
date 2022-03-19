import type { Action } from './action.ts'

export type Payload<A extends Action<string, Record<string, unknown>>> = keyof A extends 'type' ? undefined : Omit<A, 'type'>