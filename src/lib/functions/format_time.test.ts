import { formatTime } from '$functions/format_time';
import { test, expect } from 'vitest';

test('format time function', () => {
	const formated_time = new formatTime(1600);
	expect(formated_time.formatSecondsToMinutes).toBe(26);
	expect(formated_time.formatSecondsToTimeStampDuration).toBe('26:40');
});
