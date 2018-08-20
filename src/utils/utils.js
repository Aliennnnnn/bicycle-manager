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
    },
    pagination(data, callback){
        return {
            onChange:(current)=>{
                callback(current)
            },
            current: data.result.page,
            pageSize: data.result.page_size,
            total: data.result.total,
            showTotal: () => {
                return `共${data.result.total}条`
            },
            showQuickJumper: true
        }
    }
}