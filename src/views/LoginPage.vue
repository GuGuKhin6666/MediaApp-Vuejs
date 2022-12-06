<template>
    <div>
        <div class="d-flex justify-content-center mt-4">
    <button class="text-white uppercase btn btn-danger" @click="homepage()">Home Page</button>
    <button class="ms-3 text-white uppercase btn btn-dark" @click="loginpage()">Login Page</button>
    <button class="ms-3 text-white uppercase btn btn-danger" v-if="Status == true" @click="accountlogout()">Logout</button>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-4 my-5 ">
            <div class="card shadow-sm border-0">
                <div class="row" v-if="ShowText == true">
                    <div class="col">
                        <h6 class="text-center text-danger">Your Password and Email do not match</h6>
                    </div>
                </div>
                <div class="form-group p-4">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control mt-2" v-model="userdata.email" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                        else.</small>
                </div>
                <div class="form-group p-4 py-1">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control mt-2" v-model="userdata.password" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="form-check ms-4 mt-3 ">
                    <input type="checkbox " class="form-check-input " id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" @click="accountlogin()" class="btn btn-secondary text-white d-block  ms-4 mt-4 mb-5 w-25">Login</button>
            </div>
        </div>
    </div>
</template>


<script src="../js/loginpage.js"></script>
