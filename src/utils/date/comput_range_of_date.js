import dayjs from "dayjs";

export function computeRangeDate(startDate, endDate) {
    return dayjs(startDate).diff(endDate, "day")
}


