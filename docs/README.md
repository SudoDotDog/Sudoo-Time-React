# Sudoo-Time-React

[![Build Status](https://travis-ci.com/SudoDotDog/Sudoo-Time-React.svg?branch=master)](https://travis-ci.com/SudoDotDog/Sudoo-Time-React)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Time-React/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Time-React)
[![npm version](https://badge.fury.io/js/%40sudoo%2Ftime-react.svg)](https://badge.fury.io/js/%40sudoo%2Ftime-react)
[![downloads](https://img.shields.io/npm/dm/@sudoo/time-react.svg)](https://www.npmjs.com/package/@sudoo/time-react)

Time Util for React

## Install

```sh
yarn add @sudoo/time-react
# Or
npm install @sudoo/time-react --save
```

## Usage

```tsx
import * as React from "react";
import { useInterval } from "@sudoo/time-react";

export const YourComponent: React.FC = () => {

    const [value, setValue] = React.useState(0);

    useInterval(() => {
        setValue(value + 1);
    }, 1000);

    return (<div>
        {value}
    </div>)
};
```

Change interval value to change it's speed, or pause it by set interval value to `null`;

```tsx
import * as React from "react";
import { useInterval } from "@sudoo/time-react";

export const YourComponent: React.FC = () => {

    const [interval, setIntervalValue] = React.useState(1000);
    const [value, setValue] = React.useState(0);

    useInterval(() => {
        setValue(value + 1);
    }, interval);

    return (<div>
        {value}
        <button 
            onClick={() => {
                setIntervalValue(null);
            }}
        >
            Pause
        </button>
    </div>)
};
```
