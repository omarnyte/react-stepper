import { useState } from "react";

const useStepper = (stepIds: string[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const currentStepId = stepIds[currentStepIndex];

  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === stepIds.length - 1;

  const goToPreviousStep = () => setCurrentStepIndex(currentStepIndex - 1);
  const goToNextStep = () => setCurrentStepIndex(currentStepIndex + 1);

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