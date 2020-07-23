<template>
	<div class="login_container">

		<div class="login_box">
			<el-form label-width="0px" class="login_form">
				<h3 class="login_title">系统登录</h3>
				<el-form-item prop="username">
					<el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid " placeholder="账号"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="loginForm.password" prefix-icon="el-icon-lock" type="password" placeholder="密码"></el-input>
				</el-form-item>
				<el-form-item class="btns">
					<el-button type="primary" @click="login">登录</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Login',
		data() {
			return {
				loginForm: {
					username: '',
					password: ''
				},
				responseResult: []
			}
		},
		methods: {
			login() {
				var _this = this
				console.log(this.$store.state)
				this.$axios
					.post('/login', {
						username: this.loginForm.username,
						password: this.loginForm.password
					})
					.then(successResponse => {
						if (successResponse.data.code === 200) {
							// var data = this.loginForm
							_this.$store.commit('login', _this.loginForm)
							var path = this.$route.query.redirect
							this.$router.replace({
								path: path === '/' || path === undefined ? '/home' : path
							})
						}
					})
					.catch(failResponse => {})

			}
		},
	}
</script>
<style lang="less" scoped>
	.login_container {
		background-image: url(../assets/pic/1.jpg);
		height: 100%;
		background-repeat: no-repeat;
	}

	.login_box {
		width: 450px;
		height: 300px;
		background-color: #fff;
		border-radius: 3px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.login_form {
		position: absolute;
		bottom: 0;
		width: 100%;
		padding: 0 20px;
		box-sizing: border-box;
	}

	.btns {
		display: flex;
		justify-content: center;
	}

	.login_title {

		margin: 0px auto 40px auto;
		text-align: center;
	}
</style>
