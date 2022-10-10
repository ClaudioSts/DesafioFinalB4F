import { useState } from "react";

export function input(evt) {
  const value = evt.target.value;
  setInputs({
    ...input,
    [evt.target.name]: value,
  });
}
