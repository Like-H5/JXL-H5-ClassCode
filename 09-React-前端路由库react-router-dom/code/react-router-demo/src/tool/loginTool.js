let LoginTool = {
    isLogin: true,
    login(account, password) {
        if (account === "itlike" && password === '123') {
            this.isLogin = true
            return true
        } else {
            this.isLogin = false
            return false
        }
    },
    logout() {
        this.isLogin = false
    }
}

export default LoginTool;