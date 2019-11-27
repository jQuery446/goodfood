const BASE_URL = 'http://rap2api.taobao.org/app/mock/237288/get'
function generalGET(url,data={},method="GET"){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+url,
			method,
			data,
			success: (res) => {
				resolve(res)
			},
			fail:(err)=>{
				reject(err)
			}
		})
	})
}

// axios.get().then()
// generalGET().then((res)=>{
// 	console.log(res)
// }).catch((err)=>{
// 	console.log(err)
// })

// pending 
// resolve  成功
// reject  失败

export {
	generalGET
}