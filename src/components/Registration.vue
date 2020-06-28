<template>
    <div id="Registration">
        <h1>Registreren</h1>
        <div class="registration">
            <div class="field">
                <p class="field-text">Username</p>
                <input id="username" class="field-input" type="text" v-model="account.username" placeholder="Username"/>
            </div>
            <div class="field">
                <p class="field-text">Password</p>
                <input id="password" class="field-input" type="password" v-model="account.password" placeholder="Password"/>
                <p>minimaal 6 characters</p>
            </div>
            <div class="field">
                <span class="field-text">Email</span>
                <input id="email" class="field-input" type="text" v-model="account.email" placeholder="Email"/>
            </div>
            <p id="error" v-if="error">De gebruikersnaam bestaat al of een veld is niet geldig</p>
            <button class="button-minecraft" v-on:click="Register">Register!</button>
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

#error {
    color: red;
}
</style>