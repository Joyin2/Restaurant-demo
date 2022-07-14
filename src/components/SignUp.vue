<template>
    <div>
        <div class="signup">
            <h1>Sign Up</h1>
            <div class="form">
                <input type="text"
                    placeholder="Enter Name">
                <input type="email"
                    placeholder="Enter Email">
                <input type="password"
                    placeholder="Enter Password">
                <button type="submit">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SignUp"
}
</script>

<style >
* {
    padding: 0;
    margin: 0;
}

body {
    font-family: Arial, sans-serif;
    background-color: rgba(211, 0, 0, 0.139);
}

.signup h1 {
    display: flex;
    width: 100%;

    align-items: center;
    justify-content: center;
    margin: auto;
    color: rgba(0, 128, 0, 0.687);
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
    font-size: 20px;
}

.form button {
    width: 100px;
    padding: 5px;
    font-size: 20px;
    background-color: rgb(13, 185, 116);
    border-radius: 5px;
    cursor: pointer;
}
</style>