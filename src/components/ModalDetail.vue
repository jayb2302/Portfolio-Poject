<template>
    <teleport to="body">
        <div class="modal-backdrop fixed bg-black w-full h-full bg-opacity-80 z-10 inset-0 " >
            <div class="flex justify-center pt-20 ">
                <div class="modal bg-slate-800  shadow-md shadow-slate-500 shadow-inner w-96 p-7 h-1/2 rounded-lg " role="dialog" ref="modal">
                    <button class="absolute right-3 top-2 z-20" @click="$emit('close')"><font-awesome-icon style="color: aliceblue;" id="closebutton" :icon="['fas', 'x']" /></button>
                  
                   <!-- <div class="portfolio-container overflow-hidden hover:overflow-auto scrollbar-thin scrollbar-thumb-cyan-700 scrollbar-track-sky-200  "> -->

                     <div class="portfolio-container overflow-hidden hover:overflow-auto scrollbar ">

                        <div class="portfolio-item flex flex-col h-96" v-if="portfolioDetails" >            
                            
                            <p class="category " :class="portfolioDetails.category">{{ portfolioDetails.category}}</p>
                            
                            <h3>{{ portfolioDetails.title }}</h3>
                        
                            <h2 class="flex justify-center border border-slate-600 pt-1 bg-cyan-800/70 pl-0 w-44 rounded-lg">{{ portfolioDetails.description }}</h2>               
                            <img id="outlineimg" class="outline-none p-0.5 mt-2 rounded-lg shadow-lg" :src="portfolioDetails.image" alt="">
                            <h4 class="pt-2 text-xs ">ABOUT :</h4>
                            <p>{{ portfolioDetails.detail }}</p>
                          
                            <a class="flex justify-end " target="_blank"  :href="portfolioDetails.link" >{{portfolioDetails.linkname}}</a>
                            <img class="h-16 w-32" :src="portfolioDetails.logo" alt="">
                            <img class="h-26 w-32 pt-4" :src="portfolioDetails.logo1" alt="">
                            <h4 class="pt-2 pb-3 text-xs ">{{ portfolioDetails.h4 }}</h4>
                            <img class="h-18 w-36" :src="portfolioDetails.color" alt="">
                            <h4 class="pt-3 pb-2 text-xs ">{{ portfolioDetails.heading }}</h4>
                            <img class="place-self-center w-1/2 pt-2" :src="portfolioDetails.webp" alt="">

                            
                        </div>
       
             
                     </div>
                </div>
            </div>
        </div>
    </teleport>    
</template>

<script setup >

import portfoliodb from '../modules/portfoliodb'

import { toRefs, computed, } from 'vue'



    const props = defineProps ({
        id: Number
    })

    const { state } = portfoliodb()

    const { id } = toRefs(props)

    const portfolioDetails = computed( () => {
        return state.value.find(item => item.id == id.value)
    })



//let clickedId = ref()

// export default {
//     name: 'ModalDetail',
    
// };

</script>

<style lang="scss" scoped>
  @font-face {
    font-family: republica;
    src: url(../src/assets/republica.otf);
  }
  @font-face {
    font-family: lettergothic;
    src: url(../src/assets/lettergothic.otf);
  }
  
.modal {
    box-shadow: 
        1px 3px 6px #515253,        
        inset 0 0 2px #868686;
        text-shadow: 2px 1px 1px #4f5255;


    .portfolio-container{
    font-family: republica;
    color: aliceblue;
    
    .outlineimg {
        box-shadow: 
        1px 3px 6px #515253,        
        inset 0 0 2px #868686;
    }
    p {
        padding-top: 2%;
        font-family: lettergothic ;
        letter-spacing: 1px;
        line-height: 1.1;
        text-align: justify;
        font-size: 14px;
        padding-left: 4%;
        padding-right: 0%;
        word-spacing: -5px;
        text-shadow: 2px 2px 3px #515253;
    }

    h3 {
        font-size: 18px;
        text-transform: uppercase;
    }
    h2{
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: 100;
        font-family: lettergothic;
    }
    .Web {
        color: rgba(5, 242, 218, 0.693);
        border-left: 2px solid rgba(5, 242, 218, 0.693);
        padding-left: 10px;
        font-family: republica;
        height: 20px;
        padding-top: 0%;
        margin-bottom: 1%;
    }

    .Design {
        color: rgba(230, 86, 215, 0.873);
        border-left: 2px solid  rgba(230, 86, 215, 0.873);
        padding-left: 10px;
        font-family: republica;
        height: 20px;
        padding-top: 0%;
        margin-bottom: 1%;
      }
     .Photos {
        color: rgba(238, 188, 62, 0.873);
        border-left: 2px solid  rgba(238, 188, 62, 0.873);
        padding-left: 10px;
        font-family: republica;
        height: 20px;
        padding-top: 0%;
        margin-bottom: 1%;
    }

    a {
        font-size: 10px;
        color: alicebluex  !important;
        padding-bottom: 3%;
        padding-top: 2%;
        &:hover {
            color: aliceblue;
        }
    }



    #outlineimg {
    background:   linear-gradient( 127deg, rgba(102, 56, 166, 0.552), rgba(5, 242, 218, 0.517) 70.71%),
            linear-gradient( 336deg, rgba(5, 242, 219, 0.2), rgba(0, 0, 255, 0.614) 70.71%);;
    } 
}
}



</style>