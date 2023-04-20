<template>
  <main class="aboutme-section relative h-screen w-full">
    <div class="flex flex-col relative about h-full w-full">
      <h1 class="relative pt-5 pl-10 opacity-10">AboutMe...</h1>
      <div class="mystory relative w-full h-full border-l ml-16">
        <div class="relative w-auto ml-5 pt-4 h-auto">
          <div class="flex outsidearrow w-32 h-7"><h2 class="arrow place-self-center  w-28  h-6 pl-2 ">My Story</h2></div>
         
        </div>  
      </div>
    </div>
  </main>
</template>

<script setup>
 
</script>

<style lang="scss" >
  main{
    display: flex;
    width: 100%;
    position: relative;
    background: radial-gradient(ellipse at top, #1b2735 0%, #090a0f 100%);
    h1 {
      font-size: 10rem ;
      color: aliceblue;
    }
    .mystory {
      border-image-slice: 1;
      border-image-source: linear-gradient( 127deg, rgba(102, 56, 166, 0.552), rgba(5, 242, 218, 0.517) 70.71%);                 
      .outsidearrow{
         background: white;
         clip-path: polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 0 50%, 0% 0%);
         width: 7.25rem;
         height: 1.6rem;
         

        .arrow{
          position: relative;
          background:linear-gradient(to top, #59636e 0%, #4a4f6a 100%);
          clip-path: polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 0 50%, 0% 0%);
          margin-left: 0.1rem;
        }
      }  
      

    }

    
      
  }
@media (max-width: 1024px) {
  .aboutme-section{
    h1 {
      font-size: 4rem;
    }
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
