//work with mobx
//'makeAutoObservable' - keeps track that if the variables are changed, the object will be re-rendered
import {makeAutoObservable} from 'mobx'


export default class UserStore {
    constructor() { //is called when an object of this class is created
        //variables with '_' cannot be changed
        this._isAuth = true //observable field
        this._user = {} //observable field
        makeAutoObservable(this)//this - context of the current class, automatically marks all fields of the class as observable
    }

    //actions - functions that change the 'observable field'
    setIsAuth (bool) {
        this._isAuth = bool
    }
    setUser (user) {
        this._user = user
    }

    //computed values -> returns a new value, updating of calculable values - 'observable state'
    //if computed values === observable field ->  not trigger
    get isAuth () {
        return this._isAuth
    }
    get user() {
        return this._user
    }

}