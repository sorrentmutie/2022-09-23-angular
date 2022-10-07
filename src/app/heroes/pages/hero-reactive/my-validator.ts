import { AbstractControl } from "@angular/forms";

export function MyValidator (control: AbstractControl) {
  const valore = control.value;
  if(!valore.startsWith('Sal')) {
    return { myValidator: true }
  }
  return null;
}
