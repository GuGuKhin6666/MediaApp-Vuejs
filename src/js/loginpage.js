import axios from "axios"
import { mapGetters } from "vuex"
export default {
        name:'LoginPage',
        data() {
            return {
                userdata :{
                    email : '',
                    password : '',
                },
                Status:false,
                ShowText: false,
            }
        },
        computed:{
            ...mapGetters(['getToken','getData'])
        },
        methods: {
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
            accountlogin(){
                axios.post('http://localhost:8000/api/user/login',this.userdata).then((response)=>{
                   if(response.data.token != null){
                    this.getinfo(response)   
                    this.homepage()       
                    this.ShowText = false;
                   }else{
                   this.ShowText = true;
                   }
                })
            },

            getinfo(response){
                this.$store.dispatch('setToken',response.data.token);
                this.$store.dispatch('setData',response.data.user);
                console.log(this.getToken)
                console.log(this.getData.name)
            }
        },
}