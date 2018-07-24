<template>
    <transition name="zm-modal">
        <div class="zm-modal" v-show="show">
            <div class="zm-modal-dialog">
                <div class="zm-modal-title" v-show="title"
                     :style="{color: titleColor, 'font-size': titleFontSize}">{{title}}</div>
                <div class="zm-modal-body" :style="{color: messageColor, 'font-size': messageFontSize}">
                    <!-- 如果有 slot，则将 slot 的值作为 slotName 渲染对应插槽 -->
                    <slot :name="slot" v-if="slot"></slot>
                    <!-- 没有 slot 则渲染普通文本 -->
                    <template v-if="!slot">{{ message }}</template>
                    <!-- prompt 会默认渲染一个输入的 form 表单 -->
                    <template v-if="type == 'prompt'">
                        <form @submit="onSubmitForm" class="zm-modal-prompt-form">
                            <input v-if="inputType == 'text'" type="text" ref="input" v-model="input" class="zm-modal-input">
                            <input v-if="inputType == 'number'" type="number" step="0.01" ref="input" v-model="input" class="zm-modal-input">
                        </form>
                    </template>
                </div>
                <div class="zm-modal-footer">
                    <button class="zm-modal-btn slave" @click="cancel()"
                            v-show="type == 'confirm' || type == 'prompt'"
                            :style="{color: cancelBtnColor}"
                    >{{ cancelBtnText || '取消' }}</button>
                    <button class="zm-modal-btn primary" @click="ok()" v-show="type">{{ okBtnText || '确定' }}</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import Api from '../plugins/GlobalApi';
    import ModalBack from '../plugins/ModalBack';

    export default {
        name: 'zm-modal',
        mixins: [ModalBack],
        data: function() {
            return {
                show: false,
                type: '',
                message: '',
                slot: null,
                title: '',
                callback: null,
                input: '',
                inputType: 'text',      // prompt 中输入框的type，目前提供text/number类型
                okBtnText: '',          // 确认按钮的文本
                cancelBtnText: '',      // 取消按钮的文本
                cancelBtnColor: '',     // 取消按钮文本颜色
                messageColor: '',       // 正文内容颜色
                messageFontSize: '',    // 正文字体大小
                titleColor: '',         // 标题颜色
                titleFontSize: '',      // 标题字体大小
            }
        },
        methods: {
            modal: function(message, title, options = {}) {
                if (typeof message === 'string') {
                    this.message = message;
                    this.slot = null;
                } else if (typeof message === 'object' && message.slot) {
                    this.slot = message.slot;
                }
                this.title = title;
                this.callback = null;
                this.input = '';
                this.okBtnText = options.okBtnText;
                this.cancelBtnText = options.cancelBtnText;
                this.cancelBtnColor = options.cancelBtnColor;
                this.messageColor = options.messageColor;
                this.titleColor = options.titleColor;
                this.titleFontSize = options.titleFontSize;
                this.messageFontSize = options.messageFontSize;
                this.show = true;
            },
            modalAlert: function(params = {}) {
                this.type = 'alert';
                this.modal(params.message, params.title || '提示', params.options);
                this.callback = params.callback;
            },
            modalConfirm: function(params = {}) {
                this.type = 'confirm';
                this.modal(params.message, params.title || '确认', params.options);
                this.callback = params.callback;
            },
            modalPrompt: function(params = {}) {
                this.type = 'prompt';
                this.modal(params.message, params.title || '输入', params.options);
                this.callback = params.callback;
                this.inputType = params.options.inputType || 'text';
                this.$nextTick(() => {
                    this.$refs.input.focus();
                });
            },
            ok: function() {
                var self = this;
                this.show = false;
                setTimeout(function() {
                    if (self.callback) {
                        self.callback(self.type == 'prompt' ? self.input : true);
                    }
                }, 0);
            },
            cancel: function() {
                var self = this;
                this.show = false;
                setTimeout(function() {
                    if (self.callback) {
                        self.callback(self.type == 'prompt' ? undefined : false);
                    }
                }, 0);
            },
            onSubmitForm: function(e) {
                e.preventDefault();
                this.ok();
                return false;
            }
        },
        mounted() {
            Api.alert = (message, title, callback, options = {}) => {
                if (typeof title === 'function') {
                    callback = title;
                    title = undefined;
                }
                this.modalAlert({
                    message,
                    title,
                    callback,
                    options
                });
            };

            Api.confirm = (message, title, callback, options = {}) => {
                if (typeof title === 'function') {
                    callback = title;
                    title = undefined;
                }
                this.modalConfirm({
                    message,
                    title,
                    callback,
                    options
                });
            };

            Api.prompt = (message, title, callback, options = {}) => {
                if (typeof title === 'function') {
                    options = callback || {};
                    callback = title;
                    title = undefined;
                }
                this.modalPrompt({
                    message,
                    title,
                    callback,
                    options
                });
            };
        }
    }
</script>