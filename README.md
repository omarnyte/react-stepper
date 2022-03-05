# React Stepper
[![Node.js CI](https://github.com/omarnyte/react-stepper/actions/workflows/test.yml/badge.svg)](https://github.com/omarnyte/react-stepper/actions/workflows/test.yml)
[![npm version](https://badge.fury.io/js/@xolos%2Freact-stepper.svg)](https://badge.fury.io/js/@xolos%2Freact-stepper)

A simple, flexible React step wizard hook.

## Installation
```
npm install @xolos/react-stepper
```
or 
```
yarn add @xolos/react-stepper
```
This library has peerDependencies listings for `react` and `react-dom`.

## Example
```jsx
import React from 'react';
import useStepper from '@xolos/react-stepper';

const stepIds = ['foo', 'bar', 'buzz'];
function App() {
  const {
    currentStepId,
    goToNextStep,
    goToPreviousStep,
  } = useStepper(stepIds);
  
  return (
    <div className="App">
      <button onClick={goToPreviousStep}>Previous Step</button>
      <button onClick={goToNextStep}>Next Step</button>
      <h1>{currentStepId}</h1>
    </div>
  );
}

export default App;

```

## API
```jsx
const {
  currentStepId,
  currentStepIndex,
  goToNextStep,
  goToPreviousStep,
  isFirstStep,
  isLastStep
} = useStepper(stepIds)
```
### Options
* `stepIds: Array<string | number>`

### Returns
* `currentStepId: string | number`

* `currentStepIndex: number`

* `goToNextStep: () => void`

  The stepper will loop to the first step if moving past the last step.

* `goToPreviousStep: () => void`

  The stepper will loop to the last step if moving past the first step.

* `isFirstStep: boolean`

* `isLastStep: boolean`