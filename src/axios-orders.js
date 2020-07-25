import axios from 'axios';
const instance=axios.create({
    baseURL:'https://burger-app-a6576.firebaseio.com/'
});
export default instance;
