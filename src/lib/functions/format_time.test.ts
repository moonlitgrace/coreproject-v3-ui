import { format_time } from '$functions/format_time';
import { test, expect } from 'vitest';

test('format date function', () => {
	const formated_time = new format_time(1600);
	expect(formated_time.formatSecondsToMinutes).toBe('26');
	expect(formated_time.formatSecondsToTimeStampDuration).toBe('26:40');
});
