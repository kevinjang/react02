import React,{Suspense} from 'react'
import {unstable_createResource as createResource} from 'react-cache'

// class SuspendComp extends React.Component{
// }

const getHello = ()=>{
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('开课吧真不错')
        },3000)
    })
}

const resource = createResource(getHello)

const HelloWorld = ()=>{
    return <div>哈喽啊 {resource.read()}</div>
}   

const SuspendComp = ()=>{
    return <Suspense fallback={<div>加载中...</div>}>
        {/*用Suspense包裹后支持异步获取数据 */}
        <HelloWorld></HelloWorld>
    </Suspense>
}

class App extends React.Component{
    render(){
        return <SuspendComp></SuspendComp>
    }
}

export default App