/**
 * @author WMXPY
 * @namespace TimeReact
 * @description Interval
 */

import * as React from "react";
import { IntervalFunction } from "./declare";

export const useInterval = (intervalFunction: IntervalFunction, interval: number | null) => {

    const refIntervalFunction: React.MutableRefObject<IntervalFunction> = React.useRef();

    React.useEffect(() => {

        refIntervalFunction.current = intervalFunction;
    }, [intervalFunction]);

    React.useEffect(() => {

        if (typeof interval !== 'number') {

            return;
        }

        const timer = setInterval(() => {

            if (typeof refIntervalFunction.current === 'function') {
                refIntervalFunction.current();
            }
        }, interval);

        return () => {

            clearInterval(timer);
        }
    }, [interval]);
};
