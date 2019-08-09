# 在React中集成Axios

比对了一下，目前使用量最高的http库是axios。因此决定在react-redux-demo中使用axios发送http请求。

首先安装axios

```typescript
yarn add axios
```

在实际场景中，大多数都是通过页面触发action来发送http请求的。 因此在Reducer中引入axios并发送请求。 所以在 `reducers/index.ts` 中使用axios。

```typescript
import axios from 'axios';
```
   <br />这样就直接引入了axios。然后发送一个Get请求:

```typescript
						case INCREMENT:
            axios.get('http://devex.yqxiu.cn').then(
                res=>{
                    console.log(res)
                }
            )
            return {
                value: state.value + 1
            }
```

当在页面中点击 `+` 按钮时，就会同步发送Get请求。 后续就可以根据返回结果更新state数据。 

其余使用方式可以参考axios官方文档。 


