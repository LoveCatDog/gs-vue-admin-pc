import FileSaver from 'file-saver'
import XLSX from 'xlsx'

export function exportTable(value) {
    let _this = this;
    var file = event.currentTarget.files[0];
    var rABS = false; //是否将文件读取为二进制字符串
    var newData = [];
    return FileReader.prototype.readAsBinaryString = function (f) {
        console.log('1111')
        var binary = "";
        var rABS = false; //是否将文件读取为二进制字符串
        var pt = this;
        var workbook; //读取完成的数据
        var excelData = [];
        var reader = new FileReader();

        // reader.onprogress = function (e) {
        //     let total = file.size;
        //     // _this.progress = (e.loaded / total) * 100;
        // };
        reader.onload = function (e) {
            try {
                var bytes = new Uint8Array(reader.result);
                var length = bytes.byteLength;
                for (var i = 0; i < length; i++) {
                    binary += String.fromCharCode(bytes[i]);
                }
                if (rABS) {
                    workbook = XLSX.read(btoa(fixdata(binary)), {
                        //手动转化
                        type: "base64"
                    });
                } else {
                    workbook = XLSX.read(binary, {
                        type: "binary"
                    });
                }
            } catch (e) {
                console.log("文件类型不正确", e);
                return;
            }
            var fromTo = "";
            for (var sheet in workbook.Sheets) {
                if (workbook.Sheets.hasOwnProperty(sheet)) {
                    fromTo = workbook.Sheets[sheet]["!ref"];
                    newData = newData.concat(
                        XLSX.utils.sheet_to_json(workbook.Sheets[sheet]) //将工作表对象转换为JSON对象数组
                    );
                    // return dateTransition(newData); //获取表格中json数据，属性值为中文，需要将属性转换为自定义的英文key
                    console.log('newData', newData)
                    // return newData
                }
            }
            console.log('newData===>', newData)
            return newData;
        };
        reader.readAsArrayBuffer(f);


    };

    var reader = new FileReader();
    if (rABS) {
        reader.readAsArrayBuffer(file);
    } else {
        reader.readAsBinaryString(file);
    }
}

// 将对应的中文key转化为自己想要的英文key
export function dateTransition(outdata) {
    let list = [];
    var obj = {};
    for (var i = 0; i < outdata.length; i++) {
        obj = {};
        for (var key in outdata[i]) {
            if (key == "地址") {
                obj["date"] = outdata[i][key];
            } else if (key == "姓名") {
                obj["name"] = outdata[i][key];
            } else if (key == "日期") {
                obj["address"] = outdata[i][key];
            }
        }
        list.push(obj);
    }
    return list;
}