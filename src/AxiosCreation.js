import vue from 'vue';
import axios from 'axios';
import vueAxios from 'vue-axios';

vue.use(axios,vueAxios)

export default axios.create({
    baseURL: 'http://localhost:8080',

});