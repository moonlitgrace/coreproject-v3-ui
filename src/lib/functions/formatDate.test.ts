import { formatDate } from '$functions/formatDate';
import { test, expect } from 'vitest';

test('format date function', () => {
	const formated_date = new formatDate('2023-03-11T02:37:40.790Z');

	expect(formated_date.formatToHumanReadableForm).toBe('Mar 11, 2023');
	expect(formated_date.formatToSeason).toBe('spring 2023');
});
