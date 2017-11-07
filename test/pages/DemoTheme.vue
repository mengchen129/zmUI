<template>
    <div class="demo-page">
        <zm-header :back="true">Switch Theme</zm-header>

        <div class="demo-theme-list">
            <div class="demo-theme-icon-wrap"
                 v-for="(theme, index) in themes"
                 @click="switchTheme(index)"
                 :class="{selected: selectedThemeIndex === index}"
            >
                <div class="demo-theme-icon" :style="{'background-color': theme}"></div>
            </div>
        </div>

        <p style="color: #999;">注意：此 Demo 演示限于样式文件无法重复导入，所以每个颜色切换只生效一次，实际项目中一般都是指定一个主题文件</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                themes: [
                    '#33c298',
                    '#63c47d',
                    '#0096ff',
                    '#ff8800',
                ],
                selectedThemeIndex: 0,
            }
        },
        methods: {
            switchTheme(themeIndex) {
                this.selectedThemeIndex = themeIndex;
                require('../themes/theme-' + themeIndex + '.scss');
            }
        }
    }
</script>

<style>
    .demo-theme-list {
        display: flex;
        margin-bottom: 20px;
    }

    .demo-theme-icon-wrap {
        width: 50px;
        height: 50px;
        padding: 5px;
        border: 1px solid transparent;
        margin-right: 10px;
    }

    .demo-theme-icon {
        width: 100%;
        height: 100%;
        background-color: red;
    }

    .demo-theme-icon-wrap.selected {
        border: 1px solid #999;
    }
</style>