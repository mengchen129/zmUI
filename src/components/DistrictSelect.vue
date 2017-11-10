<template>
    <div class="zm-single-select">
        <transition name="zm-enter-from-bottom">
            <div class="zm-single-select-main" v-show="show">
                <div class="zm-single-select-header">
                    <div class="zm-district-select-current-list">
                        <div class="zm-district-select-current-wrap">
                            <div class="zm-district-select-current" :class="{selected: level == 1}">{{ province && province[textKey] || '所在省'}}</div>
                        </div>
                        <div class="zm-district-select-current-wrap" ref="citySelectColumn">
                            <div class="zm-district-select-current" :class="{selected: level == 2}">{{ city && city[textKey] || '所在市'}}</div>
                        </div>
                        <div class="zm-district-select-current-wrap" ref="countySelectColumn">
                            <div class="zm-district-select-current" :class="{selected: level == 3}">{{ county && county[textKey] || '所在县'}}</div>
                        </div>
                    </div>
                    <button class="zm-single-select-ok" @click="ok" :disabled="!isSelectFinish">确定</button>
                </div>
                <div class="zm-district-select-list">
                    <div class="zm-district-select-list-column" v-show="level >= 0">
                        <div class="zm-district-select-item"
                             v-for="item in options"
                             @click="chooseProvince(item)"
                             :class="{selected: province == item}"
                        >{{ item[textKey] }}</div>
                    </div>
                    <div class="zm-district-select-list-column" ref="cityListColumn" v-if="province && province[childrenKey]" v-show="level >= 1">
                        <div class="zm-district-select-item"
                             v-for="item in province[childrenKey]"
                             @click="chooseCity(item)"
                             :class="{selected: city == item}"
                        >{{ item[textKey] }}</div>
                    </div>
                    <div class="zm-district-select-list-column" ref="countyListColumn" v-if="city && city[childrenKey]" v-show="level >= 2">
                        <div class="zm-district-select-item"
                             v-for="item in city[childrenKey]"
                             @click="chooseCounty(item)"
                             :class="{selected: county == item}"
                        >{{ item[textKey] }}</div>
                    </div>
                </div>
            </div>
        </transition>

        <transition name="zm-shadow">
            <div class="zm-shadow" v-show="show" @click="show = false"></div>
        </transition>
    </div>
</template>

<script>
    import ModalBack from '../plugins/ModalBack';

    export default {
        name: 'zm-district-select',
        mixins: [ModalBack],
        props: {
            options: {
                type: Array,
                default: []
            },
            textKey: {
                type: String,
                default: 'text'
            },
            valueKey: {
                type: String,
                default: 'id'
            },
            childrenKey: {
                type: String,
                default: 'children'
            }
        },
        data() {
            return {
                show: false,
                province: null,
                city: null,
                county: null,

                level: 0,       // 0-未选择 1-已选择省 2-已选择市 3-已选择县
            }
        },
        computed: {
            isSelectFinish() {
                return this.province && this.city && this.county && this.level == 3;
            }
        },
        methods: {
            open() {
                this.show = true;
            },
            ok() {
                this.show = false;
                this.$emit('value', {
                    [this.valueKey]: this.county[this.valueKey],
                    district: [
                        this.province[this.textKey],
                        this.city[this.textKey],
                        this.county[this.textKey],
                    ]
                });
            },
            chooseProvince(item) {
                // 切换了省，将市和县清除
                if (item !== this.province) {
                    this.city = null;
                    this.county = null;
                }

                this.province = item;
                this.level = 1;

                // 如果市级只有一个，则自动选中它
                if (this.province[this.childrenKey].length === 1) {
                    this.chooseCity(this.province[this.childrenKey][0]);
                }

                // 根据第二列的实际宽度来确定标题宽度，并重置滚动条
                this.$nextTick(() => {
                    this.$refs.citySelectColumn.style.width = this.$refs.cityListColumn.offsetWidth + 'px';
                    this.$refs.cityListColumn.scrollTop = 0;
                });
            },
            chooseCity(item) {
                // 切换了市，将县清除
                if (item !== this.city) {
                    this.county = null;
                }

                this.city = item;
                this.level = 2;

                // 根据第三列的实际宽度来确定标题宽度，并重置滚动条
                this.$nextTick(() => {
                    this.$refs.countySelectColumn.style.width = this.$refs.countyListColumn.offsetWidth + 'px';
                    this.$refs.countyListColumn.scrollTop = 0;
                });
            },
            chooseCounty(item) {
                this.county = item;
                this.level = 3;
            }
        }
    }
</script>