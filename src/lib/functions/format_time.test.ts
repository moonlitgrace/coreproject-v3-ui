import { format_time } from "$functions/format_time";
import { test, expect } from "vitest";

test("format date function", () => {
    const formated_time = new format_time(1600);
    expect(formated_time.format_seconds_to_minutes).toBe("26");
    expect(formated_time.format_seconds_to_time_stamp_duration).toBe("26:40");
});
