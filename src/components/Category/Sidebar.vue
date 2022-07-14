<template>

      <input type="checkbox" id="sidebar" class="modal-toggle" />
      <div class="modal">
       <label for="sidebar"
       
       >
        <div class="h-screen w-screen">
        <ul  
          class="pt-5 h-full w-44 dark:bg-black bg-white dark:text-white text-black"
          @click="(e)=> e.preventDefault()"
        >
          <li @click="closeSidebar" v-for="category in categorys" :key="category" class="pl-5 pb-5">
           <router-link :to="'/' + category" class="text-black dark:text-white">
            {{category}}
            </router-link>
            </li>
          
        </ul>
        </div>
       </label>
      </div>
      <input type="checkbox" id="sidebar"  class="drawer-toggle"/>
    
    
</template>

<script>
import {computed} from "vue";
import {useProductStore} from "../../store/productStore"
export default{
  name:"Sidebar",
  setup(){
    const productStore = useProductStore()
    return {
      categorys:computed(()=> productStore.categoryList)
    }
  },
  methods :{
      closeSidebar (){
          document.querySelector("#sidebar").click()        
      }
    
  }
}
</script>