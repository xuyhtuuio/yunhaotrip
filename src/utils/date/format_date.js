import dayjs from "dayjs";

function format_date(date) {
    return dayjs(date).format("MM月DD日")
}


export default format_date
