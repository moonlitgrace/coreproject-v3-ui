import { formatTime } from '$functions/formatTime';
import { test, expect } from 'vitest';

test('format date function', () => {
	const formated_time = new formatTime(1600);
	expect(formated_time.formatSecondsToMinutes).toBe('26');
	expect(formated_time.formatSecondsToTimeStampDuration).toBe('26:40');
});
