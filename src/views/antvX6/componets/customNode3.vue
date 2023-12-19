<!-- 我的页面 -->

<template>
    <div>
        <div v-if="!customNodeObj.defaultShow">
            <div class="compoentsProt1">
                <img class="compoentsProt_foot_left compoentsProt_footImg" src="@/assets/导入.png" />
                <div class="compoentsProt_title"> {{customNodeObj.name}} </div>
                <img v-if="customNodeObj.status=='1'" class="compoentsProt_foot_right compoentsProt_footImg" src="@/assets/success_p.png" />
                <img v-if="customNodeObj.status=='0'" class="compoentsProt_foot_right compoentsProt_footImg" src="@/assets/error_p.png" />
            </div>
        </div>
        <div v-if="customNodeObj.defaultShow" class="compoentsProt2">
            <div class="defaultShow">
                <div class="defaultShow_title">{{customNodeObj.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》'
import "@/teme/common.css";
let srcd =
    "data:image/png;base64,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";
console.log(srcd);
export default {
    name: "customNode",
    components: {},
    props: {},
    inject: ["getNode"],
    data() {
        // 这里存放数据
        return {
            filterAddress: "",
            customNodeObj: {},
            //    fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            fits: "fill",
            url: "data:image/png;base64,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",
            url2: "data:image/png;base64,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"
        };
    },
    // 监听属性 类似于data概念
    computed: {},
    // 监控data中的数据变化
    watch: {},
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        let _this = this;
        console.log("==========", this.getNode());
       
        this.customNodeObj = this.getNode().data.customNodeObj;
        this.getNode().on("change:data", ({ current }) => {
            this.customNodeObj = current.customNodeObj;
            console.log("----,", current);
            _this.$forceUpdate();
        });
        //  this.$emit('cellChangedNode', this.getNode())
        this.$store.commit('cellChangedNodefn', this.getNode())
    },
    beforeCreate() {}, // 生命周期 - 创建之前
    beforeMount() {}, // 生命周期 - 挂载之前
    beforeUpdate() {}, // 生命周期 - 更新之前
    updated() {}, // 生命周期 - 更新之后
    beforeUnmount() {}, // 生命周期 - 销毁之前
    unmounted() {}, // 生命周期 - 销毁完成
    activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
    // 方法集合
    methods: {
        filterChange() {
            // this.filterAddress?document.querySelector('.display').className='display beyond':document.querySelector('.display').className='display';
            document.querySelector(".display").innerHTML = this.filterAddress;
        }
    }
};
</script>

<style scoped>
.compoentsProt_footImg {
    width: 25px;
    margin: 0px 5px;
}

.compoentsProt_foot_left {
    margin: 0px 5px;
}

.compoentsProt_foot_right {
    margin: 0px 5px;
}

.compoentsProt1 {
    border: 1px solid;
    width: 200px;
    height: 50px;
    box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
}

.compoentsProt2 {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
}

.defaultShow {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(700deg, rgba(0, 0, 255, 0), #5895c1 30%);
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
}

.defaultShow_title {
    text-align: left;
    font-size: 16px;
    color: #fff;
}

.compoentsProt_count {
    width: 150px;
    height: 25px;
    background: #ffffff;
    display: flex;
    align-items: center;
    text-align: center;
    /* justify-content: center; */
    border-radius: 0 0 10px 10px;
    flex-direction: inherit;
    padding: 0px 5px;
}

.compoentsProt_lable {
    /* width: 100%; */
    text-align: left;
    font-size: 10px;
}

.compoentsProt_foot {
    width: 100%;
    text-align: right;
}

.compoentsProt_number {
    width: 20px;
    height: 20px;
    color: #fff;
    border: 3px solid;
    border-radius: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 5px;
    position: absolute;
}

.compoentsProt_title {
    width: 100px;
    height: 50px;
    font-size: 16px;
    color: #000;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    line-height: 50px;
}

.compoentsProt_foot_img {
    width: 18px;
    margin: 0px 5px;
    position: absolute;
    right: 0;
}
</style>
