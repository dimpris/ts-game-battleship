import { sayHello } from "./greet";

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  console.log('name', name);
  elt.innerText = sayHello(name);
}

showHello("greeting", "TypeScript");