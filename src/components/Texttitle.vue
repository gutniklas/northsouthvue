<template>
	<div class="textbackstyle">
	
		<div class="butt"><button  @click="returnhome">回到首页</button></div>
		<div v-html="textinhalt" class="backstyle">{{textinhalt}}</div>

	
	</div>
</template>

<script>
	export default {
		name: 'Texttitle',

		data() {
			return {
				text01: [
					{
						id:"01",
						inhalt:"谁能访故剑，<br>会自逐前鱼。<br>裁纨终委箧，<br>织素空有余。"
					},
					{   
						id:"02",
						inhalt:"帽上著笼冠，<br>袴上著朱衣。<br>不知是今是，<br>不知非昔非。"
						
					},
					
					
					{	id:"05",
						inhalt:"绮罗日减带，<br>桃李无颜色。<br>思君君未归，<br>归来岂相识？"
					},
					{
						id:"06",
						inhalt:"清波收潦日，<br>华林鸣籁初。<br>芙蓉露下落，<br>杨柳月中疏。"
					},
					{
						id:"07",
						inhalt:"樵苏无夙饮。<br>凿冰煮朝飡。<br>悲矣采薇唱。<br>苦哉有余酸。"
					},
					{
						id:"08",
						inhalt:"风观要春景，<br> 月谢迎秋光。<br>沿波被华若，<br>随山茂贞芳。"
					},
					{
						id:"09",
						inhalt:"易阳春草出，踟蹰日已暮。<br>莲叶尚田田，淇水不可渡。<br>愿子淹桂舟，时同千里路。<br>千里既相许，桂舟复容与。<br>江上可采菱，清歌共南楚。"
					},
					{
						id:"10",
						inhalt:"绿草蔓如丝，<br>杂树红英发。<br>无论君不归，<br>君归芳已歇。"
					},
					
					
					{
						id: "11",
						inhalt: "	东飞伯劳西飞燕，黄姑织女时相见。<br>谁家女儿对门居，开颜发艳照里闾。<br>南窗北牖挂明光，罗帷绮箔脂粉香。<br>女儿年几十五六，窈窕无双颜如玉。<br>三春已暮花从风，空留可怜与谁同。",


					},
					{
						id: "12",
						inhalt: "我有一宝剑，出自昆吾溪。<br>照人如照水，切玉如切泥。<br>锷边霜凛凛，匣上风凄凄。<br>寄语张公子，何当来见携？"
					},
					
				],
				textid01: '1'
			}
		},
		computed: {
			textinhalt() {
				for (let i of this.text01) {

					if (i.id == this.textid01) {
						return i.inhalt
					}
				}
			}

		},
		methods:{
			returnhome(){
				this.$router.replace('/home')
			}
			
		},
		beforeCreate() {
			this.$EventBus.$on("textid", ({
					rowid
				}) => {

					this.$EventBus.rowid = rowid

				}

			)

		},
		mounted() {
			this.textid01 = this.$EventBus.rowid
		},


	}
</script>

<style scoped>
.textbackstyle{
	height: 100%;
	background-color:darkkhaki;
	
}	
.backstyle{
		font-size: 20px;
	    text-align: center;
		line-height: 40px;
		width: 450px;
		height: 300px;
		background-color: darkkhaki;
		border-radius: 3px;
		position: absolute;
		left: 50%;
		top: 50%;
		
		transform: translate(-50%, -50%);
 }
 .butt{
	display: flex;
	justify-content: flex-end;
	
	
 }


</style>
