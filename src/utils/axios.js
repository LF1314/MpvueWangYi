
//配置小程序的请求网易云数据的接口

const baseUrl = 'http://47.100.6.121:3000'

class xhr {   
    static htt(url,data,method){
        let header =  {
            'Content-Type': 'application/json'
           }
       return new Promise((resolve,reject)=>{
           wx.request({
                url:baseUrl+url,
                data,
                header,
                method,
                success(res){
                    console.log(res.data)
                    resolve(res.data)
                },
                fail(err){
                    reject(err)
                }
               })

       })
    }
    static get(url,data){
        return this.htt(url,data,'get')
    }

    
}
export default xhr
















