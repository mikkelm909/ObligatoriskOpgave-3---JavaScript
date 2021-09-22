Vue.createApp({
    data() {
        return {
            wordInput: "",
            word: "",
            wordLower: "",
            wordUpper: "",
        }
    },
    methods: {
        save() {
            this.word = this.wordInput
            this.wordLower = this.wordInput.toLowerCase()
            this.wordUpper = this.wordInput.toUpperCase()
        }
    }
}).mount("#app")