var vm = new Vue({
    el: '#app',
    data: {
        EMOJI_MAP: jEmoji.EMOJI_MAP,
        chosenEmoji: '',
        descList: [],
        loading: false,
        resultImgList: [
            'http://img5.imgtn.bdimg.com/it/u=257907743,1351527336&fm=27&gp=0.jpg',
            'http://img1.imgtn.bdimg.com/it/u=2562655338,3938992529&fm=27&gp=0.jpg'
        ],
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
            axios.post('/public/getImg?',{
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