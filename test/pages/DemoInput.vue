<template>
    <div class="demo-page bg-gray no-lr-padding">
        <zm-header :back="true">Input</zm-header>

        <div class="demo-form-group">
            <zm-input placeholder="公司名称" v-model="company">公司名称</zm-input>
            <zm-input placeholder="姓名" v-model="name">姓名</zm-input>
            <zm-input placeholder="手机号" v-model="mobile" :max-length="11">手机号</zm-input>
        </div>
        <div class="demo-form-group">
            <zm-input placeholder="请选择" type="select" v-model="job" :options="jobList">职位</zm-input>
            <zm-input placeholder="请选择" type="select" v-model="experience" :options="experienceList" text-key="text">工作年限</zm-input>
        </div>

        <div class="demo-flex-center">
            <button type="button" class="demo-btn" @click="submitForm">查看表单数据</button>
        </div>

        <zm-modal></zm-modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                company: '',
                name: '',
                mobile: '',
                job: '',
                experience: null,

                jobList: ['前端工程师', '后端工程师', 'Android 工程师', 'iOS 工程师', '设计师', '产品经理'],
                experienceList: [
                    {value: 1, text: '1年以下'},
                    {value: 2, text: '1-3年'},
                    {value: 3, text: '3-5年'},
                    {value: 4, text: '5-10年'},
                    {value: 5, text: '10年以上'},
                ]
            }
        },
        computed: {
            experienceValue() {
                return this.experience && this.experience.value;
            }
        },
        methods: {
            submitForm() {
                this.$alert('表单信息：' + JSON.stringify({
                        company: this.company,
                        name: this.name,
                        mobile: this.mobile,
                        job: this.job,
                        experience: this.experienceValue,
                    }));
            },
            openJobChoose() {
                this.$refs.jobSelect.open();
            },
            openExperienceChoose() {
                this.$refs.experienceSelect.open();
            }
        }
    }
</script>

<style>
    .demo-form-group {
        margin-bottom: 10px;
    }
</style>