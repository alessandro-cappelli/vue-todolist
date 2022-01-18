let app = new Vue({
    el: '#app',
    data:{
        valoreInput:"",
        lista:[
            {
                text: "fare la spesa",
                done: false
            },
            {
                text: "lavare la macchina",
                done: false
            },
            
            
        ]
    },
    methods: {
        addTodo: function(){                    //funxione bottone per aggiungere una array
            console.log('aggiungi todo');
        }
    },
    delTodo: function(index){                   //funzione per eliminare todo
        this.lista.splice(index,1);
    }
})