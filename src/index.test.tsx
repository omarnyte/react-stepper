import { act, renderHook } from '@testing-library/react-hooks';
import useStepper from './index';


describe('useStepper', () => {
	const stepIds = ['first', 'second', 'third'];
	
	it('begins at first step', () => {
		const { result } = renderHook(() => useStepper(stepIds));
		
		expect(result.current.isFirstStep).toBe(true);
		expect(result.current.currentStepIndex).toEqual(0);
		expect(result.current.currentStepId).toEqual(stepIds[0]);
	})

	it('advances to next step after invoking #goToNextStep', () => {
		const { result } = renderHook(() => useStepper(stepIds));
		
		act(() => {
			result.current.goToNextStep();
		})

		expect(result.current.isFirstStep).toBe(false);
		expect(result.current.currentStepIndex).toEqual(1);
		expect(result.current.currentStepId).toEqual(stepIds[1]);
	})

	it('returns to the previous step after invoking #goToPreviousStep', () => {
		const { result } = renderHook(() => useStepper(stepIds));
		
		act(() => {
			result.current.goToNextStep();
		})
		act(() => {
			result.current.goToNextStep();
		})
		act(() => {
			result.current.goToPreviousStep();
		})

		expect(result.current.currentStepIndex).toEqual(1);
		expect(result.current.currentStepId).toEqual(stepIds[1]);
	})

	it('indicates when user is at last step', () => {
		const { result } = renderHook(() => useStepper(stepIds));
		
		act(() => {
			result.current.goToNextStep();
		})
		act(() => {
			result.current.goToNextStep();
		})

		expect(result.current.isLastStep).toBe(true);
	})
});
