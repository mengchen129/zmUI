<template>
    <div class="demo-page">
        <zm-header :back="true">Single Select</zm-header>

        <p> 你选择了：{{ bank }}</p>
        <p><button class="demo-btn" @click="showBankSelect">选择开户银行</button></p>

        <p> 你选择了：{{  gender }}</p>
        <p><button class="demo-btn" @click="showGenderSelect">选择性别</button></p>

        <zm-single-select :options="bankList" ref="bankSelect" @value="onBankChange"></zm-single-select>
        <zm-single-select :options="genderList" text-key="text" value-key="value" ref="genderSelect" @value="onGenderChange"></zm-single-select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bankList: [
                    '中国工商银行',
                    '中国农业银行',
                    '中国银行',
                    '邮政储蓄',
                    '中国建设银行',
                    '农村信用合作社',
                    '农村商业银行',
                    '交通银行',
                    '中信银行',
                    '光大银行',
                    '华夏银行',
                    '中国民生银行',
                    '平安银行',
                    '招商银行',
                    '上海浦东发展银行',
                ],
                bank: '',

                genderList: [
                    { value: 1, text: '男' },
                    { value: 2, text: '女' },
                    { value: 3, text: '女博士' },
                ],
                gender: null,
            }
        },
        methods: {
            showBankSelect() {
                this.$refs.bankSelect.open(this.bank);
            },
            showGenderSelect() {
                this.$refs.genderSelect.open(this.gender && this.gender.value);
            },
            onBankChange(value) {
                this.bank = value;
            },
            onGenderChange(value) {
                this.gender = value;
            }
        }
    }
</script>

<style>
</style>