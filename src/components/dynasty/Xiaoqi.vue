<template>
	<div>
		<!-- 面包屑导航区域 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>南朝</el-breadcrumb-item>
			<el-breadcrumb-item>萧齐</el-breadcrumb-item>
		</el-breadcrumb>

		<!-- 卡片视图区域 -->
		<el-card>

			<!-- 用户列表区域 -->
			<el-table :data="textlist" border stripe @row-click="open"  style=" cursor: pointer">
				<el-table-column type="index" ></el-table-column>
				<el-table-column label="篇名" prop="title"></el-table-column>
				<el-table-column label="作者" prop="author"></el-table-column>
				<el-table-column label="朝代" prop="dynasty"></el-table-column>
				</el-table-column>
			</el-table>

			<!-- 分页区域 -->

		</el-card>
	</div>
</template>

<script>
	
	export default {
		name: 'Xiaoqi',
		data() {
			return {
				
				textlist: [
					{ id:"09",
					title:"江上曲",
					author:"谢朓",
					dynasty: "南齐"
					
					},
					{ id:"10",
					title:"王孙游",
					author:"谢朓",
					dynasty: "南齐"
					
					},
					
				],
				rowid:''
			}
			
		},
		
		methods: {
		open(row){
			this.$EventBus.$emit("textid",{rowid:row.id})
			this.$router.push("/texttitle")
		}
		
	
		}
	}
</script>

<style scoped>

</style>