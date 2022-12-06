import axios from "axios"
import { mapGetters } from "vuex";
export default {
    name:'DetailPage',
    data() {
        return {
            postId : 0,
            Apidata :{},
            Status:false,
            viewCount : 0,
        }
    },
    computed:{
        ...mapGetters(['getData']),
    },
    methods: {
        getdata(id){
            let data = {
                postid : id
            };
            axios.post('http://localhost:8000/api/detail',data).then((response) =>{
               if(response.data.data.image != null){
                response.data.data.image = 'http://127.0.0.1:8000/storage/' + response.data.data.image;
               }else{
                response.data.data.image = 'http://127.0.0.1:8000/image/default-upload-image.jpeg';
               }
               this.Apidata = response.data.data;
            })
        },
        back(){
            history.back()
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
        accountlogout(){
            this.$store.dispatch("setToken",null);
            this.loginpage();
        },
        ViewCountCheck(){
            let data = {
                user_id : this.getData.id,
                post_id : this.$route.params.id,
            }
            axios.post('http://localhost:8000/api/search/view',data).then((response)=>{
                this.viewCount = response.data.data.length
            }).catch(e =>{
                console.log(e)
            })
        }
    },
    mounted() {
       this.ViewCountCheck()
       this.postId = this.$route.params.id
       this.getdata(this.postId);
    },
}