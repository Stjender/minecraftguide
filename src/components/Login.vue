<template>
    <div id="Login">
        <body>
            <h1 class="title">Inloggen</h1>

            <div class="login">
                <div class="field">
                    <p class="field-text">Username</p>
                    <input id="username" class="field-input" type="text" v-model="username" placeholder="Username"/>
                </div>
                <div class="field">
                    <p class="field-text">Password</p>
                    <input id="password" class="field-input" type="password" v-model="password" placeholder="Password"/>
                </div>
                <p id="error" v-if="error">de username of password klopt niet</p>
                <button class="button-minecraft" v-on:click="Login">Login!</button>
            </div>
            <br>
            <router-link class="link" to="/Register">Geen account? Maak er hier een aan!</router-link>
        </body>
    </div>
</template>

<script>
    import call from '../AxiosCreation';

    export default {
        name: 'Login',

        data() {
            return {
                username: '',
                password: '',
                result: '',
                error: false,
            };
        },

        methods: {
            Login(){
                const params = new URLSearchParams();
                params.append('username', this.username);
                params.append('password', this.password);
                call.post("/account/login", params).then(resp => {
                    if(resp.data === "")
                    {
                        this.error = true;
                    }
                    else
                    {
                        sessionStorage.setItem('userId', resp.data.id)
                        this.$router.push('/Items');
                    }
                })
            }
        }
    };
</script>

<style scoped>
    .login {
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

    /*Rest*/
    html {
        background-color: green;
        font-family: monospace;
        font-size: 18px;
        line-height: 26px;
    }



</style>