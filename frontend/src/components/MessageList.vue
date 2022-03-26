<template>
  <div id="message-list">
    <!--请修改这两行注释中间的代码，达到用多个MessageBlock来展示messageList数据的效果-->
    <div v-for="item in messageList" v-bind:key="item.index">
		<MessageBlock :title="item.title"
						:message="item.message"
						:user="item.user"
						:timestamp="item.timestamp"/>
	</div>
	<!--请修改这两行注释中间的代码，达到用多个MessageBlock来展示messageList数据的效果-->
  </div>
</template>

<script>
import MessageBlock from "@/components/MessageBlock"

export default {
	name: "MessageList",
	components: {
		MessageBlock
	},
	props: {
		messageList: {
			type: Array,
			default: () => new Array(5).fill({
				title: "Hello",
				message: "Hello World!",
				user: "unknown",
				timestamp: new Date().getTime()
			})
		}
	}
}
</script>
