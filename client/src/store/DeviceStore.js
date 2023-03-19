//work with mobx
//'makeAutoObservable' - keeps track that if the variables are changed, the object will be re-rendered
import {makeAutoObservable} from 'mobx'
import {type} from "@testing-library/user-event/dist/type";


export default class DeviceStore {
    constructor() { //is called when an object of this class is created
        //variables with '_' cannot be changed
        this._types = [
            { id: 4, name: "washing"},
            { id: 6, name: "tv" },
            { id: 7, name: "phone" },
            { id: 8, name: "fan" },
            { id: 9, name: "fridge" }
        ];

        this._brands = [
            { id: 1, name: "apple" },
            { id: 5, name: "sumsung"},
            { id: 6, name: "beko"}


        ];

        this._devices = [
            {id:2, name: "phone sumsung gaalaxy", price:500, rating: 5, img: "https://images.prom.ua/4138628744_w640_h640_samsung-galaxy-s7.jpg"},
            {id:3, name: "fridge beko", price:800, rating: 5, img: "https://content1.rozetka.com.ua/goods/images/big/26938015.jpg"},
            {id:4, name: "fridge bosh", price:700, rating: 5, img: "https://store-wc.athom.com/wp-content/uploads/2019/11/Bosch-Free-standing-fridge-freezer-closed.png"},
            {id:5, name: "washing mashine bosh", price:600, rating: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpwLqSMYOFJ0SOktftoWl9q154QGVZF9grw&usqp=CAU"},
        ];

        //marked type
        this._selectedType = {};

        this._selectedBrand = {};

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

    //click on a specific type - it is marked
    setSelectedType(type){
        this._selectedType = type
    }

    /**
     * marked specific brand
     * @param brand
     */
    setSelectedBrand(brand){
        this._selectedBrand = brand
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

    get selectedTypes() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }

}