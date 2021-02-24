import {
    Home
} from './home-model'
var home = new Home()
// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this._loadData()
    },
    _loadData: function () {
        const id = 1
        home.getBannerData(id, (res) => {
            this.setData({
                'bannerArr': res
            })
        });
        home.getThemeData((res) => {
            this.setData({
                'themeArr': res
            })
        })
        home.getProductsData((res) => {
            this.setData({
                'productsArr': res
            })
        })
    },
    onProductsItemTap: function (event) {
        const id = home.getDataSet(event, 'id')
        wx.navigateTo({
            url: '../product/product?id=' + id,
        })
    },
    onThemesItemTap: function (event) {
        const id = home.getDataSet(event, 'id')
        const name = home.getDataSet(event, 'name')
        wx.navigateTo({
            url: '../theme/theme?id=' + id + '&name=' + name,
        })
    }
})