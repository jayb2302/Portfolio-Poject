<template class="w-full ">
  <main class="aboutme-section flex justify-center align-center relative pt-3 h-screen w-full">
    
    <div class="flex flex-col justify-center align-top relative fixed about h-full   w-full">
      <h1 class="relative pt-10 opacity-10 static w-full p-15 pb-36 h-full pl-10 pr-10 text-sky-300 ">About Me...</h1>
      <div class=" flex flex-col mystory absolute align-center w-4/6 h-3/6 border-l-3 border-shawow opacity-2 place-self-center ">
        <button type="button" @click="showModal = !showModal" class=" transition ease-in-out duration-1000 z-10 w-30 hover:text-gray-50  ">
          <div class="relative w-96 -ml-3 pt-6 h-auto">
            <div class="flex outsidearrow w-6/12 h-14"><h2 class="arrow  w-full text-start pl-6 h-11 pt-2  ">My Story</h2></div>
          </div>           
        </button>
        <button type="button" @click="showModalhobby = !showModalhobby" class="transition ease-in-out duration-1000 z-10 w-30 hover:text-gray-50  ">
          <div class="relative w-96 -ml-3 pt-6 h-auto ">
            <div class="flex outsidearrow w-8/12 h-14"><h2 class="arrow  w-96 text-start pl-6 h-11 pt-2  ">Interests & Hobby</h2></div>
          </div>           
        </button>
        <button type="button" @click="showModalmusic = !showModalmusic" class="transition ease-in-out duration-1000 z-10 w-30 hover:text-gray-50  ">
          <div class="relative w-96 -ml-3 pt-6 h-auto">
            <div class="flex outsidearrow w-7/12 h-14"><h2 class="arrow  w-full text-start pl-6 h-11 pt-2  ">Music & Fun</h2></div>
          </div>           
        </button>

        <div class="flex absolute justify-end  pr-10 pt-14 absolute w-full h-2/3">
          <div class="imgbg w-60 z-10 drop-shadow-[3px_3px_3px_rgba(265,230,235,0.35)]"> 
            <img class=" w-60 p-0.5  " src="../../src/assets/aboutmeprofile.png" alt="">
          </div>
          <ModalDialog class="transition ease-in-out duration-1000" :show="showModal" /> 
          <MusicDialog class="transition ease-in-out duration-1000" :show="showModalmusic" /> 
          <HobbyDialog class="transition ease-in-out duration-1000" :show="showModalhobby" /> 

        </div> 
      </div>       
     

    </div>
  </main>
</template>

<script >
import { ref } from 'vue';
import ModalDialog from'../components/AboutModal.vue';
import MusicDialog from'../components/MusicModal.vue';
import HobbyDialog from'../components/HobbyModal.vue';
  
const components = {
  MusicDialog, ModalDialog, HobbyDialog,
}; 

export default {
  name: 'AboutModal',
  nameone: 'MusicModal',
  nametwo: 'HobbyModal',
  components,
  setup() {

const modal = ref(null);
const showModal = ref(false);
const showModalmusic = ref(false);
const showModalhobby = ref(false);

return {
    ...
    modal,showModal, showModalmusic, showModalhobby
};
}

};

</script>

<style lang="scss" >
  
    main{
        display: flex;
        width: 100%;
        height: 100%;
        position: relative;
        background: radial-gradient(ellipse at top, #1b2735 0%, #090a0f 100%);
        h1 {
          font-size:245px;
          text-align: start;
          background-color: red;
          background-image: linear-gradient( -17deg, rgba(5, 242, 218, 0.161), rgba(71, 32, 88, 0.234) 70.71%), 
                            linear-gradient( 97deg, rgba(80, 66, 101, 0.779), rgba(5, 242, 218, 0.442) 70.71%),
                            linear-gradient( 136deg, rgba(72, 122, 117, 0.566), rgba(156, 156, 241, 0.525) 70.71%);
          background-size: 100%;
          background-repeat: repeat;
          background-clip: text;
          -webkit-text-fill-color: transparent; 
          -moz-background-clip: text;
          -moz-text-fill-color: transparent;
          line-height: 230px;
        }
        .mystory {
          color: rgb(195, 193, 239);
          border-image-slice: .5;
          box-shadow: 2.2px 1.5px 15px rgba(71, 67, 67, 0.657);
          border-image-source: linear-gradient( 127deg, rgba(102, 56, 166, 0.552), rgba(5, 242, 218, 0.517) 70.71%);
                          
          .outsidearrow{
            background: rgba(99, 94, 94, 0.356);
            clip-path: polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 0 50%, 0% 0%);
           
            height: 2.4rem;
            

            .arrow{
              position: relative;
              background:linear-gradient(to top, #59636e 0%, #4a4f6a 100%);
              clip-path: polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 0 50%, 0% 0%);
              margin-left: -1%;
              margin-top: -0.1rem;
              font-size: 1.1rem;
            }
          }  
          .imgbg{
            background-image: linear-gradient( 217deg, rgba(106, 33, 81, 0.315), rgba(88, 36, 111, 0.38) 70.71%), 
                            linear-gradient( 127deg, rgba(102, 56, 166, 0.305), rgba(5, 242, 218, 0.445) 70.71%),
                            linear-gradient( 336deg, rgba(31, 106, 99, 0.693), rgba(12, 12, 81, 0.533) 70.71%);;
          }

        }

        
          
      }
  
  
@media (max-width: 1024px) {
  .aboutme-section{
  
    min-height: 100vh;
    display: flex;
    
  }
}
</style>
