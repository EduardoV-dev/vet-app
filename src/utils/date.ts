/**
 * @param date Date to format
 * @returns formatted date in the next format: 'mm dd, yyyy'
 */
export const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(
        date,
    );
    const day = date.getDate();

    return `${month} ${formatDay(day)}, ${year}`;
};

type TDaySuffixes = {
    [key: number]: string;
};

const daySuffixes: TDaySuffixes = {
    0: 'th',
    1: 'st',
    2: 'nd',
    3: 'rd',
};

/**
 * @param day Day to add suffix to
 * @returns day with suffix, depending on the day number the suffix could be 'st', 'nd', 'rd' or 'th'
 */
const formatDay = (day: number): string => {
    const dayToString: string = day.toString();
    const lastNumber: number = +dayToString.charAt(dayToString.length - 1);

    return `${day}${daySuffixes[lastNumber > 3 ? 0 : lastNumber]}`;
};
