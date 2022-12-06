import axios from "axios"
import { mapGetters } from "vuex"
export default {
    name: 'HomePage',
    data() {
        return {
            message: {},
            categorylist: {},
            searchkey: '',
            Loginstatus : false,
            Status:false,
        }
    },
    computed:{
        ...mapGetters(['getToken'])
    },
    methods: {
        getalldata() {
            axios.get('http://localhost:8000/api/allpostlist').then((response) => {
                for (let i = 0; i < response.data.data.length; i++) {
                    if (response.data.data[i].image != null) {
                        response.data.data[i].image = 'http://127.0.0.1:8000/storage/' + response.data.data[i].image;
                    } else {
                        response.data.data[i].image = 'http://127.0.0.1:8000/image/default-upload-image.jpeg';
                    }
                }

                this.message = response.data.data;

            })
        },

        getcategory() {
            console.log('hello')
            axios.get('http://localhost:8000/api/getcategory').then((response) => {
                this.categorylist = response.data.data
            }).catch(e => {
                console.log(e)
            })

        },
        search() {
            let searchdata = {
                key: this.searchkey,
            }
            axios.post('http://localhost:8000/api/searchpost', searchdata).then((response) => {
                for (let i = 0; i < response.data.data.length; i++) {
                    if (response.data.data[i].image != null) {
                        response.data.data[i].image = 'http://127.0.0.1:8000/storage/' + response.data.data[i].image;
                    } else {
                        response.data.data[i].image = 'http://127.0.0.1:8000/image/default-upload-image.jpeg';
                    }
                }
                this.message = response.data.data
            })

        },

        searchitem(searchkey) {
            let datapost = {
                key: searchkey,
            }
            axios.post('http://localhost:8000/api/searchcategory', datapost).then((response) => {
                for (let i = 0; i < response.data.data.length; i++) {
                    if (response.data.data[i].image != null) {
                        response.data.data[i].image = 'http://127.0.0.1:8000/storage/' + response.data.data[i].image;
                    } else {
                        response.data.data[i].image = 'http://127.0.0.1:8000/image/default-upload-image.jpeg';
                    }
                }
                this.message = response.data.data
            })
        },

        datasent(id) {
            this.$router.push({
                name: "detailpage",
                params:{
                    id : id ,
                }
            });
        },
        loginpage(){
            this.$router.push({
                name : 'loginpage',
            })
        },
        homepage(){
            this.$router.push({
                name : 'HomePage',
            })
        },
        checkToken(){
            if(this.getToken != null && this.getToken != undefined && this.getToken != ''){
                this.Loginstatus = true;
                this.Status = true;
            }else{
                this.Loginstatus = false;
               
            }
        },
        accountlogout(){
            this.$store.dispatch("setToken",null);
            this.loginpage();
        }
    },
    mounted() {
        this.checkToken();
        this.getalldata();
        this.getcategory();
        console.log(this.getToken)

       
    },
}