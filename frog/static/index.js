var vm = new Vue({
    el: '#app',
    data: {
        EMOJI_MAP: jEmoji.EMOJI_MAP,
        chosenEmoji: '',
        descList: [],
        loading: false,
        resultImgList: [],
        imgWidth: (document.body.scrollWidth - 712) / 2
    },
    methods: {
        choseEmoji: function (chosenEmoji, desc) {
            this.$data.chosenEmoji += chosenEmoji;
            this.$data.descList.push(desc);
        },
        search: function () {
            this.$data.resultImgList = [];
            this.$data.loading = true;
            axios.post('/getImg',{
                desc: this.$data.descList
            }).then((response) => {
                this.$data.resultImgList = response.resultImgList;
                this.$data.loading = false;
            }).catch((response) => {
                console.log(response)
            })
        }
    }
});