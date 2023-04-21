<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>



<template>
  <header>
   

    <div class="wrapper">

      <nav>
        <RouterLink class="transition ease-in duration-[2000ms]ease-in-out effect-shine" to="/">Home</RouterLink>
        <RouterLink class="effect-shine" to="/portfolio">Portfolio</RouterLink>
        <RouterLink class="effect-shine" to="/about">About</RouterLink>
        
      </nav>
    </div>
    
  </header>

  <footer>
    <a  href="https://www.linkedin.com/in/joninaa" target="_blank" rel="noopener noreferrer"><font-awesome-icon class="icon" :icon="['fab', 'linkedin-in']"/></a>
    <a  href="https://www.instagram.com/jaydiamondphotos/" target="_blank" rel="noopener noreferrer"><font-awesome-icon class="icon" :icon="['fab', 'instagram']"/></a>
    <a  href="https://www.facebook.com/joninaab/" target="_blank" rel="noopener noreferrer"><font-awesome-icon class="icon" :icon="['fab', 'facebook-f']"/></a>
    <a  href="https://github.com/jayb2302" target="_blank" rel="noopener noreferrer"><font-awesome-icon class="icon" :icon="['fab', 'github']"/></a> 
  </footer>

  <RouterView />
</template>

<style lang="scss" scoped>
  @font-face {
    font-family: republica;
    src: url(../assets/republica-a77296c8.otf);
  }
header {
  display: flex;
  background-image: url(../assets/bg1-b60daf09.png);
  background-size: cover;
  background-blend-mode: screen;
  background-color: transparent;
  line-height: 1.5;
  max-height: 100vh;

  .wrapper {
  display: flex;
  width: 100%;
  place-items: center;
  position: absolute;
  z-index: 20002;
  
    nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 0%;
    font-family: republica;
    text-transform: uppercase;
    font-size: 15px;
    padding-top: 2%;
      a {
        display: inline-block;
        padding: 0 1rem;
        border-left: 1px solid rgba(137, 175, 236, 0.5);
        &:first-of-type {
          border: 0;
        } 
        &:hover {
            mask-image: linear-gradient(-75deg, rgba(129, 33, 33, 0.6) 30%, #901616 50%, rgba(0,0,0,.6) 70%);
            mask-size: 200%;
            animation: shine 2s infinite;
          }
          @keyframes shine {
            from {
              mask-position: 150%;
            }
            
            to {
            mask-position: -50%;
            }
          }
        a.router-link-exact-active {
          color: white;
          text-transform: uppercase;

        }
     
      }
    }
  }
}

footer {
  display: flex;
  position: fixed;
  justify-content: center;
  gap: 15px;
  bottom: 0;
  width: 100%;
  z-index: 53000;
  padding-bottom: 1%;
  margin-top: 5%;
  a {
    display: flex;
    top: 0;
    left: 0;
    width: 35px;
    height: 35px;
    transition: .5s;
    transform: scale(.9);
    z-index: -1;
    justify-content: center;
    align-items: center;
      &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50%;
        transition: .8s;
        transform: scale(.9);
        z-index: -1;
      }
      &:hover {
        background: linear-gradient( 217deg, rgba(242, 109, 196, 0.2), rgba(194, 80, 242, 0) 70.71%), 
                    linear-gradient( 127deg, rgba(102, 56, 166, 0.2), rgba(5, 242, 219, 0) 70.71%),
                    linear-gradient( 336deg, rgba(5, 242, 219, 0.2), rgba(0, 0, 255, 0) 70.71%);
        box-shadow: 0 0 15px rgba(137, 175, 236, 0.5);
        color: aliceblue;
        border-radius: 50%;
        outline: 1.5px solid rgba(137, 175, 236, 0.5);
       
      }  
      &:hover::before{
        transform: scale(1.1);
        
      }
      .icon{
        height: 21px;
        width: 21px;
      }

    
  }
  
}

@media (min-width: 1240px) {
  header {
    display: flex;
    place-items: center;
   
  .wrapper {
    display: flex;
    place-items: space-evenly;
    flex-wrap: wrap;
    
    nav {
    margin-left: 0rem;
    font-size: 1.2rem;
    padding-top: 5%;
  
  }
  }
}




  
}

</style>
