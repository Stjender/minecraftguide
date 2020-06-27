<template>
    <div id="Items">
        <h1>All Items</h1>
        <br>
        <button class="button-minecraft" @click="$router.push('/Items/Me')">Show your items</button>
        <div id="items-centered">
            <item
            v-for="currentitem in items"
            :id = currentitem.name
            :key="currentitem.id"
            :itemId="currentitem.id"
            :itemName="currentitem.name"
            ></item>
        </div>
    </div>
</template>

<script>
    import call from '@/AxiosCreation'
    import Item from "@/components/Item";

    export default {
        name: "Items",

        components: {Item},

        mounted: function () {
            this.getall();
        },

        data() {
            return {
                items: [],
                userId: Number,
            }
        },

        methods: {
            getall() {
                call.get("/item/getall").then( resp => {
                    this.items = [];
                    this.items = resp.data;
                })
            },
        }
    }
</script>

<style scoped>

    #items-centered {
        margin-left: auto;
        margin-right: auto;
        margin-top: 100px;
        text-align: center;
        width: 1200px;
    }

</style>