const { createApp } = Vue

createApp({
    data() {
        return {

            isActive: false,

            items : []
            
           
        }


    
    },

    methods: {

        viewPrice(index){

            if (this.isActive = false) {
                this.isActive = true

                console.log(this.isActive)
            }

            else{
                this.isActive = false
                console.log(this.isActive)
            }
        



        } 

            

        
    },



    created() {
        
            axios
            .get('https://fakestoreapi.com/products')
            .then((res) => {
            this.items = (res.data);   
            console.log (this.items);
           
            });
        
            


        
    }
}).mount('#app')