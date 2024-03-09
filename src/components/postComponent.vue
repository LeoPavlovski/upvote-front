<template>
  <div>
    <h1 class="text-center mt-16">UpVote!</h1>
    <v-container class="mt-10">
      <v-card v-for="(post) in getPosts" :key="post.id" class="pa-10 mb-2"  elevation="0" style="border:1px solid #ccc;">
        <div class="d-flex">
          <img :src="post.image" style="width:100px;height: 100px;">
          <div class="d-flex flex-column ml-10">
            <h3 style="font-size:25px;">{{post.title}}</h3>
            <h4 style="font-size:16px;" class="d-block">{{post.description}}</h4>
          </div>
          <v-icon aria-hidden="false" size="30" @click="handleClick(post)" class="ml-auto mt-n16">mdi-chevron-up</v-icon>
          <h5 style="color:dodgerblue;font-size:20px;">{{post.upvote}}</h5>
        </div>
      </v-card>
    </v-container>
  </div>

</template>
<script>
export default {
 data(){
   return{
    //Some state to keep track of the elements
    getPosts:[],
   }
 } ,
  methods:{
   //Get the function to call the api.
    async posts(){
      this.getPosts =  await this.$store.dispatch('posts');
      console.log('Posts : ' , this.getPosts);
    },
    handleClick(data){
      console.log('index : ' , data);
      for(let i=0; i < this.getPosts.length;  i++){
        if(this.getPosts[i].id === data.id){
          const updatedData = data.upvote+=1;
          const body = {
            id:data.id,
            title:data.title,
            author:data.author,
            image:data.image,
            description:data.description,
            upvote:updatedData,
          }
         console.log(body.id);
          this.$store.dispatch('increaseVote',body)
        }
      }
    }


  },
  computed:{

  },
  watch:{

  },
  mounted() {
    this.posts();
    // this.$store.dispatch('increaseVote');
  },
}
</script>

<style>
 .v-icon.v-icon::after{
   display:none !important;
 }
</style>