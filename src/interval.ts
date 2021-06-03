/**
 * @author WMXPY
 * @namespace TimeReact
 * @description Interval
 */

import * as React from "react";

export const useIntervalTime = (interval: number, startTime: Date = new Date()) => {

    const startTimeValue: number = startTime.getTime();

    React.useEffect(() => {

    }, [
        startTimeValue,
    ]);
};
