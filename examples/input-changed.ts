import { lantern } from "../mod/lantern.ts";

const InputChanged = 'input-changed'

type InputChanged = {
  type: typeof InputChanged
  value: string
}

export const inputChanged = lantern<InputChanged>(InputChanged)