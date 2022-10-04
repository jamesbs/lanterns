import { Receiver, ReceiverId } from "./receiver.ts";
import { Event } from "./event.ts";

export type Emitter<E extends Event> = {
  emit: (event: E) => void;
};

export type Observable<E extends Event> = {
  listen: (handler: (event: E) => void) => Listener;
};

export type EventStream<E extends Event> = Emitter<E> & Observable<E>;

export type Listener = {
  stop: () => void;
};

export const createEventStream = <E extends Event>(): EventStream<E> => {
  let idIndex: ReceiverId = 0;

  const receivers = new Map<ReceiverId, Receiver<E>>();

  return {
    emit: (event: E) => {
      for (const [, { handler }] of receivers) {
        handler(event);
      }
    },

    listen: (handler: (event: E) => void) => {
      const id = ++idIndex;

      receivers.set(id, {
        id,
        handler,
      });

      return {
        stop: () => {
          receivers.delete(id);
        },
      };
    },
  };
};
