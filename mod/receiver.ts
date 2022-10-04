import { Event } from "./event.ts";

export type ReceiverId = number;

export type Receiver<E extends Event> = {
  id: ReceiverId;
  handler: (event: E) => void;
};
