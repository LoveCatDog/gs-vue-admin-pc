export function getTime(time, cFormat) {
    // 查看参数个数，若个数为0则不走以下逻辑
    if (arguments.length === 0) {
        return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
    let date;
    if (typeof time === 'object') {
        date = time
    } else {
        if (('' + time).length === 10) { //变成string类型
            // time = parseInt(time) * 1000
            date = new Date();
        }
    }
    const formatObj = {
        y: date.getFullYear(), //获取年
        m: date.getMonth() + 1, //获取月
        d: date.getDate(), //获取日
        h: date.getHours(), //获取时
        i: date.getMinutes(), //获取分
        s: date.getSeconds(), //获取秒
        a: date.getDay(), //获取礼拜
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key];
        // 如果有星期
        if (key === 'a') {
            let dateList = ['一', '二', '三', '四', '五', '六', '七'];
            return dateList[value - 1]
        }
        if (result.length > 0 && value < 10) { //如果时间中有个数的话则在十位数添加"0""
            value = '0' + value
        }
        return value || 0
    })
    return time_str
}
export function formatTime(time, option) {
    if (arguments.length === 0) {
        return null
    }

    if (typeof time === 'object') {
        const now_day = new Date().getTime(); //当前的值
        const old_day = new Date(time).getTime(); //获取传入的时间
        let diff = old_day - now_day
        console.log('now_day', now_day, 'old_day', old_day, 'diff', diff)

    }
    return '11'
}