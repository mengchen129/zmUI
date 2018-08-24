<template>
    <div class="demo-page">
        <zm-header :back="true">Switch</zm-header>

        <div class="demo-flex-space-between demo-margin-bottom">
            <div>普通开关</div>
            <zm-switch v-model="checked1"></zm-switch>
        </div>
        <div class="demo-flex-space-between demo-margin-bottom">
            <div>开启前有确认</div>
            <zm-switch v-model="checked2" :prevent-default="true" @before-change="beforeSwitchOn"></zm-switch>
        </div>
        <div class="demo-flex-space-between">
            <div>关闭前有确认</div>
            <zm-switch v-model="checked3" :prevent-default="true" @before-change="beforeSwitchOff"></zm-switch>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checked1: true,
                checked2: false,
                checked3: false,
            }
        },
        methods: {
            beforeSwitchOn(newValue) {
                if (newValue) {
                    this.$confirm('开启后可能会影响手机性能，是否确认开启？', ok => {
                        if (ok) {
                            this.checked2 = newValue;
                        }
                    })
                } else {
                    this.checked2 = newValue;
                }
            },
            beforeSwitchOff(newValue) {
                if (!newValue) {
                    this.$confirm('关闭后将无法再接收到消息，是否确认关闭？', ok => {
                        if (ok) {
                            this.checked3 = newValue;
                        }
                    })
                } else {
                    this.checked3 = newValue;
                }
            },
        }
    }
</script>