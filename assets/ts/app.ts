import { fromEvent } from 'rxjs';

const bodyEvent = fromEvent(window, 'load');
const bodyAddClass = (className: string) => {
  const body = document.body;
  body.classList.add(className);
}
bodyEvent.subscribe(
  () => bodyAddClass('render')
);