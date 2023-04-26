import { format_date } from '$functions/format_date';
import { test, expect } from 'vitest';

test('format date function', () => {
	const formated_date = new format_date('2023-03-11T02:37:40.790Z');

	expect(formated_date.format_to_human_readable_form).toBe('Mar 11, 2023');
	expect(formated_date.format_to_season).toBe('spring 2023');
	expect(formated_date.format_to_time_from_now).toBe('2 months ago');
});
