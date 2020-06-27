<template>
    <div class="Item" v-on:click="setFavorite">
        <img class="image-item" :src="getImgUrl(itemName)">
        <br>
        Voeg {{itemName}} aan je lijst!
    </div>
</template>

<script>
    import call from '@/AxiosCreation'

    export default {
        name: "Item",

        props: {
            itemId: Number,
            itemName: String
        },

        methods: {
            setFavorite() {
                const params = new URLSearchParams();
                params.append("accountId", sessionStorage.getItem('userId'));
                params.append("itemId", this.itemId);
                call.post("item/favorite", params)
            },

            getImgUrl(item) {
                var images = require.context('../assets/', false, /\.png$/)
                return images('./' + item + ".png")
            }
        }
    }
</script>

<style scoped>

.Item {
    border: solid;
    background-color: rgb(52,170,47);
    border-top-color: rgb(154, 213, 151);
    border-right-color: rgb(154, 213, 151);
    border-bottom-color: rgb(36, 119, 33);
    border-left-color: rgb(36, 119, 33);
    color: white;
    text-shadow: 1px 1px black;
    font-size: 15px;
    margin: 10px;
    width: 20%;

    display: inline-block;
}

.image-item {
    width: 100%;
    float: top;
}
</style>