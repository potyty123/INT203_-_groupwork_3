const app = {
    data() {
        return {
            tasks: [{title: 'Geysers Valley, Russia', image: 'images/geysers_valley.jpg',done: false},
                    {title: 'Khumbu Valley, Nepal', image: 'images/khumbu_valley.jpg',done: false},
                    {title: 'Waipi o Valley, Hawaii', image: 'images/waipio_valley.jpg', done: false}
                ]
        }
    },
    methods: {
        toggleDone(index){
            this.tasks[index].done = !this.tasks[index].done
        }
    },
    computed: {
        countUndone(){
            return this.tasks.filter( t => t.done ).length
        }
    }
}
Vue.createApp(app).mount('#app')