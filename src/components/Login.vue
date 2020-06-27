<template>
    <div id="Login">
        <body>
            <img class="logo" src="Images/CreeperFace.png" />
            <h1 class="title">Quick Minecraft guide</h1>

            <div class="login">
                <h3 class="text-field">Login</h3>
                <span>username</span>
                <input id="username" class="field" type="text" v-model="username"/>
                <br />
                <span>password</span>
                <input id="password" class="field" type="text" v-model="password"/>
                <br />
                <button v-on:click="Login">login</button>
                <br>
                <span id="error" v-if="error">de username of password klopt niet</span>
            </div>

            <router-link to="/Register">Register here</router-link>
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
                    console.log(resp.data);
                    if(resp.data === "")
                    {
                        this.error = true;
                    }
                    else
                    {
                        this.$router.push('/Home');
                        sessionStorage.setItem('userId', resp.data.id)
                    }
                })
            }
        }
    };
</script>

<style scoped>
    .login{
        text-align: center;
    }
    .login .text-field{
        margin: 10px;
    }

    .login .field{
        height: 30px;
        width: 250px;
        margin-bottom: 20px;;
        border-radius: 20px;
    }

    .login button{
        min-width: 100px;
        min-height: 25px;
        border-radius: 10px;
        font-weight: bold;
    }

    #error{
        color: red;
    }

    /*Rest*/
    html{
        background-color: green;
        font-family: monospace;
        font-size: 18px;
        line-height: 26px;
    }



</style>