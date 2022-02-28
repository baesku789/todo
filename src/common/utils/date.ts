// |2022-2-28 월| 형식으로 반환
export const getFormattedToday = () => {
    const today = new Date();
    const days = ['월', '화', '수', '목', '금', '토', '일']
    const getDays = days[today.getDay()-1]
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${getDays}`;
}

