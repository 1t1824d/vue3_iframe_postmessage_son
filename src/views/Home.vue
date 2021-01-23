
<template>
  <div class="Home">
    <div class="Home_title">我是子组件</div>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="showdata"
      class="textareabox"
    >
    </el-input>
    <div class="postMessage_showdata">{{postMessage_showdata}}</div>
    <el-button type="primary" @click="sendMessage" class="buttobox"
      >向 iframe 外发送信息</el-button
    >
  </div>
</template>

<script>

export default {
  data() {
    return {
      showdata: "我是子组件传来的数据",
     
    };
  },
computed:{
  postMessage_showdata(){
    return this.$store.state.postdata
  }
},
  methods: {
    sendMessage() {
      window.parent.postMessage(
        {
          cmd: this.showdata+Math.random(),
          params: {
            messge: "我是子组件",
            id: "son",
          },
        },
        "*"
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.Home {
  display: flex;
  flex-flow: column;
  align-items: center;

  width: 100%;
  .Home_title {
    width: 10%;
    margin-top: 160px;
    font-size: 24px;
    font-weight: bold;
    color: teal;
  }
  .postMessage_showdata{
    border: 1px solid teal;
     width: 20%;
     height: 60px;
     overflow: auto;
      margin-top: 60px;
  }
  .textareabox {
    width: 20%;
    margin-top: 60px;
  }
  .buttobox {
    margin-top: 60px;
    width: 10%;
  }
}
</style>