import axios from "axios";
import { notification } from "ant-design-vue";

function request(options){
    return axios(options).then(res => {
        console.log(res,'---',res.data)
        return res.data;
    }).catch(err => {
        const { response:{status,statusText } } = err;
        notification.error({
            message: h=>(
                <div>
                    请求错误 <span style='color:red'>{status}</span>:{options.url}
                </div>
            ),
            description: `请求错误 ${status}: ${statusText}`,
        })
        return Promise.reject(err);
    })
}

export default request;