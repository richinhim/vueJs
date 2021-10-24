import lifecycleLogger from '../mixins/lifecycle-logger.mixins.js'
import MessageListItem from "./MessageListItem.js";
export default {
    name:'MessageList',
    mixins: [lifecycleLogger],
    template: `<ul><message-list-item v-for="item in items" :item="item"
                :key="item.id" @delete="deleteMessage(item)">
                </message-list-item></ul>`,
    props:{
            items:{
                type: Array,
                required: true
            }},
    component: {
        MessageListItem
    },
    methods: {
        deleteMessage(message){
            this.$emit('delete',message);
            }
},

}