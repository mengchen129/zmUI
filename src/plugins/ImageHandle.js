const EMPTY_FUNCTION = function() {};
const IDENTITY_FUNCTION = function(data) { return data; };

/**
 * 图片处理一条龙
 * FileReader -> Clip -> Upload
 * 限制：
 * 1、使用 axios 和 qs 作为 Ajax HTTP 客户端
 * 2、使用图像的 Base64 编码进行 POST 上传
 */
export default class ImageHandle {
    constructor({ ajaxObj, file, uploadUrl, uploadKey, clipSizeLong, clipSizeShort, beforeUploadCallback, jsonReader, finishCallback }) {
        if (!file) { throw new Error('参数 file 不能为空');}
        if (!uploadUrl) { throw new Error('参数 uploadUrl 不能为空'); }
        if (!uploadKey) { throw new Error('参数 uploadKey 不能为空'); }

        this.axios = ajaxObj.axios;
        this.qs = ajaxObj.qs;
        if (!this.axios || !this.qs) {
            throw new Error('请将 axios 和 qs 对象通过 ajax-obj-get-func 属性传入');
        }

        this.file = file;
        this.uploadUrl = uploadUrl;
        this.uploadKey = uploadKey;
        this.clipSizeLong = clipSizeLong;
        this.clipSizeShort = clipSizeShort;
        this.beforeUploadCallback = beforeUploadCallback || EMPTY_FUNCTION;
        this.jsonReader = jsonReader || IDENTITY_FUNCTION;
        this.finishCallback = finishCallback || EMPTY_FUNCTION;
    }

    /**
     * 使用 FileReader 读取图片
     * @returns {Promise}
     */
    readFile() {
        return new Promise((resolve, reject) => {
            let fileReader = new FileReader();
            fileReader.onload = function(e) {
                let dataURL = e.target.result;
                resolve(dataURL);
            };
            fileReader.onerror = function(e) {
                reject(e);
            };
            fileReader.readAsDataURL(this.file);
        });
    }

    /**
     * 使用 Canvas 裁剪图片，如果不设置裁剪高度或宽度，则不裁剪
     * @param dataURL
     * @returns {Promise}
     */
    clip(dataURL) {
        return new Promise((resolve, reject) => {
            if (!this.clipSizeLong || !this.clipSizeShort) {
                resolve(dataURL);
                return;
            }

            let img = new window.Image();
            img.src = dataURL;
            img.onload = () => {
                let isVertical = img.width < img.height;

                let canvas = document.createElement('canvas');
                let ctx = canvas.getContext('2d');
                canvas.width = isVertical ? this.clipSizeShort : this.clipSizeLong;
                canvas.height = isVertical ? this.clipSizeLong : this.clipSizeShort;
                let RATIO = canvas.width / canvas.height;
                let cutx = 0,
                    cuty = 0,
                    cutw = img.width,
                    cuth = img.height;

                if (cutw / cuth > RATIO) {
                    // 宽超过比例了]]
                    let realw = cuth * RATIO;
                    cutx = (cutw - realw) / 2;
                    cutw = realw;
                } else if (cutw / cuth < RATIO) {
                    // 长超过比例了]]
                    let realh = cutw / RATIO;
                    cuty = (cuth - realh) / 2;
                    cuth = realh;
                }
                ctx.drawImage(img, cutx, cuty, cutw, cuth, 0, 0, canvas.width, canvas.height);
                let ndata = canvas.toDataURL('image/jpeg', 1);
                resolve(ndata);
            };

            img.onerror = function() {
                reject();
            };
        });
    }

    /**
     * 使用 axios 上传图片 base64 编码
     * @param imgData
     * @returns {*}
     */
    upload(imgData) {
        let base64Index = imgData.indexOf('base64,');
        let imgBase64Data = imgData.substring(base64Index + 'base64,'.length);

        return this.axios.post(this.uploadUrl, this.qs.stringify({[this.uploadKey]: imgBase64Data}));
    }

    /**
     * 执行全部操作
     * 读取 -> 压缩 -> 上传
     */
    doAll() {
        this.readFile()
        .then(dataURL => this.clip(dataURL))
        .then(imgData => {
            setTimeout(() => {
                this.beforeUploadCallback(imgData);
            }, 0);
            return this.upload(imgData);
        })
        .then(resp => {
            let result = resp.data;
            let url = this.jsonReader(result);
            this.finishCallback(url);
        });
    }
}