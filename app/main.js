import sayHello from './moduleOne'
import sayBye from './moduleTwo'

const myApp = ()=>{
    sayHello();
    sayBye()
};

myApp();