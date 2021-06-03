/**
 * @author WMXPY
 * @namespace TimeReact
 * @description Interval
 */

import * as React from "react";
import { IntervalFunction } from "./declare";

export const useInterval = (intervalFunction: IntervalFunction, interval: number) => {

    const refIntervalFunction: React.MutableRefObject<IntervalFunction> = React.useRef();

    React.useEffect(() => {

        refIntervalFunction.current = intervalFunction;
    }, []);

    React.useEffect(() => {

        const timer = setInterval(() => {

            if (typeof refIntervalFunction.current === 'function') {
                refIntervalFunction.current();
            }
        });

        return () => {

            clearInterval(timer);
        }
    }, [interval]);
};
