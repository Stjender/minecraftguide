<template>
    <div id="Item" v-on:click="setFavorite">
        <span id="name">{{itemName}}</span>
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
            }
        }
    }
</script>

<style scoped>

    #Item{
        height: 200px;
        width: 150px;
        text-align: center;
        background-color: dimgrey;
        margin: 10px;
    }

</style>