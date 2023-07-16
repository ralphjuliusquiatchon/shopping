const { createApp } = Vue

createApp({
    data() {
        return {

            items : [],
            cart : [],
            currentActive : 0,
            totalPrice : 0,
            
        }
      },

    methods: {
        addToCart(items, i) {
            this.cart.push (this.items[i]);
            console.log ('cart',this.cart,i);
        },

        reloadPage() {
            location.reload();
        },

        viewCart() {
            this.$router.push('/');
        },

        deleteItemCart(i) {
            this.cart[this.currentActive].splice (i, 1);
            console.log (this.deleteItemCart);
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