<template>
    <teleport to="body">
       
        <transition enter-active-class="transition ease-in duration-100 transform" enter-from-class="opacity-0" enter-to-class="opacity-100"
                    leave-active-class="transition ease-out duration-100 transform" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div ref="modal-backdrop" @click="closeModal" v-show="showModalhobby" class="modal-backdrop fixed bg-black w-full h-full bg-opacity-10 pr-4 z-10 inset-0 " >
                     <div class="flex justify-center overflow-hidden hover:overflow-auto scrollbar h-full pt-14 mt-4 pr-0 ">
                        <transition enter-active-class="transition ease-out duration-800 transform " enter-from-class="opacity-0 translate-y-10 scale-95" enter-to-class="opacity-100 translate-y-0 scale-100"
                            leave-active-class="ease-in duration-800" leave-from-class="opacity-100 translate-y-0 scale-100" leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95">
                            <div class="modal bg-slate-800 overflow-auto hover:overflow-auto scrollbar scrollbar-thin  shadow-md shadow-slate-500 shadow-inner w-9/12 pt-4 h-5/6  rounded " role="dialog" ref="modal">
                                <button class="btn absolute right-3 rounded-xl pt-0.5 pb-0.5 pl-2 pr-2 top-3 z-20" @click="closeModal">CLOSE<font-awesome-icon class="pl-2 icon" style="color: aliceblue;" id="closebutton" :icon="['fas', 'x']" /></button>
                                <div class="aboutme flex flex-row h-40 w-full pt-0 pb-1 ">
                                    <div class="w-full pb-5"> 
                                        <h1 class="ml-8  pb-2 ">Hobby & Interests</h1>
                                        <div class="imgbg flex gap-11 justify-center mt-1 flex-row flex-wrap h-full w-full p-1">
                                            <div class=" imgborder flex w-72 h-60">
                                                <img class="w-full p-0.5  " src="../../dist/assets/travel-e07cd15c.png" alt="">
                                                <h2 class=" w-full absolute place-self-center text-center">Traveling</h2>
                                            </div>   
                                            <div class=" imgborder flex w-72 h-60">
                                                <img class="w-full p-0.5  " src="../../dist/assets/cooking-1adfe296.png" alt="">
                                                <h2 class=" w-full absolute place-self-center text-center">Cooking</h2>
                                            </div>  
                                            <div class=" imgborder flex w-72 h-60">
                                                <img class="w-full p-0.5  " src="../../dist/assets/music-7c5299bc.png" alt="">
                                                <h2 class=" w-full absolute place-self-center text-center">Music</h2>
                                            </div> 
                                            <div class=" imgborder flex w-72 h-60">
                                                <img class="w-full p-0.5  " src="../../dist/assets/football-3ad95c61.png" alt="">
                                                <h2 class=" w-full absolute place-self-center text-center">Football</h2>
                                            </div>  
                                            <div class=" imgborder flex w-72 h-60">
                                                <img class="w-full p-0.5  " src="../../dist/assets/music-7c5299bc.png" alt="">
                                                <h2 class=" w-full absolute place-self-center text-center">Music</h2>
                                            </div>  
                                            <div class=" imgborder flex w-72 h-60">
                                                <img class="w-full p-0.5  " src="../../dist/assets/music-7c5299bc.png" alt="">
                                                <h2 class=" w-full absolute place-self-center text-center">Music</h2>
                                            </div>                                            
                                        </div>
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
  name: 'HobbyDialog',
  props,
  setup(props) {
  const showModalhobby = ref(false);
  
  function closeModal() {
        showModalhobby.value = false;
      }

      watch(
        () => props.show,
        (show) => {
          showModalhobby.value = show;
        }
      );

  return {
    showModalhobby, closeModal,
  };
},
};
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: republica;
    src: url(../assets/republica-a77296c8.otf);
  }
  @font-face {
    font-family: lettergothic;
    src: url(../assets/lettergothic.otf);
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
        .imgbg{
          .imgborder{
            background-image: linear-gradient( 217deg, rgba(106, 33, 81, 0.315), rgba(88, 36, 111, 0.38) 70.71%), 
                            linear-gradient( 127deg, rgba(102, 56, 166, 0.305), rgba(5, 242, 218, 0.445) 70.71%),
                            linear-gradient( 336deg, rgba(31, 106, 99, 0.693), rgba(12, 12, 81, 0.533) 70.71%);
            box-shadow: 2.2px 1.5px 5px rgba(71, 67, 67, 0.657);
            h2{
                font-size: 1.5rem;
                font-weight: 900;
                text-shadow: 2px 2px 1px #515253;
            }
            img{
                box-shadow: inset 2.2px 1.5px 3px rgba(148, 124, 124, 0.901);
                opacity: 0.7;

            }
            

          }  
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