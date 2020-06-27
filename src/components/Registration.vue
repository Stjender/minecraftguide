<template>
    <div id="Registration">
        <h1>Registration</h1>
        <div class="registration">
            <div class="field">
                <span class="field-text">Username</span>
                <input id="username" class="field-input" type="text" v-model="account.username" placeholder="Username"/>
            </div>
            <div class="field">
                <span class="field-text">Password</span>
                <input id="password" class="field-input" type="password" v-model="account.password" placeholder="Password"/>
                <span>minimaal 6 characters</span>
            </div>
            <div class="field">
                <span class="field-text">Email</span>
                <input id="email" class="field-input" type="text" v-model="account.email" placeholder="Email"/>
                <span>1 @ en 1 . in de email</span>
            </div>

            <button class="button-minecraft" v-on:click="Register">Register!</button>
            <br>
            <span id="error" v-if="error">De grbuikersnaam bestaat al of een veld is niet geldig</span>
        </div>
        <br>
        <router-link class="link" to="/Login">Heb je al een account? Klik dan hier!</router-link>
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
.registration {
    margin-top: 100px;
    text-align: center;
    width: 250px;
    margin-left: auto;
    margin-right: auto;
}

.button-minecraft {
    width: 100%;
    margin-top: 30px;
}
</style>