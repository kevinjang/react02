import React from 'react'
import {store} from './store'
import { Button } from 'antd';

const AppContext = React.createContext();
const {Provider,Consumer} = AppContext


class Demo extends React.Component{
    render(){
        return <Consumer >
            {
                store=>{
                    return <Button type="primary"
                    onClick={()=>store.sayHi()}
                    >{store.name}</Button>
                }
            }
        </Consumer>
        // return <div>xx</div>
    }
}

class App extends React.Component{
    render(){
        return <Provider value={store}>
            <div>
                <p>哈喽</p>
                <Demo></Demo>
            </div>
        </Provider>
        // return <h2>嘿嘿</h2>
    }
}

export default App