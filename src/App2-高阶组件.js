import React from 'react'
import {Button,message} from 'antd'
import {withLog} from './config.js'

const withKaikeba = (Component)=>{
    const newComp = props=>{
        return <Component {...props} name="开课吧高阶组件测试"></Component>
    }

    return newComp
}

@withKaikeba
@withLog
class App extends React.Component{
    render(){
        return <div>
            <h3>
                xxx
            </h3>
            <h2>{this.props.name}</h2>
        </div>
    }
}

export default withLog(App)