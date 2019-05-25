import { fromEvent } from 'rxjs';

const bodyEvent = fromEvent(document, 'DOMContentLoaded');
const bodyAddClass = (className: string) => {
  const body = document.body;
  body.classList.add(className);
}
bodyEvent.subscribe(
  () => bodyAddClass('render')
);