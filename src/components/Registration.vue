<template>
    <div id="Registration">
        <h1>Registration</h1>
        <div>
            <span>username</span>
            <br>
            <input id="username" type="text" v-model="account.username"/>
            <br>
            <span>password</span>
            <br>
            <input id="password" type="text" v-model="account.password"/>
            <br>
            <span>minimaal 6 characters</span>
            <span>email</span>
            <br>
            <input id="email" type="text" v-model="account.email"/>
            <br>
            <span>1 @ en 1 . in de email</span>
            <br>
            <button v-on:click="Register">register</button>
            <br>
            <span id="error" v-if="error">De grbuikersnaam bestaat al of een veld is niet geldig</span>
        </div>
    </div>
</template>

<script>
    import call from '../AxiosCreation';

    export default {
        name: "Registration",

        data() {
            return {
                account: {
                    username: "",
                    password: "",
                    email: "",
                },
                error: false,
            };
        },

        methods: {
            Register(){
                call.post("/register", this.account).then(resp => {
                    console.log(resp.data)
                    if(resp.data === "")
                    {
                        this.error = true;
                    }
                    else
                    {
                        this.$router.push("/Home");
                        sessionStorage.setItem('userId', resp.data.id)
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>