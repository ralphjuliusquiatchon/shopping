const { createApp } = Vue

createApp({
    data() {
        return {
            items : [],
            cart : []
            
        }


    
    },

    methods: {
        addToCart(items, index) {
            this.cart.push (this.items[index]);
            console.log ('cart',this.cart,index);
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