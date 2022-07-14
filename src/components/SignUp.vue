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