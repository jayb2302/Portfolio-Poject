<template>
    <teleport to="body">
       
        <transition enter-active-class="transition ease-in duration-100 transform" enter-from-class="opacity-0" enter-to-class="opacity-100"
                    leave-active-class="transition ease-out duration-100 transform" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div ref="modal-backdrop" @click="closeModal" v-show="showModal" class="modal-backdrop fixed bg-black w-full h-full bg-opacity-10 z-10 inset-0 " >
                     <div class="flex justify-center overflow-auto scrollbar h-4/5 lg:h-5/6 pt-14 lg:pt-20 mt-4 ">
                        <transition enter-active-class="transition ease-out duration-800 transform " enter-from-class="opacity-0 translate-y-10 scale-95" enter-to-class="opacity-100 translate-y-0 scale-100"
                            leave-active-class="ease-in duration-800" leave-from-class="opacity-100 translate-y-0 scale-100" leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95">
                            <div class="modal bg-slate-800 overflow-auto hover:overflow-auto scrollbar  scrollbar-thin  shadow-md shadow-slate-500 shadow-inner w-11/12 pt-4 lg:mb-2 h-auto mb-2 rounded " role="dialog" ref="modal">
                                <button class="btn absolute right-3 rounded-xl pt-1 mt-2 pb-0.5 pl-2 pr-2 top-3 z-20" @click="closeModal">CLOSE<font-awesome-icon class="pl-2 icon" style="color: aliceblue;" id="closebutton" :icon="['fas', 'x']" /></button>
                                <div class="aboutme flex flex-col justify-center lg:flex-row h-auto w-12/12  pt-1 ">
                                    <div class="w-12/12 lg:w-7/12 pt-2 "> 
                                        <h1 class=" mb-2 ml-4 ">My Story</h1>
                                        <p class="h-auto ml-4 w-12/12 text-start  mr-4 pr-3 mb-5 pl-4 pb-5 pt-5 leading-6" > I was born in a small town in the east of Iceland.
                                        I crew up in Eskifjörður and then later moved to Reykjavík. <br> <br> In Reykjavík I took different classes trying to learn 
                                        as much as possible. I also became the student president before graduating in Art and Clothing technology. 
                                        After that I moved to Spain to study the language, people and cilture while attending bartending school
                                        Following my thirst to learn new things I returned to Iceland trying to become a pilot but I found 
                                        my first passion in film and photography. <br> <br> Then I moved to Miami to work as a photographer and video editor. 
                                        Following that I worked at a ski resort before meeting my husband Jón and soon our beautiful Irena arrived. 
                                        Together we moved to Esbjerg where I continue to learn, now to become a successful web developer and multimedia designer.</p>
                                    </div>
                                    <div class="flex flex-col justify-center w-full lg:w-4/12 h-auto gap-10   pt-20 lg:-mt-10  ">
                                      <img class="w-8/12 shadow-inner shadow-[-2px_-4px_6px_2px_rgba(6,6,6,0.6)] lg:w-9/12 h-auto -translate-y-3 place-self-center rotate-6" src="../assets/sheep.png" alt="">
                                      <img class=" w-8/12 shadow-inner shadow-[-2px_-4px_6px_2px_rgba(6,6,6,0.6)] lg:w-9/12 h-auto -translate-y-20 place-self-center mt-2 -rotate-6"  src="../assets/reykjavik.png" alt="">
                                      <img class=" w-8/12 shadow-inner shadow-[-2px_-4px_6px_2px_rgba(6,6,6,0.6)] lg:w-9/12 h-auto -translate-y-28 place-self-center -mt-2 rotate-6 " src="../assets/eskifjordur.jpeg" alt="">
                                    </div>
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
  name: 'ModalDialog',
  props,
  setup(props) {
  const showModal = ref(false);
  
  function closeModal() {
        showModal.value = false;
      }

      watch(
        () => props.show,
        (show) => {
          showModal.value = show;
        }
      );

  return {
    showModal, closeModal,
  };
},
};
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: republica;
    src: url(./assets/republica-a77296c8.otf);
  }
  @font-face {
    font-family: lettergothic;
    src: url(./assets/lettergothic.otf);
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
            font-size: 1.3rem;
        }
        img{
          // box-shadow: 1px -4px 5px #f5f5fd8a;
          opacity: 0.9;
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