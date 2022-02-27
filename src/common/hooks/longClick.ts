//1초 이상 터치 후 boolean state 값을 바꿉니다.

let startTime = 0;

export const touchStart = () => {
    startTime = Date.now();
}

export const touchEnd = (setIsLongClick: any) => {
    const overtime = Date.now() - startTime;
    if(overtime > 1000){
        setIsLongClick(true)
    }
}