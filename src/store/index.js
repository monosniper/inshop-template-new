import {makeAutoObservable} from "mobx";
import * as i18n from "i18next";

class Store {
    PRODUCT_TYPE = 'PRODUCT'

    isMenuShow = false
    isSubMenuShow = false

    options = {}
    uuid = []
    shopMedia = []
    categories = []
    positions = []
    modules = []
    tags = []
    customPages = []

    constructor() {
        makeAutoObservable(this)
    }

    toggleMenu = () => this.isMenuShow = !this.isMenuShow
    toggleSubMenu = () => this.isSubMenuShow = !this.isSubMenuShow

    setCategories = (categories) => this.categories = categories
    setTags = (tags) => this.tags = tags
    setPositions = (positions) => this.positions = positions
    setModules= (modules) => this.modules = modules
    setShopMedia = (shopMedia) => this.shopMedia = shopMedia
    setUuid = (uuid) => this.uuid = uuid
    setOptions = (options) => this.options = options
    setCustomPages = (customPages) => this.customPages = customPages

    setShop = async (shop) => {
        console.log(shop)
        this.setPositions(shop.Positions)
        this.setShopMedia(shop.Media)
        this.setModules(shop.Modules)
        this.setOptions(shop.options)
        this.setUuid(shop.uuid)
        this.setCategories(shop.Categories)
        this.setTags(shop.Tags)
    }

    hasModule = (_slug) => this.modules.find(({ slug, Shop_Module: { isActive } }) => _slug === slug && isActive)
    getModule = (_slug) => this.modules.find(({slug}) => _slug === slug).Shop_Module.options
}

export default new Store()