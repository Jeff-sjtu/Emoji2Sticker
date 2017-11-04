var vm = new Vue({
    el: '#app',
    data: {
        EMOJI_MAP: jEmoji.EMOJI_MAP,
        chosenEmoji: ''
    },
    methods: {
        choseEmoji: function (chosenEmoji, desc) {
            this.$data.chosenEmoji = chosenEmoji;
            axios.get(`/public/getImg?desc=${desc}`)
                .then((response) => {
                    console.log(response)
                }).catch((response) => {
                    console.log(response)
                })
        }
    }
});