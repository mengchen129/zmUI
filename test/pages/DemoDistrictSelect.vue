<template>
    <div class="demo-page">
        <zm-header :back="true">District Select</zm-header>

        <p><button class="demo-btn" @click="showDistrictSelect">选择地区</button></p>
        <p v-if="districtId">你选择了：{{ district }} （ID: {{ districtId }}）</p>

        <zm-district-select
                :options="districtList"
                text-key="area_name"
                value-key="area_id"
                children-key="children"
                ref="districtSelect"
                @value="onDistrictChange"
        ></zm-district-select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                districtList: [
                    {area_id: 1, area_name: '北京市', children: [
                        { area_id: 2, area_name: '北京市', children: [
                            {area_id: 3, area_name: '朝阳区'},
                            {area_id: 4, area_name: '海淀区'},
                            {area_id: 5, area_name: '通州区'},
                            {area_id: 6, area_name: '顺义区'},
                        ] }
                    ]},
                    {area_id: 11, area_name: '山西省', children: [
                        { area_id: 12, area_name: '太原市', children: [
                            {area_id: 13, area_name: '迎泽区'},
                            {area_id: 14, area_name: '万柏林区'},
                            {area_id: 15, area_name: '小店区'},
                            {area_id: 16, area_name: '杏花岭区'},
                        ] },
                        { area_id: 12, area_name: '运城市', children: [
                            {area_id: 13, area_name: '河津县'},
                            {area_id: 14, area_name: '稷山县'},
                            {area_id: 15, area_name: '新绛县'},
                            {area_id: 16, area_name: '闻喜县'},
                        ] }
                    ]},
                    {area_id: 21, area_name: '河北省'},
                    {area_id: 22, area_name: '河南省'},
                    {area_id: 23, area_name: '山东省'},
                    {area_id: 24, area_name: '湖北省'},
                    {area_id: 25, area_name: '湖南省'},
                    {area_id: 26, area_name: '安徽省'},
                    {area_id: 27, area_name: '江苏省'},
                    {area_id: 28, area_name: '福建省'},
                    {area_id: 29, area_name: '广东省'},
                    {area_id: 30, area_name: '上海市'},
                    {area_id: 31, area_name: '四川省'},
                ],
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
                this.districtId = value.area_id;
            }
        }
    }
</script>

<style>
</style>