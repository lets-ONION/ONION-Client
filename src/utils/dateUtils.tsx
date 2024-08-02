export const getFormattedDate = () => {
    const today = new Date();
    const daysOfWeek = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];
    const dayIndex = today.getDay();
    const dayName = daysOfWeek[dayIndex];

    return `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${dayName}`;
};
