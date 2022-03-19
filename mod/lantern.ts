import { Action } from "./action.ts";
import { Payload } from "./payload.ts";

export type Lantern<A extends Action<string, Record<string, unknown>>> = Payload<A> extends undefined ? {
  type: A['type']
  (): A
} : {
  type: A['type']
  (payload: Payload<A>): A;
}

export const lantern = <A extends Action<string, Record<string, unknown>>>(type: A['type']) => 
  Object.assign((payload: Payload<A>) => {
    if (payload === undefined) {
      return { type }
    } else { 
      return { 
        type,
        ...payload,
      };
    }
  }, { type }) as Lantern<A>;