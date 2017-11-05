var vm = new Vue({
    el: '#app',
    data: {
        EMOJI_MAP: jEmoji.EMOJI_MAP,
        chosenEmoji: '',
        loading: false,
        descList: [],
        sendImgList: [],
        showImgList: false,
        resultImgList: []
    },
    watch: {
        chosenEmoji: function (newVal) {
            this.$data.descList = [];
            if(newVal === ''){
                return;
            }
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
            if(this.$data.chosenEmoji === ''){
                return;
            }
            this.$data.showImgList = true;
            this.$data.loading = true;
            axios.post('/getImg',{
                desc: this.$data.descList
            }).then((response) => {
                this.$data.resultImgList = response.data;
                this.$data.loading = false;
            }).catch((response) => {
                this.$data.showImgList = false;
                console.log(response)
            });
            this.$data.chosenEmoji = '';
        },
        sendImg: function (src) {
            this.$data.showImgList = false;
            this.$data.sendImgList.unshift(src);
        }
    }
});