//work with mobx
//'makeAutoObservable' - keeps track that if the variables are changed, the object will be re-rendered
import {makeAutoObservable} from 'mobx'


export default class DeviceStore {
    constructor() { //is called when an object of this class is created
        //variables with '_' cannot be changed
        this._types = [
            { id: 4, name: "washing"},
            { id: 6, name: "tv" }
        ];

        this._brands = [
            { id: 1, name: "apple" },
            { id: 5, name: "sumsung"},
            { id: 6, name: "beko"}
        ];

        this._devices = [
            {id:2, name: "phone_sumsung_gaalaxy", price:500, rating: 0, img: "https://images.prom.ua/4138628744_w640_h640_samsung-galaxy-s7.jpg"},
            {id:3, name: "fridge_beko", price:800, rating: 0, img: "https://content1.rozetka.com.ua/goods/images/big/26938015.jpg"},
            {id:4, name: "fridge_bosh", price:700, rating: 0, img: "https://store-wc.athom.com/wp-content/uploads/2019/11/Bosch-Free-standing-fridge-freezer-closed.png"},
            {id:5, name: "washing_mashine_bosh", price:600, rating: 0, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpwLqSMYOFJ0SOktftoWl9q154QGVZF9grw&usqp=CAU"},
        ];
        makeAutoObservable(this)//this - context of the current class, automatically marks all fields of the class as observable
    }

    //actions - functions that change the 'observable field'
    setTypes(types) {
        this._types  = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    //computed values -> returns a new value, updating of calculable values - 'observable state'
    //if computed values === observable field ->  not trigger
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

}