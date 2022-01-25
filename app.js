const app = new Vue({
    el:'#app',
    data:{
        title:'Plan Your To Do List ',
        newTodo:'',
        todos:[]
    },
    methods:{
        addTodo(){
           this.todos.push({
               title:this.newTodo,
               done: false
           });
           this.newTodo='';
        },
        removeTodo(todo){
            const todoIndex = this.todos.indexOf(todo);
            this. todos.splice(todoIndex,1);
        },

        allDone(){
            this.todos.forEach(todo =>{todo.done =true;});
        }
    }
});

    const menuBtn = document.querySelector('.menu-btn');
    const navlinks = document.querySelector('.nav-links');
    menuBtn.addEventListener('click',()=>{
        navlinks.classList.toggle('mobile-menu' )
    });



