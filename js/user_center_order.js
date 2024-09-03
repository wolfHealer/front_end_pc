var vm = new Vue({
    el: '#app',
    data: {
        host,
        username: '',
        orders: [],
    },
    mounted: function () {
        // 获取cookie中的用户名
        this.username = getCookie('username');
        this.get_order_info()
    },
    methods: {
        // 退出登录按钮
        logoutfunc: function () {
            var url = this.host + '/logout/';
            axios.delete(url, {
                responseType: 'json',
                withCredentials:true,
            })
                .then(response => {
                    location.href = 'login.html';
                })
                .catch(error => {
                    console.log(error.response);
                })
        },
        // 获取用户所有订单
        get_order_info: function () {
            axios.get(this.host + '/orders/info/', {
                responseType: 'json',
                withCredentials: true
            })
                .then(response => {
                    this.orders = response.data.orders;
                })
                .catch(error => {
                    console.log(error)
                })
        },
    }
});