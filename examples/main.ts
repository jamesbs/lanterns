import { line } from "../mod/line.ts";
import { buttonClicked } from "./button-clicked.ts";
import { inputChanged } from "./input-changed.ts";


const mainline = line()

mainline.on(buttonClicked, (action) => {
  console.log('button was clicked!', action)
})

mainline.on(inputChanged, (action) => {
  console.log('input value changed!', action, action.value)
})


mainline.emit(inputChanged({ value: 'first name' }))
mainline.emit(buttonClicked());
mainline.emit(inputChanged({ value: 'justin' }))