<template>
  <el-dialog
        style="text-align: center"
        title="发表"
        :visible.sync="dialogVisible"
        :show-close=false
        width="80%">
    <el-form label-width="80px">
      <el-form-item label="标题">
        <!--请修改这两行注释中间的代码来输入消息标题-->
        <el-input placeholder="title" v-model="state.title"></el-input>
        <!--请修改这两行注释中间的代码来输入消息标题-->
      </el-form-item>
      <el-form-item label="内容">
        <!--请修改这两行注释中间的代码来输入消息内容-->
        <el-input  type="textarea" placeholder="message" v-model="state.message"></el-input>
        <!--{{state.message}}-->
        <!--请修改这两行注释中间的代码来输入消息内容-->
      </el-form-item>
      <el-form-item label="发帖名">
        <el-input :disabled="true" v-if="state.username_valid" :value="state.username"/>
        <span v-if="state.username_valid===false" style="color: red">请在主页右上设置名字!</span>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <!--请修改这两行注释中间的代码来产生相应按钮的点击事件-->
      <el-button v-on:click="Close">取 消</el-button>
      <el-button type="primary"
                  @click="Post()"
                  :disabled="state.username_valid===false"
                  >确 定</el-button>
      <!--请修改这两行注释中间的代码来产生相应按钮的点击事件-->
    </span>
  </el-dialog>
</template>

<script>
// 请在下方设计实现自己的数据结构以及函数
export default {
	name: "PostDialog",
	props: {
		dialogVisible: {
			type: Boolean,
			default: () => true
		},
		state: {
			type: Object,
			default: () => {
				return {
					username: "",
					username_valid: false,
          title:"",
          message:"",
				}
			}
		},
    CloseDialog: { //外部传入传递回调函数， 父组件的变量只能由父组件自己修改，子组件不能修改父组件传入的props
      type:Function,
      default: ()=>{
        console.log("in default CloseDialog");
        //this.dialogVisible=false;
      }
    },
    postMessage: {
      type:Function,
      default: ()=>{
        console.log("in PostMessage");
        return ()=>{}
      }
    }
	},
	data(){
		return {
		}
	},
	methods: {
    greet:function(){
      alert("hello");
    },
    Close:function() {
      console.log("in Close in PostDialog");
      console.log(this);
      this.CloseDialog();
    },
    Post:function(){
      var str={title:this.state.title,
          message:this.state.message,
          user:this.state.username
          };
      this.postMessage(str);
      this.Close();
    }
	}
}
</script>