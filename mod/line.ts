import EventEmitter from "https://deno.land/x/events@v1.0.0/mod.ts";

import { Action } from "./action.ts";
import { Lantern } from "./lantern.ts";

export type Line = {
  emit: <A extends Action<string, Record<string, unknown>>>(action: A) => void
  on: <A extends Action<string, Record<string, unknown>>>(lantern: Lantern<A>, handler: (action: A) => void) => void;
}

export const line = (): Line => {
  const line = new EventEmitter()
  
  return {
    emit: (action: Action<string, Record<string, unknown>>) => {
      line.emit(action.type, action)
    },
    on: <A extends Action<string, Record<string, unknown>>>(lantern: Lantern<A>, handler: (action: A) => void) => {
      line.on(lantern.type, (action: A) => {
        handler(action)
      })
    }
  };
}
