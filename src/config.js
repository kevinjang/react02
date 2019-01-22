import React from 'react'

const withLog = Component => {
    class NewComponent extends React.Component{
        componentWillMount(){
            console.time('ComponentRender')
            console.log(`组件${Component.name}准备渲染了`)
        }
        render(){
            return <Component {...this.props}></Component>
        }
        componentDidMount(){
            console.timeEnd('ComponentRender')
            console.log(`组件${Component.name}渲染完毕了`)
        }
    }

    return NewComponent
}

export {withLog}