import dayjs from 'dayjs';
import type { Duration } from 'dayjs/plugin/duration';
import duration from 'dayjs/plugin/duration';

export class formatTime {
	#duration: Duration;

	constructor(time: number) {
		dayjs.extend(duration);
		this.#duration = dayjs.duration(time, 'seconds');
	}

	public get formatSecondsToTimeStampDuration() {
		const timeString = this.#duration.format('mm:ss');
		return timeString;
	}

	public get formatSecondsToMinutes() {
		const timeString = Math.floor(this.#duration.asMinutes());
		return timeString;
	}
}
