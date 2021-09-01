# React Stepper

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
* `stepIds: string[]`

### Returns
* `currentStepId: string`

* `currentStepIndex: number`

* `goToNextStep: () => void`

* `goToPreviousStep: () => void`

* `isFirstStep: boolean`

* `isLastStep: boolean`