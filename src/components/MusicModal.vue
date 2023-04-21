<template>
    <teleport to="body">
       
        <transition enter-active-class="transition ease-in duration-100 transform" enter-from-class="opacity-0" enter-to-class="opacity-100"
                    leave-active-class="transition ease-out duration-100 transform" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div ref="modal-backdrop" @click="closeModal" v-show="showModalmusic" class="modal-backdrop fixed bg-black w-full h-full bg-opacity-10 pr-4 z-10 inset-0 " >
                     <div class="flex justify-center overflow-hidden hover:overflow-auto scrollbar h-full pt-14 mt-4 pr-0 ">
                        <transition enter-active-class="transition ease-out duration-800 transform " enter-from-class="opacity-0 translate-y-10 scale-95" enter-to-class="opacity-100 translate-y-0 scale-100"
                            leave-active-class="ease-in duration-800" leave-from-class="opacity-100 translate-y-0 scale-100" leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95">
                            <div class="modal bg-slate-800 overflow-auto hover:overflow-auto scrollbar scrollbar-thin  shadow-md shadow-slate-500 shadow-inner w-9/12 pt-4 h-5/6  rounded " role="dialog" ref="modal">
                                <button class="btn absolute right-3 rounded-xl pt-0.5 pb-0.5 pl-2 pr-2 top-3 z-20" @click="closeModal">CLOSE<font-awesome-icon class="pl-2 icon" style="color: aliceblue;" id="closebutton" :icon="['fas', 'x']" /></button>
                                <div class="aboutme flex flex-col h-full w-full  ">
                                    <div class=" p-7 align-center w-full "> 
                                    <h1 class="ml-2 pb-5 ">My Favorite Music</h1>
                                    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5BFn9SJLDEju0jZSdrD2zD?utm_source=generator&theme=0" width="100%" height="390" frameBorder="0" allowfullscreen="" class="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                                    </div>
                                
                                </div>
                                <div class=" opacity-10  flex justify-end top-48 ">
                                    <font-awesome-icon class="animate-bounce fixed icon w-10 h-5 pb-28 opacity-20 pr-1" style="color: aliceblue;" id="closebutton" :icon="['fas', 'music']" />
                                    <font-awesome-icon class="animate-bounce fixed icon w-10 h-5 pb-16 opacity-60 pr-1" style="color: aliceblue;" id="closebutton" :icon="['fas', 'music']" />
                                    <font-awesome-icon class="animate-bounce fixed icon w-10 h-5 pr-1" style="color: aliceblue;" id="closebutton" :icon="['fas', 'music']" />

                                </div>
                            </div>
                        </transition>
                     </div>
            </div>
        </transition>
        
    </teleport>    
</template>

<script>
import { ref, watch } from 'vue';
const props = {
  show: {
    type: Boolean,
    default: false,
  },
};
export default {
  name: 'MusicDialog',
  props,
  setup(props) {
  const showModalmusic = ref(false);
  
  function closeModal() {
        showModalmusic.value = false;
      }

      watch(
        () => props.show,
        (show) => {
          showModalmusic.value = show;
        }
      );

  return {
    showModalmusic, closeModal,
  };
},
};
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: republica;
    src: url(../../dist/assets/republica-a77296c8.otf);
  }
  @font-face {
    font-family: lettergothic;
    src: url(../../dist/assets/lettergothic.otf);
  }


.modal {
    box-shadow: 
        1px 3px 6px #515253,        
        inset 0 0 2px #868686;
        font-family: lettergothic;
        color: #e3e9f0;

        h1{
            font-size: 1.8rem;
            font-family: republica;
        }
     
        p{
            background-color: rgba(17, 29, 50, 0.424);
            box-shadow: 0.5px 1px 3px #515253 ;
            font-size: .8rem;
        }
    .btn{
        font-family: republica;
        font-size: 1rem;
        font-weight: 100;
        box-shadow: .5px 0.5px 1px #515253 ;
        color: #e3e9f0;
        background-image: linear-gradient( -17deg, rgba(8, 89, 81, 0.492), rgba(71, 32, 88, 0.234) 70.71%), 
                            linear-gradient( 97deg, rgba(69, 33, 123, 0.578), rgba(20, 125, 114, 0.401) 70.71%),
                            linear-gradient( 136deg, rgba(50, 115, 109, 0.467), rgba(74, 74, 142, 0.449) 70.71%);
        #closebutton{
            &:hover {color: #8aadcf71;}
        }
        &:hover{
            background-image: linear-gradient( -17deg, rgba(8, 89, 81, 0.161), rgba(71, 32, 88, 0.234) 70.71%), 
                            linear-gradient( 97deg, rgba(46, 22, 82, 0.578), rgba(20, 125, 115, 0.289) 70.71%),
                            linear-gradient( 136deg, rgba(36, 77, 73, 0.241), rgba(57, 57, 100, 0.239) 70.71%);
            border: 1px solid rgba(84, 81, 81, 0.311);
            color: #8aaccf;
            transition: ease-in-out duration-1000 transform;
        }

    }

    
}



</style>