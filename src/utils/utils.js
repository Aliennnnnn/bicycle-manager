export default {
    formateDate(time) {
        if(!time) return '';
        let date = new Date(time);
        // 时分秒不足两位前面补0
        let appendZero = (obj) => {
            if(obj<10) return `0${obj}`
            else return obj;
        }
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${appendZero(date.getHours())}:${appendZero(date.getMinutes())}:${appendZero(date.getSeconds())} `
    }
}