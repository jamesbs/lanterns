import { lantern } from "../mod/lantern.ts";

const ButtonClicked = 'button-clicked'

type ButtonClicked = {
  type: typeof ButtonClicked
}

export const buttonClicked = lantern<ButtonClicked>(ButtonClicked)