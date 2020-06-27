<template>
    <div id="UserItems">
        <h1>Your Items</h1>
        <br>
        <button class="button-minecraft" @click="$router.push('/Items')">Show all items</button>
        <div id="useritems-centered">
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
    import call from "@/AxiosCreation";
    import Item from "@/components/Item";

    export default {
        name: "UserItems",

        components: {Item},

        mounted: function () {
            this.getuseritems();
        },

        data() {
            return {
                items: [],
                userId: Number,
            }
        },

        methods: {
            getuseritems() {
                const params = new URLSearchParams();
                params.append("accountid", sessionStorage.getItem('userId'));
                call.post("/item/fromuser", params).then( resp => {
                    this.items = [];
                    this.items = resp.data;
                })
            },
        }
    }


</script>

<style scoped>

    #useritems-centered {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        margin-top: 100px;
        text-align: center;
        width: 700px;
        justify-content: center;
    }

</style>