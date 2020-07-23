<template>
	<el-container>
		<el-header>
			<div>
				<span>南北朝诗选</span>
			</div>
			<el-button type="info" @click="logout">退出</el-button>
		</el-header>
		<el-container>
			<el-aside :width="isCollapse ? '50px' : '200px'">
				<div class="toggle-button" @click="toggleCollapse">
					<>
				</div>
				<el-menu background-color="#550000" text-color="#fff" active-text-color="#409EFF" unique-opened :collapse="isCollapse"
				 :collapse-transition="false" router>

					<el-submenu :index="item.path + ''" v-for="item in menulist" :key="item.name">
						<!-- 一级菜单的模板区域 -->
						<template slot="title">

							<span>{{item.name}}</span>
						</template>

						<!-- 二级菜单 -->
						<el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.name">
							<template slot="title">

								<span>{{subItem.name}}</span>
							</template>
						</el-menu-item>
					</el-submenu>

				</el-menu>

			</el-aside>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				navdisplay: "",
				isCollapse: false,
				menulist: [{
						name: '北朝',
						path: "north",
						children: [{
								name: '魏',
								path: "wei",
								children: []
							},
							{
								name: '齐',
								path: "qi",
								children: []
							}
						]

					},
					{
						name: '南朝',
						path: "south",
						children: [{
								name: '宋',
								path: "song",
								children: []
							}, {
								name: '萧齐',
								path: "xiaoqi",
								children: []
							},
							{
								name: '梁',
								path: "liang",
								children: []
							}
						]
					},

				]
			}
		},
		methods: {
			logout() {
				window.sessionStorage.clear()
				this.$router.push('/login')
			},
			toggleCollapse() {
				this.isCollapse = !this.isCollapse
			},

		}
	}
</script>

<style scoped>
	.el-container {
		height: 100%;
	}

	.el-header {
		background-color: #55aaff;
		display: flex;
		justify-content: space-between;
		padding-left: 0;
		align-items: center;
		color: #fff;
		font-size: 20px;

		>div {
			display: flex;
			align-items: center;

			span {
				margin-left: 15px;
			}
		}
	}

	.el-aside {
		background-color: #550000;

		.el-menu {
			border-right: none;
		}
	}
	.el-main {
	  background-image: url(../assets/pic/1.jpg);
	  background-repeat: repeat;
	  text-align: center;
	}
	.toggle-button {
		height: 40px;
		background-color: #00007f;
		font-size: 20px;
		line-height: 34px;
		color: #fff;
		text-align: center;
		letter-spacing: 0.2em;
		cursor: pointer;
	}
</style>
