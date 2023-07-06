const { createApp } = Vue

  createApp({
    data() {
        return {
            items : [],
           
        }

      
    },


    created(){
        
            axios
            .get('https://fakestoreapi.com/products')
            .then((res) => {
            this.items.push(res.data);   
            console.log (this.items);
           
            });
        
            


        
    }
  }).mount('#app')