import axios from "axios";
export default (appUrl, data = {}) => {
    let headers = {
        'brand_id': '1',
        'content-type': 'application/json',
        'x-resource-code': appUrl['resourceId'] || '',
        'x-app-code': 'BAEMP',
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': 'XMLHttpRequest'
    }
    console.log("MenuInfo====cookie", localStorage.getItem('MenuInfo'));
    let url =   appUrl.path;
    if (appUrl.path == "/getMenuInfo") {
        let str = new RegExp("/web/ibuick");
        url = url.replace(str, "");
    }
    if (appUrl.path == "/upload") {
        headers = {
            'content-type': 'multipart/form-data'
        };
    }
    console.log(111, data, 222, appUrl, 333, url);
    return new Promise((resolve, reject) => {
        axios.request({
                url: url,
                headers: headers,
                method: 'POST',
                data: data.data
            })
            .then((res) => {
                    if(res.data.data==null){
                        res.data.message="数据库错误！"
                    }
                    resolve(res.data);

            })
            .catch((error) => {
                //DP没有开通访问中台权限
                if (error.response.status == 401) {
                    console.log("DP没有开通访问中台权限", error.response);
                } else if (error.response.status == 405) {
                    //该用户没有系统访问权限
                    console.log("DP没有开通访问中台权限", error.response);
                } else if (error.response.status == 511) {
                    //提示前台根据response的redirectTo属性 定义的url跳转
                    console.log("提示前台根据response的redirectTo属性 定义的url跳转", error.response);
                    location.href = error.response.data.redirectTo;
                } else if (error.status == 582) {
                    // 提示渲染反爬虫用的验证码图片
                    console.log("提示渲染反爬虫用的验证码图片", error.response);
                } else if (error.status == 584) {
                    // 错误信息提示
                    console.log("错误信息提示", error.response);
                } else if (error.status == 591) {
                    // 提示前台根据response的data  属性渲染选岗页面
                    // this.$store.commit('initLoginInfo', error.data);
                    location.href = error.response.data.redirectTo;

                } else if (error.status == 502) {
                    console.log("502", error.response);
                    location.href = error.response.data.redirectTo;
                } else {
                    //全局处理异常
                    // reject(error);
                    console.log("全错错错", error);
                }
                reject(error);
            })
    })
}