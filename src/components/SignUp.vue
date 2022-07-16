<template>
    <div>
        <div class="signup">
            <h1>Sign Up</h1>
            <div class="form">
                <input type="text"
                    v-model="name"
                    placeholder="Enter Name">
                <input type="email"
                    v-model="email"
                    placeholder="Enter Email">
                <input type="password"
                    v-model="password"
                    placeholder="Enter Password">
                <button type="submit"
                    v-on:click="signUp">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "SignUp",
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                email: this.email,
                password: this.password
            });
            console.warn(result);
            if (result.status == 201) {
                alert("sign up done");
                localStorage.setItem("user-info", JSON.stringify(result.data))
            }
        }
    }
}
</script>

<style >
* {
    padding: 0;
    margin: 0;
}

body {
    font-family: Arial, sans-serif;


}

.signup h1 {
    display: flex;
    width: 100%;
    padding-top: 200px;

    align-items: center;
    justify-content: center;
    margin: auto;
    color: skyblue;
}

.form {

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-top: 20px;
}

.form input {
    width: 400px;
    padding: 8px;
    margin: 10px;
    border-radius: 5px;
    text-align: center;
    border: 2px solid skyblue;
    font-size: 20px;
}

.form button {
    width: 420px;
    padding: 5px;
    font-size: 20px;
    background-color: skyblue;
    border: 2px solid skyblue;
    border-radius: 5px;
    cursor: pointer;
}
</style>