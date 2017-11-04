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
    watch: {
        chosenEmoji: function (newVal) {
            this.$data.descList = [];
            var reg = /.{2}/g,
                emojiArr = newVal.match(reg);
            emojiArr.forEach((item) => {
                this.$data.descList.push(jEmoji.EMOJI_MAP[item][1]);
            })
        }
    },
    methods: {
        choseEmoji: function (chosenEmoji) {
            this.$data.chosenEmoji += chosenEmoji;
        },
        search: function () {
            this.$data.resultImgList = [];
            this.$data.loading = true;
            axios.post('/getImg',{
                desc: this.$data.descList
            }).then((response) => {
                this.$data.resultImgList = response.data;
                this.$data.loading = false;
            }).catch((response) => {
                console.log(response)
            })
        }
    }
});