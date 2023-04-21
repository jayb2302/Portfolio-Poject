<template>
    <teleport to="body">
       
        <transition enter-active-class="transition ease-in duration-100 transform" enter-from-class="opacity-0" enter-to-class="opacity-100"
                    leave-active-class="transition ease-out duration-100 transform" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div ref="modal-backdrop" @click="closeModal" v-show="showModal" class="modal-backdrop fixed bg-black w-full h-full bg-opacity-10 z-10 inset-0 " >
                     <div class="flex justify-center overflow-hidden hover:overflow-auto scrollbar h-full pt-14 mt-4 ">
                        <transition enter-active-class="transition ease-out duration-800 transform " enter-from-class="opacity-0 translate-y-10 scale-95" enter-to-class="opacity-100 translate-y-0 scale-100"
                            leave-active-class="ease-in duration-800" leave-from-class="opacity-100 translate-y-0 scale-100" leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95">
                            <div class="modal bg-slate-800 overflow-auto hover:overflow-auto scrollbar scrollbar-thin  shadow-md shadow-slate-500 shadow-inner w-9/12 pt-4 h-5/6 mb-2 rounded " role="dialog" ref="modal">
                                <button class="btn absolute right-3 rounded-xl pt-0.5 pb-0.5 pl-2 pr-2 top-3 z-20" @click="closeModal">CLOSE<font-awesome-icon class="pl-2 icon" style="color: aliceblue;" id="closebutton" :icon="['fas', 'x']" /></button>
                                <div class="aboutme flex flex-row h-40 w-full -pt-1 ">
                                    <div class="w-4/6 mb-3"> 
                                    <h1 class="ml-8 mb-2 ">My Story</h1>
                                        <p class="w-5/6 h-auto text-justify ml-7 mr-10 pr-2 mb-5 pl-3 pb-5 pt-5 leading-5" > I was born in a small town in the east of Iceland.
                                        I crew up in Eskifjörður and then later moved to Reykjavík. <br> <br> In Reykjavík I took different classes trying to learn 
                                        as much as possible. I also became the student president before graduating in Art and Clothing technology. 
                                        After that I moved to Spain to study the language, people and cilture while attending bartending school
                                        Following my thirst to learn new things I returned to Iceland trying to become a pilot but I found 
                                        my first passion in film and photography. <br> <br> Then I moved to Miami to work as a photographer and video editor. 
                                        Following that I worked at a ski resort before meeting my husband Jón and soon our beautiful Irena arrived. 
                                        Together we moved to Esbjerg where I continue to learn, now to become a successful web developer and multimedia designer.</p>
                                    </div>
                                    <div class="flex flex-col w-3/6 gap-6  -ml-4 pr-12 pt-10  ">
                                    <img class=" w-80 h-46 -translate-y-3 translate-x-0.5 rotate-6" src="../../dist/assets/sheep-a9098e94.png" alt="">
                                    <img class=" w-80 h-34 -translate-y-24 translate-x-28 mt-2 -rotate-6"  src="../../dist/assets/reykjavik-0c35ae42.png" alt="">
                                    <img class=" w-80 h-42 -translate-y-40 translate-x-0.5 rotate-6 " src="../../dist/assets/eskifjordur-73993f27.jpeg" alt="">

                                    </div>
                                </div>
                                <div class=" opacity-10  flex justify-end top-48 ">
                                <font-awesome-icon class="animate-bounce icon w-10 h-5" style="color: aliceblue;" id="closebutton" :icon="['fas', 'angles-down']" />
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
            font-size: 1.5rem;
            font-family: republica;
        }
     
        p{
            background-color: rgba(17, 29, 50, 0.424);
            box-shadow: 0.5px 1px 3px #515253 ;
            font-size: 1.2rem;
        }
        img{
          box-shadow: 1px -4px 5px #1111128a;
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