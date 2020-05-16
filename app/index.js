import { display } from "display";
import document from "document";
import clock from "clock";
import { display } from "display";

clock.granularity = `seconds`;

const secondsElement = document.getElementById(`seconds`);

display.addEventListener(
    `change`,
    () => {
        if (display.on && (display.aodActive === false)) {
            clock.granularity = `seconds`;
        } else {
            clock.granularity = `minutes`;
        }
    }
);

clock.addEventListener(
    `tick`,
    (evt) => {
        const timeSeconds = evt.date.getSeconds();
        console.log(evt.date.getSeconds());
        secondsElement.text = timeSeconds;
    }
);
