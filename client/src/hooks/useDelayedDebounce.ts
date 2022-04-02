import { useEffect, useRef } from 'react';

type UseDelayedDebounceConfig = {
	delay?: number;
	dependencies: any[];
	callbackFn: () => void;

};

export function useDelayedDebounce({ delay = 1000, dependencies, callbackFn }: UseDelayedDebounceConfig) {
	const delayDebounceTimeout = useRef<NodeJS.Timeout>();

	useEffect(() => {
		delayDebounceTimeout.current = setTimeout(callbackFn, delay);

		return () => {
			if (delayDebounceTimeout.current) {
				clearTimeout(delayDebounceTimeout.current);
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [delay, ...dependencies]);
}
