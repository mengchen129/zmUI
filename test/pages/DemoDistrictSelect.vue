<template>
    <div class="demo-page">
        <zm-header :back="true">District Select</zm-header>

        <p><button class="demo-btn" @click="showDistrictSelect">选择地区</button></p>
        <p v-if="districtId">你选择了：{{ district }} （ID: {{ districtId }}）</p>

        <zm-district-select
                :options="districtList"
                text-key="name"
                value-key="id"
                children-key="children"
                ref="districtSelect"
                @value="onDistrictChange"
        ></zm-district-select>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                districtList: [],
                district: null,
                districtId: null,
            }
        },
        methods: {
            showDistrictSelect() {
                this.$refs.districtSelect.open(this.district);
            },
            onDistrictChange(value) {
                console.log(value);
                this.district = value.district.join(' ');
                this.districtId = value.id;
            }
        },
        mounted() {
            axios.get('https://raw.githubusercontent.com/mengchen129/zmUI/master/test/assets/areaTree.json').then(resp => {
                this.districtList = resp.data;
            })
        }
    }
</script>

<style>
</style>