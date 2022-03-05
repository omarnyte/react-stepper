import { useState } from "react";

const useStepper = (stepIds: Array<string | number>) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const currentStepId = stepIds[currentStepIndex];

  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === stepIds.length - 1;

  const goToPreviousStep = () => {
    if (isFirstStep) {
      const lastStepIndex = stepIds.length - 1;
      return setCurrentStepIndex(lastStepIndex);
    }

    const previousStepIndex = currentStepIndex - 1;
    setCurrentStepIndex(previousStepIndex);
  };

  const goToNextStep = () => {
    if (isLastStep) {
      return setCurrentStepIndex(0);
    }

    const nextStepIndex = currentStepIndex + 1;
    setCurrentStepIndex(nextStepIndex);
  }

  return {
    currentStepId,
    currentStepIndex,
    goToNextStep,
    goToPreviousStep,
    isFirstStep,
    isLastStep
  };
};

export default useStepper;