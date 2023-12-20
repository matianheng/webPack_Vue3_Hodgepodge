<template>
  <a-layout style="min-height: 100vh">
    <a-layout-header class="header" v-model:collapsed="collapsed2">
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }">
        <a-menu-item v-for="(item ,index) in menuHeardList" :key="index">{{item.name}}</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys2" theme="dark" mode="inline">
          <label v-for="(item ,index) in menuLeftList" :key="index">
            <label v-if="item.sonMenuList!=undefined &&  item.sonMenuList.length>0" >
              <a-sub-menu>
                <template #title>
                  <span>
                    <user-outlined />
                    <span>{{item.name}}</span>
                  </span>
                </template>
                <a-menu-item
                  v-for="(item2 ,index) in item.sonMenuList"
                  :key="index"
                  @click="selectFn(item2.itemIndex)"
                >{{item2.name}}</a-menu-item>
              </a-sub-menu>
            </label>
            <a-menu-item v-else :key="item.itemIndex" @click="selectFn(item.itemIndex)">
              <pie-chart-outlined />
              <span>{{item.name}}</span>
            </a-menu-item>
            <label></label>
          </label>
        </a-menu>
      </a-layout-sider>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <!-- {{selectedKeys}}
          {{selectedKeys2}}
          {{collapsed}} -->
          <a-image :src="add"/>
          <component :is="tabs[currentTabIndex]"></component>
        </div>
        <a-layout-footer style="text-align: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup  lang="ts">
import add from "@/assets/添加.png";
import antvX6 from "@/views/antvX6/index.vue";
import index from "@/views/antvX6VUE3/index.vue";
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined
} from "@ant-design/icons-vue";
import {
  computed, //计算属性       const plusOne = computed(() => count.value + 1)
  reactive, //创建响应式对象  const obj = reactive({ count: 0 })
  ref, //创建响应式属性包括对象 但是使用的时候要带 属性.value
  onMounted,
  watch,
  onUpdated,
  onBeforeMount,
  getCurrentInstance,
  inject
} from "vue";
const service = getCurrentInstance()?.appContext.config.globalProperties.$service;
onMounted(async () => {
  menuList.list = [
    { name: "流程图编辑器", type: "1", itemIndex: "1" },
    { name: "x6", type: "1", itemIndex: "2" },
    {
      name: "User",
      type: "1",
      sonMenuList: [
        { name: "Tom", itemIndex: "1" },
        { name: "Bill", itemIndex: "2" },
        { name: "Alex", itemIndex: "3" }
      ]
    },
    {
      name: "Team",
      type: "1",
      sonMenuList: [
        { name: "Team 1", itemIndex: "1" },
        { name: "Team 2", itemIndex: "2" },
        { name: "Team 3", itemIndex: "3" }
      ]
    },
    { name: "File", type: "1", itemIndex: "4" },
    { name: "PC-Web", type: "2", itemIndex: "5" },
    { name: "H5", type: "2", itemIndex: "6" },
    { name: "APP", type: "2", itemIndex: "7" }
  ];
  menuHeardList.value = [];
  for (let item in menuList.list) {
    if (menuList.list[item].type == "2") {
      menuHeardList.value.push(menuList.list[item]);
    } else if (menuList.list[item].type == "1") {
      menuLeftList.value.push(menuList.list[item]);
    }
  }
  console.log("sdasdasdasdasdasd", menuHeardList);

  await query(1);
  console.log(process.env.NODE_ENV);
  debugger
});
  const query = async (key: number) => {
    let data={names:['VehicleGroupType']};
        service.getDefList(data).then(res => {
        if (res.resultCode == "0000") {
          console.log("冲冲冲向前冲",res.data);
          localStorage.setItem("getDefList", JSON.stringify(res.data))
           
      
        }
    })
  };
const collapsed = ref<boolean>(false);
const collapsed2 = ref<boolean>(false);
const currentTabIndex = ref<number>(1);
const selectedKeys = ref<number[]>([0]);
const selectedKeys2 = ref<string[]>(["1"]);
const tabs = ref(["", antvX6, index]);
const menuList = reactive({ list: [] as any }) as any;
const menuHeardList = ref([]) as any;
const menuLeftList = ref([]) as any;
const selectFn = async (key: number) => {
  currentTabIndex.value = key;
  //  debugger;
};

</script>
<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
.ant-layout-sider >>> .ant-layout-sider-trigger {
  width: 20px !important;
  float: right !important;
  color: rgb(255, 255, 255) !important;
  position: absolute !important;
  top: 50% !important;
  right: 0px !important;
}
</style>
