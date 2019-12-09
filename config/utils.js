function setParamSign(params) {
    if (params) {
        var sign = md5(params);
        if (typeof params == "string") {
            params += ("&sign=" + sign);
        }
        else {
            params["sign"] = sign;
        }
    }
    return sign;
}
function jsonSort(jsonObj) {
    var arr=[];
    for(var key in jsonObj){
        arr.push(key)
    }
    arr.sort();
    var str='';
    for(var i in arr){
        str +=jsonObj[arr[i]]
    }

    return str
}
function getDate(){

    var myDate = new Date();
    //获取当前年
    var year = myDate.getFullYear();
    //获取当前月
    var month = myDate.getMonth() + 1;
    //获取当前日
    var date = myDate.getDate();
    var h = myDate.getHours(); //获取当前小时数(0-23)
    var m = myDate.getMinutes(); //获取当前分钟数(0-59)
    var s = myDate.getSeconds();
    //获取当前时间
    var now = year + '-' + conver(month) + "-" + conver(date) + " " + conver(h) + ':' + conver(m) + ":" + conver(s);
    return now;
}
function conver(s) {
    return s < 10 ? '0' + s : s;
}