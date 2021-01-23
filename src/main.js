import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

/* *******接收postMessage传值开始******** */

window.addEventListener("message", (e) => {
    if (e.source != window.parent) return;
    let data = {
        cmd: "我是子组件,我接收到了父组件传来的数据，并通知父组件",
        params: {
            messge: "我是子组件",
            id: "son",
        },
    };
    console.log("我是子组件，我终于成功了-------PostMessage", e)
    store.state.postdata = e.data.cmd
    console.log("我store.state.postdata", store.state.postdata)
    window.parent.postMessage(data, "*");
});
/* *******接收postMessage传值结束******** */
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')