import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(localeData);
dayjs.extend(relativeTime);

export class formatDate {
	#date: dayjs.Dayjs;

	constructor(date: string) {
		this.#date = dayjs(date);
	}

	public get formatToHumanReadableForm() {
		return `${dayjs().localeData().monthsShort(this.#date)} ${this.#date.format(
			'D'
		)}, ${this.#date.format('YYYY')}`;
	}

	public get formatToTimeFromNow() {
		/**
		 * Format date into Time From Now format
		 * suffix will be "ago" or "in"
		 * @example
		 * Here's a simple example
		 * // input "2023-04-22T10:30:00.000Z"
		 * // output "20 hours ago"
		 */
		return dayjs(this.#date).fromNow();
	}

	public get formatToSeason() {
		let season: string;

		const month = this.#date.month();
		if (month >= 2 && month <= 4) {
			season = 'spring';
		} else if (month >= 5 && month <= 7) {
			season = 'summer';
		} else if (month >= 8 && month <= 10) {
			season = 'autumn';
		} else {
			season = 'winter';
		}

		const formattedDate = `${season} ${this.#date.format('YYYY')}`;
		return formattedDate;
	}
}
