<template>
    <div>
        
       
        test::{{ id }}
        <div class="portfolio-container">

            <div class="portfolio-item" v-if="portfolioDetails" >            
                    
                    <p class="category" :class="portfolioDetails.category">{{ portfolioDetails.category }}</p>
                    
                    <h3>{{ portfolioDetails.title }}</h3>
                
                    <p>{{ portfolioDetails.description }}</p>               
                    <img :src="portfolioDetails.image" alt="">
                    <a target="_blank"  :href="portfolioDetails.link" >Link to</a>
                    <button @click="goBack()">Go Back</button>
            </div>
       
            <div v-else>...loading</div>
        </div>
    </div>
</template>

<script setup>
    import { toRefs, computed } from 'vue'
    import portfoliodb from '../modules/portfoliodb'
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const goBack = () => {
        router.go(-1)
    }

    const { state } = portfoliodb()
    const props = defineProps ({
        id: String
    })

    const { id } = toRefs(props)

    const portfolioDetails = computed( () => {
        return state.value.find(item => item.id == id.value)
    })
</script>

<style lang="scss" scoped>
 .portfolio-container{
        display: flex;
        .portfolio-item{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        margin: 10px;
        border: 2px solid black;
        padding: 25px;
        display: flex;
        flex-direction: column;
        border-radius: 25px;
        background-color: rgba(202, 208, 230, 0.251);
        a {
        list-style-type: none;
        padding-top: 20px;
        color: black;
        
        }
        }
        a {
            color:pink
        }

    }
  
    .portfolio-item img {
        margin-top: 10px;
        border: 2px solid black;
        border-radius: 5px;
        padding: 2px;
    }
    .category {
        text-transform: uppercase;
        font-weight: 700;
    }
    .Video {
        color: orange;
        border-left: 2px solid orange;
        padding-left: 10px;
    }
    .Web {
        color: blueviolet;
        border-left: 2px solid blueviolet;
        padding-left: 10px;
    }
</style>
