import { fromEvent } from "rxjs";
import init from "./sw";

init();

const bodyEvent = fromEvent(document, "DOMContentLoaded");
const bodyAddClass = (className: string) => {
  const body = document.body;
  body.classList.add(className);
};
bodyEvent.subscribe(() => bodyAddClass("render"));

let deferredPrompt: Event;

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  // showInstallPromotion();
});

const btn = document.getElementById("installBtn");
btn.addEventListener("click", (e) => {
  console.info("e: ", e);
  console.info("deferredPrompt: ", deferredPrompt);
});
