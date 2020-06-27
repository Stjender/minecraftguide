<template>
    <div id="Home">
        <h1>Home</h1>
        <br>
        <button v-on:click="switchitems">{{buttontext}}</button>
        <div id="home-centered">
            <item
            v-for="currentitem in items"
            :id = currentitem.name
            :key="currentitem.id"
            :item-id="currentitem.id"
            :item-name="currentitem.name"
            ></item>
        </div>
    </div>
</template>

<script>
    import call from '@/AxiosCreation'
    import Item from "@/components/Item";

    export default {
        name: "Home",

        components: {Item},

        mounted: function () {
            this.getall();
        },

        data() {
            return {
                items: [],
                buttontext: "Show your items",
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

            getuseritems() {
                const params = new URLSearchParams();
                params.append("accountid", sessionStorage.getItem('userId'));
                call.post("/item/fromuser", params).then( resp => {
                    this.items = [];
                    this.items = resp.data;
                })
            },

            switchitems() {
                if(this.buttontext === "Show your items")
                {
                    this.getuseritems();
                    this.buttontext = "Show all items";
                }
                else {
                    this.getall();
                    this.buttontext = "Show your items";
                }
            }
        }
    }
</script>

<style scoped>

    #home-centered {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        width: 700px;
        justify-content: center;
    }

</style>