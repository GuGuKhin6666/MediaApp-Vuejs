<template>
  <div>
    <div class="d-flex justify-content-center mt-4">
    <button class="text-white uppercase btn btn-danger" v-if="Status == true" @click="homepage()">Home Page</button>
    <button class="ms-3 text-white uppercase btn btn-dark" v-if="Status == false" @click="loginpage()">Login Page</button>
    <button class="ms-3 text-white uppercase btn btn-danger" v-if="Status == true" @click="accountlogout()">Logout</button>
    </div>
  </div>
  <main>
        <!-- Whats New Start -->
        <section class="whats-news-area pt-50 pb-20">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row d-flex justify-content-between">
                            <div class="col-lg-3 col-md-3">
                                <div class="section-tittle mb-30">
                                    <h3>Whats New</h3>
                                </div>
                            </div>
                            <div class="col-lg-9 col-md-9">
                                <div class="properties__button">
                                    <!--Nav Button  -->
                                    <nav>
                                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a class="nav-item nav-link active" id="nav-home-tab" @click="searchitem()" data-toggle="tab" href="details.htmlnav-home" role="tab" aria-controls="nav-home" aria-selected="true">All</a
                        >
                        <a
                          class="nav-item nav-link"
                          id="nav-profile-tab"
                          data-toggle="tab"
                          href="details.htmlnav-profile"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                          v-for="(data,index) in categorylist" 
                          :key="index"
                          @click="searchitem(data.title)"
                          >{{data.title}}</a
                        >
                      </div>
                    </nav>
                    <!--End Nav Button  -->
                  </div>
                </div>
              </div>
              <div class="row">

                  <div class="col-12 ">
                    <div class="d-flex justify-content-end my-5 ">
                      <input type="text" class="form-control" style="width: 200px;" v-model="searchkey" v-on:keyup.enter="serach()"> 
                    <i class="fa-sharp fa-solid fa-magnifying-glass fs-4 ms-3 mt-1" @click="search()"></i>
                    </div>
                  </div>
            
                <div class="col-12">
                  <!-- Nav Card -->
                  <div class="tab-content" id="nav-tabContent">
                    <!-- card one -->
                    <div
                      class="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div class="whats-news-caption">
                        <div class="" v-if="Loginstatus == true">

                         <div class="row">
                          <div v-if="message.length == 0" style="height:70vh;" >
                            <h1 class="text-center text-danger mt-5 pt-5" >There is no Data here!</h1>
                          </div>

                          <div v-else class="col-lg-6 col-md-6 " v-for="(data,index) in message"  :key="index">
                            <div class="single-what-news mb-100" style="margin-left: 100px;" v-on:click="datasent(data.post_id)">
                              <div class="what-img">
                                <img :src="data.image" style="width:400px;height:400px;object-fit:cover" alt="">
                              </div>
                              <div class="what-cap">
                                <span class="color1">{{data.title}}</span>
                                <h4>
                                  <a href="details.html"
                                    >{{data.description}}</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                         </div>

                        </div>
                        
                        <div v-if="Loginstatus == false">
                          <h1 class="bg-danger text-white p-5 text-center my-5">You need to login !</h1>
                        </div>

                      </div>
                    </div>

                  </div>
                  <!-- End Nav Card -->
                </div>
              </div>
            </div>
                </div>
           </div>
        </section>
        <!-- Whats New End -->

        <!--Start pagination -->
        <div class="pagination-area pb-45 text-center">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="single-wrap d-flex justify-content-center">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-start">
                                    <li class="page-item">
                                        <a class="page-link" href="details.html"><span class="flaticon-arrow roted"></span
                      ></a>
                                            </li>
                                            <li class="page-item active">
                                                <a class="page-link" href="details.html">01</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="details.html">02</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="details.html">03</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="details.html"><span class="flaticon-arrow right-arrow"></span
                      ></a>
                                            </li>
                                            </ul>
                                    </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End pagination  -->
               
    </main>
</template>

<script src="../js/homepage.js"></script>