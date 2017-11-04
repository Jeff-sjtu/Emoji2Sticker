var vm = new Vue({
    el: '#app',
    data: {
        EMOJI_MAP: jEmoji.EMOJI_MAP,
        showSelectOption: false
    },
    methods: {
        showSelect: function () {
            this.$data.showSelectOption = true;
        },
        choseEmoji: function (params) {
            axios.get('/public/getImg', {
                desc: params[1]
            }).then((response) => {
                console.log(response)
            }).catch((response) => {
                console.log(response)
            })
        }
    }
});