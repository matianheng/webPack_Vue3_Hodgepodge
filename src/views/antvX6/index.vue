<template>
    <div class="all">
    
        <a-tabs v-model="activeKey">
            <a-tab-pane key="1">
                <div class="antv-content">
                    <div class="antv-menu" v-bind:style="{height:groupWidth-130 + 'px' }">
                        <h3> 节点列表 </h3>
                        <div style="margin: 5px 10px 20px 10px;">
                            <a-input-search v-model="searchValue" placeholder="在此搜索节点" :loading="loading" enter-button @search="enter_button" />
                        </div>
                        <ul class="menu-list" v-for="item in menuList" :key="item.id">
                            <li draggable="true" @drag="menuDrag(item)"> <i :class="item.classStyle"></i> <strong>{{item.name}}</strong></li>
                        </ul>
                        <!-- <div class="wrapper-btn" v-if="isChange">
                  <a-button type="primary" @click="handlerSend">保存当前方案</a-button>
                </div> -->
                    </div>
                    <div class="antv-wrapper" v-bind:style="{height:groupWidth-130 + 'px' }">
                        <div class="wrapper-canvas" :style="{height: height}" ref="wrapper" id="wrapper" @drop="drop($event)" @dragover.prevent>11</div>
                        <div class="felxclass">
                            <a-card title="流程执行顺序" :bordered="false" style="width: 300px;display: inline-block;">
                                <div v-for="item in graphList" :key="item">
                                    <div v-if="typeof item.shape!='undefined' && item.shape=='custom-vue-node'">
                                        <div style="display: flex;">
                                            <div style="width:150px;margin-right:10px;">
                                                <p>流程名称：{{item.data.customNodeObj.name}}</p>
                                            </div>
                                            <div>
                                                <p>流程顺序：{{item.data.customNodeObj.zindex}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a-card>
                        </div>
                        <div class="wrapper-tips">
                            <div class="wrapper-tips-item">
                                <a-switch v-model:checked="isPortsShow" @change="changePortsShow"></a-switch>
    
                                <span>链接桩常显</span>
                            </div>
                        </div>
                    </div>
                    <a-drawer title="Basic Drawer" placement="right" :closable="false" :visible="editDrawer" @close="onClose">
                        <div v-if="editDrawer" class="edit-main">
                            <div class="edit-main-title">
                                <h3>{{editTitle}} </h3>
                                <i class="el-icon-close" @click="closeEditForm"></i>
                            </div>
                            <div v-if="editTitle === '编辑节点'" class="form-main">
                                <a-form ref="nodeForm" :model="form" label-width="80px">
                                    <a-form-item label="节点名称">
                                        <a-input v-model:value="form.name" @input="changeNode('name', form.name)" placeholder="Basic usage" />
                                    </a-form-item>
                                    <a-form-item label="节点文本">
                                        <a-input v-model="form.labelText" size="small" @input="changeNode('labelText', form.labelText)"></a-input>
                                    </a-form-item>
                                    <div class="see-box">
                                        <h5>预览</h5>
                                        <div class="see-item" :style="{ 'background': form.fill, 'color': form.fontFill, 'border-color': form.stroke, 'font-size': form.fontSize + 'px' }">{{form.labelText}}</div>
                                    </div>
                                </a-form>
                            </div>
                            <div v-if="editTitle === '编辑图片节点'" class="form-main">
                                <a-form ref="imageForm" :model="form" label-width="80px">
                                    <a-form-item label="节点文本">
                                        <a-input v-model="form.labelText" size="small" @input="changeImageNode('labelText', form.labelText)"></a-input>
                                    </a-form-item>
                                    <a-form-item label="图片地址">
                                        <a-input v-model="form.xlinkHref" size="small" placeholder="图片地址" @input="changeImageNode('xlinkHref', form.xlinkHref)"></a-input>
                                        <a-image :src="form.xlinkHref" style="width: 80px; height: 80px; background: #f2f2f2" fit="fill"></a-image>
                                    </a-form-item>
                                    <a-form-item label="图片尺寸">
                                        <span style="font-size: 14px; padding-right: 5px; color: #888;">宽</span>
                                        <a-input-number v-model="form.width" :min="0" label="宽" size="mini" @change="changeImageNode('width', form.width)"></a-input-number>
                                        <span style="font-size: 14px; padding-right: 5px; color: #888;">高</span>
                                        <a-input-number v-model="form.height" :min="0" label="高" size="mini" @change="changeImageNode('height', form.height)"></a-input-number>
                                    </a-form-item>
                                </a-form>
                            </div>
                            <div v-if="editTitle === '编辑连线'" class="form-main">
                                <a-form ref="edgeForm" :model="form" label-width="80px">
                                    <a-form-item label="线条样式">
                                        <a-select v-model="form.connector" size="small" placeholder="请选择" @change="changeEdgeConnector">
    
                                        </a-select>
                                    </a-form-item>
                                    <a-form-item label="线条宽度">
                                        <a-input-number v-model="form.strokeWidth" size="small" @change="changeEdgeStrokeWidth" :min="2" :step="2" :max="6" label="线条宽度"></a-input-number>
                                    </a-form-item>
                                    <a-form-item label="双向箭头">
                                        <a-switch v-model:checked="form.isArrows" @change="changeEdgeArrows"></a-switch>
                                    </a-form-item>
                                    <a-form-item label="流动线条">
                                        <a-switch v-model:checked="form.isAnit" @change="changeEdgeAnit"></a-switch>
                                    </a-form-item>
                                    <a-form-item label="调整线条">
                                        <a-switch v-model:checked="form.isTools" @change="changeEdgeTools"></a-switch>
                                    </a-form-item>
                                </a-form>
                            </div>
                            <div class="edit-btn">
                                <a-button type="danger" @click="handlerDel" style="width:100%">删除此{{editTitle === '编辑节点' ? '节点' : '连线'}}</a-button>
                            </div>
                        </div>
                    </a-drawer>
                </div>
                <div id="popupDiv" class="popupDiv-father" v-show="popupDivShow">
                          <a-card title="" id="popupDiv"  style="padding-top:10px;">
                            <ul  class="menu-list1"   v-for="item in menuList" :key="item.id">
                                <li style="list-style-type:none;" @click="menuDrag1(item)"> {{item.name}}</li>
                            </ul>
                   </a-card>
    
                </div>
                <template #tab>
                <span>
                  <android-outlined />
                  新增编辑工单
                </span>
            </template>
                </a-tab-pane>
                <a-tab-pane key="2">
            <template #tab>
                <span>
                <android-outlined /> 查看工单节点状态 </span>
           </template>
        Tab 2
      </a-tab-pane>
  </a-tabs>
  <TeleportContainer />
      <div class="wrapper-btn1"  >
              <a-button style="margin: 10px;">取消</a-button>
          
              <a-button v-if="isChange" type="primary" @click="handlerSend">保存当前方案</a-button>
            
        </div>
      
      </div>
</template>

<script>
import { Graph, Shape } from '@antv/x6'
import { reactive } from 'vue'
import sss, { configSetting, configNodeShape, configNodePorts, configEdgeLabel, graphBindKey, appendEdgeObj } from '@/views/antvX6/js/antvSettingVUE2'
import { Keyboard } from "@antv/x6-plugin-keyboard"; //键盘事件
import { Clipboard } from "@antv/x6-plugin-clipboard"; //赋值粘贴
import { Selection } from "@antv/x6-plugin-selection"; //选择器
import { register, getTeleport } from '@antv/x6-vue-shape'
import customNode from '@/views/antvX6/componets/customNode3.vue'
import { Modal, message } from 'ant-design-vue';

let _thissD = {};
let menuType = "defaultStart"
console.log(menuType);
register({
    shape: 'custom-vue-node',
    width: 200,
    height: 50,
    component: customNode,
    data: {
        type: menuType,
        customNodeObj: {}
    },


})
const TeleportContainer = getTeleport();
export default {

    mixins: [],
    name: "AntV6X",
    props: {
        height: {
            type: String,
            default: '100vh' //'720px'
        },
        value: {
            type: String,
            //  default: '[{"shape":"edge","attrs":{"line":{"stroke":"#A2B1C3","targetMarker":{"name":"block","width":12,"height":8}}},"id":"3c9b8042-ed1c-4bcb-8205-70d4a3ae1a7c","defaultLabel":{"markup":[{"tagName":"ellipse","selector":"bg"},{"tagName":"text","selector":"txt"},{"tagName":"image","selector":"img"}],"attrs":{"txt":{"fill":"#7c68fc","textAnchor":"middle","textVerticalAnchor":"middle"},"bg":{"ref":"txt","refRx":"70%","refRy":"80%","stroke":"#7c68fc","fill":"white","strokeWidth":2}}},"zIndex":0,"labels":[{"attrs":{"img":{"event":"node:clickShow","xlink:href":"data:image/png;base64,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","width":20,"height":20,"x":-10,"y":20},"labelText":{"text":""}},"position":{"distance":0.3}}],"source":{"cell":"f844eba7-157c-47c4-9816-b129a0ae9122","port":"a758d2bc-db22-4708-85df-2e2aa05ae76a"},"target":{"cell":"9936ef07-b023-4712-8e0f-68e887adcbf7","port":"2156a6f5-4050-4842-95c3-e634713d96ff"}},{"position":{"x":459,"y":63},"size":{"width":99,"height":50},"view":"vue-shape-view","shape":"custom-vue-node","data":{"type":"defaultStart","customNodeObj":{"id":1,"name":"开始2","type":"defaultStart","classStyle":"icon-oval","status":"1","description":"默认工作流","defaultShow":"start"}},"id":"f844eba7-157c-47c4-9816-b129a0ae9122","ports":{"items":[{"group":"top","id":"7f1bc2e4-66d6-42e3-90bd-fb6d3fa540b3"},{"group":"right","id":"a7a7a307-cdff-460e-8bfa-49d108d3fe49"},{"group":"bottom","id":"a758d2bc-db22-4708-85df-2e2aa05ae76a"},{"group":"left","id":"1ebe6d35-8aac-46a0-9503-190f661639e1"}]},"zIndex":1},{"position":{"x":460,"y":240},"size":{"width":70,"height":50},"view":"vue-shape-view","shape":"custom-vue-node","data":{"type":"defaultCircle","customNodeObj":{"id":5,"name":"结束","type":"defaultCircle","classStyle":"icon-square","status":"1","description":"执行模版工单","defaultShow":"end"}},"id":"7036ef07-b023-4712-8e0f-68e887adcbf7","ports":{"items":[{"group":"top","id":"2156a6f5-4050-4842-95c3-e634713d96ff"},{"group":"right","id":"1117fb6d-1dd5-456e-ae45-e139ceda5416"},{"group":"bottom","id":"b1ebc272-8a55-42ed-a92b-b928140174a2"},{"group":"left","id":"1a9b6983-b1b1-4136-884e-21e08edb5af4"}]},"zIndex":2}]'
            default: '[{"position":{"x":114,"y":108},"size":{"width":70,"height":50},"view":"vue-shape-view","shape":"custom-vue-node","data":{"type":"defaultStart","customNodeObj":{"id":1,"name":"开始","type":"defaultStart","classStyle":"icon-oval","status":"1","description":"默认工作流","defaultShow":"start"}},"id":"b0af04f2-b46b-4677-add6-653552bce9a2","ports":{"items":[{"group":"right","id":"e45da6f3-65d0-4e89-9cfe-38c6c726dd8c"}]},"zIndex":1},{"position":{"x":390,"y":110},"size":{"width":70,"height":50},"view":"vue-shape-view","shape":"custom-vue-node","data":{"type":"defaultCircle","customNodeObj":{"id":5,"name":"结束","type":"defaultCircle","classStyle":"icon-square","status":"1","description":"执行模版工单","defaultShow":"end"}},"id":"3dec4600-1b6d-41c9-a17c-c9329ce6dc78","ports":{"items":[{"group":"left","id":"888e85be-9ce5-4a6c-af3f-451e5d48446e"}]},"zIndex":2},{"shape":"edge","attrs":{"line":{"stroke":"#A2B1C3","targetMarker":{"name":"block","width":12,"height":8}}},"id":"b7571f51-9b73-429a-b971-a5017c090a82","defaultLabel":{"markup":[{"tagName":"ellipse","selector":"bg"},{"tagName":"text","selector":"txt"},{"tagName":"image","selector":"img"}],"attrs":{"txt":{"fill":"#7c68fc","textAnchor":"middle","textVerticalAnchor":"middle"},"bg":{"ref":"txt","refRx":"70%","refRy":"80%","stroke":"#7c68fc","fill":"white","strokeWidth":2}}},"labels":[{"attrs":{"img":{"event":"node:clickShow","xlink:href":"data:image/png;base64,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","width":20,"height":20,"x":-10,"y":-10},"labelText":{"text":1}},"position":{"distance":0.3}}],"source":{"cell":"b0af04f2-b46b-4677-add6-653552bce9a2","port":"e45da6f3-65d0-4e89-9cfe-38c6c726dd8c"},"target":{"cell":"3dec4600-1b6d-41c9-a17c-c9329ce6dc78","port":"888e85be-9ce5-4a6c-af3f-451e5d48446e"},"zIndex":3}]'
                      
        }
    },
    components: {

        TeleportContainer
    },
    data() {
        return {
            graphList: [],
            lableIndx: "",
            searchValue: "", //搜索栏
            loading: false,
            groupWidth: document.documentElement.clientHeight,
            posX: "",
            posY: "",
            posYz: "",
            posYx: "",
            clickShowNodeLineLableId: "", //点击线上的加号展示弹出框获取这根线的ID
            popupDivShow: false,
            customNodeObj: {},
            menuType: "defaultStart",
            //列表的数据
            menuList: [
                // { id: 1, name: '开始2', type: 'defaultStart', classStyle: "icon-oval", status: '1', description: "默认工作流", defaultShow: "start" },
                { id: 2, name: '其他', type: 'defaultSquare', classStyle: "icon-square", status: '1', description: "执行工作流", defaultShow: "" },
                { id: 3, name: '第三方审批', type: 'defaultYSquare', classStyle: "icon-square", status: '0', description: "执行模版", defaultShow: "" },
                { id: 4, name: '脚本模版', type: 'defaultRhombus', classStyle: "icon-square", status: '1', description: "执行模版工单", defaultShow: "" },
                { id: 2, name: '工作流', type: 'defaultSquare', classStyle: "icon-square", status: '1', description: "执行工作流", defaultShow: "" },
                { id: 3, name: '云资源操作', type: 'defaultYSquare', classStyle: "icon-square", status: '0', description: "执行模版", defaultShow: "" },
                { id: 4, name: '云资源脚本', type: 'defaultRhombus', classStyle: "icon-square", status: '1', description: "执行模版工单", defaultShow: "" },
                // { id: 5, name: '结束', type: 'defaultCircle', classStyle: "icon-square", status: '1', description: "执行模版工单", defaultShow: "end" }
            ],
            s_this: this,
            inumber: 0,
            graph: null,
            isChange: false,
            isPortsShow: false,
            menuItem: '',
            selectCell: '',
            editDrawer: false,
            editTitle: '',
            form: {},
            labelForm: {
                fontColor: '#333',
                fill: '#FFF',
                stroke: '#555'
            },

        }
    },
    created() {
        sss.assign(this)
        _thissD = this

    },
    watch: {
        value: {
            handler: function() {
                if (this.graph) {
                    this.isChange = false
                    this.isPortsShow = false
                    this.menuItem = ''
                    this.selectCell = ''
                    this.editDrawer = false
                    this.graph.dispose()
                    this.initGraph()
                }
            },
            deep: true,
            immediate: true
        }
    },
    mounted() {
        this.initGraph();


    },
    beforeUnmount() {
        this.graph.dispose()
    },
    methods: {
        query() {
            console.log("lalalalalala");
        },
        onClose() {
            this.editDrawer = false;
        },
        enter_button() {

        },
        // 链接桩的显示与隐藏，主要是照顾菱形
        changePortsShow(val) {
            const container = document.getElementById('wrapper')
            const ports = container.querySelectorAll('.x6-port-body')
            for (let i = 0, len = ports.length; i < len; i = i + 1) {
                ports[i].style.visibility = val ? 'visible' : 'hidden'
            }
            this.isPortsShow = val;
        },
        // 初始化渲染画布
        initGraph() {
            let _this = this;
            console.log(_this);
            const graph = new Graph({
                container: document.getElementById("wrapper"),
                panning: false,
                mousewheel: true,
                autoResize: true,
                //clipboard: true,
                ...configSetting(Shape),
                width: 800,
                height: 600,
                background: {
                    color: "#Ffff",
                },
                interacting: { nodeMovable: true },
            });
            graph.use(
                new Keyboard({
                    enabled: true,
                })
            )
            graph.use(
                new Selection({
                    enabled: true,
                })
            );
            graph.use(
                new Clipboard({
                    enabled: true,
                })
            );

            // 画布事件
            graph.on('node:mouseenter', ({ cell }) => {

                console.log(cell.isNode());
                this.changePortsShow(true)
            })
            graph.on('node:mouseleave', () => {

                if (this.isPortsShow) return
                this.changePortsShow(false)
            })
            graph.on('blank:click', () => {

                _this.editDrawer = false;


            })

            graph.on('node:clickShow', ({ view, e }) => {
                _this.popupDivShow = true;
                this.clickShowNodeLineLableId = view.cell.id
                console.log(view, e);
                console.log(6666, this.graph.toJSON());
                var posX = 0,
                    posY = 0;
                var event = event || window.event;
                if (event.pageX || event.pageY) {
                    posX = event.pageX;
                    posY = event.pageY;
                } else if (event.clientX || event.clientY) {
                    posX = event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
                    posY = event.clientY + document.documentElement.scrollTop + document.body.scrollTop;
                }
                var isChrome = window.navigator.userAgent.indexOf("Chrome") !== -1;
                if (isChrome) {
                    // document.getElementById("popupDiv").style.left = posX + "px";
                    // document.getElementById("popupDiv").style.top = posY + "px";
                    console.log(_this.graph.pageToLocal(posX, posY).x + 200)
                    document.getElementById("popupDiv").style.left = _this.graph.pageToLocal(posX, posY).x + 300 + "px";
                    document.getElementById("popupDiv").style.top = _this.graph.pageToLocal(posY, posY).y + 100 + "px";
                    _this.posX = _this.graph.pageToLocal(posX, posY).x;
                    _this.posY = _this.graph.pageToLocal(posY, posY).y;

                } else {
                    //不是Chrome，默认为IE
                    document.getElementById("popupDiv").style.pixelLeft = posX;
                    document.getElementById("popupDiv").style.pixelTop = posY;
                }
                console.log(this.posX);

                console.log(view.cell.labels[0].attrs.labelText.text);

                _this.lableIndx = view.cell.labels[0].attrs.labelText.text;


            })
            // 点击编辑
            graph.on('cell:click', ({ cell }) => {

                this.editForm(cell)
            })
            // 画布键盘事件
            graphBindKey(graph)
            // 删除
            graph.bindKey(['delete', 'backspace'], () => {
                this.handlerDel()
            })
            // 赋值
            this.graph = graph
            // 返现方法
            if (this.value && JSON.parse(this.value).length) {
                const resArr = JSON.parse(this.value)
                // 导出的时候删除了链接桩设置加回来
                console.log("vvv", resArr);
                const portsGroups = configNodePorts().groups

                if (resArr.length) {
                    const jsonTemp = resArr.map(item => {
                        if (item.ports) {
                            item.ports.groups = portsGroups;
                            //item.tools=_this.tools;//追加tools 节点的外按钮事件
                        }
                        return item
                    })

                    graph.fromJSON(jsonTemp)
                }
            }
            // 画布有变化
            graph.on('cell:changed', () => {
                this.isChangeValue()
            })

        },
        // 画布是否有变动
        isChangeValue() {
            if (!this.isChange) {
                this.isChange = true
                this.$emit('cellChanged', true)
            }
        },
        menuDrag(item) {
            console.log("00000000", item.type);

            this.menuType = item.type;
            this.customNodeObj = item;
            this.$forceUpdate();
            this.menuItem = configNodeShape(item.type);

        },

        //点击添加画布
        menuDrag1(item) {
            this.popupDivShow = false;
            this.menuType = item.type;
            this.customNodeObj = item;
            this.$forceUpdate();
            this.menuItem = configNodeShape(item.type);
            this.drop1();

        },
        //点击创建画布
        drop1() {
            let _this = this;
            let newAddEdge = appendEdgeObj(this.graph, _this.lableIndx)
            this.graph.addNode({
                shape: 'custom-vue-node',
                data: {
                    type: this.menuType,
                    customNodeObj: _thissD.customNodeObj
                },
                //这个是点哪出哪x轴 x: this.graph.pageToLocal(this.posX, this.posY).x-this.menuItem.width / 2,
                x: this.posX - this.menuItem.width / 2 + 100,
                y: this.posY - this.menuItem.height / 2 + 1,
                ports: configNodePorts()
            })
            this.posYz = this.posY - this.menuItem.height / 2,
                this.posYx = this.posX - this.menuItem.width / 2,
                this.isChangeValue();

            this.$nextTick(() => {
                //添加创建
                let target = {};
                const { cells: jsonArr } = this.graph.toJSON();
                let obj = jsonArr[jsonArr.length - 1]
                console.log(obj);
                jsonArr.map(item => {
                    if (item.id == this.clickShowNodeLineLableId) {
                        target = JSON.parse(JSON.stringify(item.target));
                        item.target.cell = obj.id; //需要被链接的节点iD
                        item.target.port = obj.ports.items[3].id //需要被连接的顶部连接点Id
                    }
                    console.log("断点", target);
                    if (newAddEdge.id == item.id) {
                        item.source.cell = obj.id;
                        item.source.port = obj.ports.items[1].id;
                        item.target.cell = target.cell;
                        item.target.port = target.port
                    }
                    if (item.shape == "custom-vue-node" && item.data.type != "defaultStart" && item.id != obj.id) {
                        if (this.posYz < item.position.y) {
                            item.position.y = item.position.y + 2;
                        }
                        if (this.posYx < item.position.x) {
                            item.position.x += this.menuItem.width + 100;

                        }

                    }
                    return item
                })

                //每次新增后排序
                jsonArr.map(item => {
                    if (item.shape == "edge" && item.id != this.clickShowNodeLineLableId) {
                        if (_this.lableIndx <= item.labels[0].attrs.labelText.text) {
                            item.labels[0].attrs.labelText.text = parseInt(item.labels[0].attrs.labelText.text) + 1;
                        }
                    }
                });
                console.log(555, JSON.parse(JSON.stringify(jsonArr)));
                //每次新增后排序
                const jsonArrSort2 = JSON.parse(JSON.stringify(jsonArr))
                let NodeList = [];
                let ShapeList = [];
                jsonArrSort2.map(item => {
                    if (item.shape == "custom-vue-node") {
                        NodeList.push(item);
                    } else {
                        ShapeList.push(item);
                    }
                })
                console.log("节点List", NodeList);
                console.log("线条List", ShapeList);

                jsonArr.map(item => {
                    for (let i = 0; i < ShapeList.length; i++) {
                        if (item.shape == "custom-vue-node" && item.data.type == "defaultStart") {
                            item.data.customNodeObj.zindex = 0
                        }
                        if (ShapeList[i].target.cell == item.id) {
                            item.data.customNodeObj.zindex = ShapeList[i].labels[0].attrs.labelText.text;
                        }
                    }

                })
                let arrList = JSON.parse(JSON.stringify(jsonArr));
                console.log(arrList);
                let arrListNode = [];
                arrList.map(item => {
                    if (item.shape == "custom-vue-node") {
                        arrListNode.push(item);
                    }
                })
                for (var i = 0; i < arrListNode.length - 1; i++) {
                    for (var j = 0; j < arrListNode.length - 1 - i; j++) {
                        if (arrListNode[j].data.customNodeObj.zindex > arrListNode[j + 1].data.customNodeObj.zindex) {
                            var temp = arrListNode[j];
                            arrListNode[j] = arrListNode[j + 1];
                            arrListNode[j + 1] = temp;
                        }
                    }
                }

                _this.graphList = arrListNode;
              
                this.graph.fromJSON(jsonArr);
                this.$forceUpdate();
            });
        },
        drop(event) { //拖动左边的时候触发
            // 节点预设 ，添加位置信息和链接桩信息组合成完整的节点
            const nodeItem = {
                ...this.menuItem,
                x: event.offsetX - (this.menuItem.width / 2),
                y: event.offsetY - (this.menuItem.height / 2),
                ports: configNodePorts()
            }
            // 创建节点
            console.log("创建节点", nodeItem);
            this.graph.addNode({
                shape: 'custom-vue-node',

                data: {
                    type: this.menuType,
                    customNodeObj: _thissD.customNodeObj
                },
                x: event.offsetX - (this.menuItem.width / 2),
                y: event.offsetY - (this.menuItem.height / 2),
                ports: configNodePorts()
            })

            this.isChangeValue()
        },



        handleMyEvent(data) {
            console.log(data);
        },
        // 点击编辑更具不同的内容获取编辑数据
        editForm(cell) {
            if (this.selectCell) this.selectCell.removeTools() // 删除修改线的工具
            this.selectCell = cell

            // 编辑node节点
            if (cell.isNode() && cell.data.type && cell.data.type.includes('default')) {
                this.editTitle = '编辑节点'
                const body = cell.attrs.body || cell.attrs.rect || cell.attrs.polygon || cell.attrs.circle
                console.log(cell.data);

                this.form = {
                    labelText: "", //cell.attrs.label.text || '',
                    fontSize: "", //cell.attrs.label.fontSize || 14,
                    fontFill: "", // cell.attrs.label.fill || '',
                    fill: "", //body.fill|| '',
                    stroke: body.stroke || '',
                    name: cell.data.customNodeObj.name || ''
                }
                return this.editDrawer = true
            }
            // 编辑连线 目前先不加
            // if(!cell.isNode() && cell.shape === 'edge'){

            //   this.editTitle = '编辑连线'
            //   this.form = {
            //     label: (cell.labels && cell.labels[0]) ? cell.labels[0].attrs.labelText.text : '',
            //     stroke: cell.attrs.line.stroke || '',
            //     connector: 'rounded',
            //     strokeWidth: cell.attrs.line.strokeWidth || '',
            //     isArrows: cell.attrs.line.sourceMarker ? true : false,
            //     isAnit: cell.attrs.line.strokeDasharray ? true : false,
            //     isTools: false
            //   }
            //   // 看连线上是否有label
            //   const edgeCellLabel = cell.labels && cell.labels[0] && cell.labels[0].attrs || false
            //   if(this.form.label && edgeCellLabel){
            //     this.labelForm = {
            //      // fontColor: edgeCellLabel.labelText.fill || '#333',
            //      // fill: edgeCellLabel.labelBody.fill || '#fff',
            //      // stroke: edgeCellLabel.labelBody.stroke || '#555'
            //     }
            //   } else {
            //     this.labelForm = { fontColor: '#333', fill: '#FFF', stroke: '#555' }
            //   }
            //   return this.editDrawer = true
            // }
        },
        closeEditForm() {
            this.editDrawer = false
            if (this.selectCell) this.selectCell.removeTools()
        },
        // 修改一般节点
        changeNode(type, value) {
            let _this = this;

            switch (type) {

                case 'name':

                    _this.selectCell.data.customNodeObj.name = reactive(value);
                    this.selectCell.setData({ dataNotUsed: { name: this.selectCell.getData().customNodeObj.name } })
                    this.selectCell.updateData({ customNodeObj: this.selectCell.getData().customNodeObj })
                    this.selectCell.attr('data', '#ccc')
                    // this.selectCell.attr('body/data', _this.selectCell.data.customNodeObj)
                    this.$forceUpdate();
                    break;
                case 'labelText':
                    this.selectCell.attr('label/text', value)
                    break;
                case 'fontSize':
                    this.selectCell.attr('label/fontSize', value)
                    break;
                case 'fontFill':
                    this.selectCell.attr('label/fill', value)
                    break;
                case 'fill':
                    this.selectCell.attr('body/fill', value)
                    break;
                case 'stroke':
                    this.selectCell.attr('body/stroke', value)
                    break;
            }
        },
        // 修改图片节点
        changeImageNode(type, value) {
            switch (type) {
                case 'labelText':
                    this.selectCell.attr('label/text', value)
                    break;
                case 'labelFill':
                    this.selectCell.attr('label/fill', value)
                    break;
                case 'fill':
                    this.selectCell.attr('body/fill', value)
                    break;
                case 'xlinkHref':
                    this.selectCell.attr('image/xlinkHref', value)
                    break;
                case 'height':
                    this.selectCell.attr('image/height', value)
                    break;
                case 'width':
                    this.selectCell.attr('image/width', value)
                    break;
            }
        },
        // 修改边label属性
        changeEdgeLabel(label, fontColor, fill, stroke) {
            this.selectCell.setLabels([configEdgeLabel(label, fontColor, fill, stroke)])
            if (!label) this.labelForm = { fontColor: '#333', fill: '#FFF', stroke: '#555' }
        },
        // 修改边的颜色
        changeEdgeStroke(val) {
            this.selectCell.attr('line/stroke', val)
        },
        // 边的样式
        changeEdgeConnector(val) {
            switch (val) {
                case 'normal':
                    this.selectCell.setConnector(val)
                    break;
                case 'smooth':
                    this.selectCell.setConnector(val)
                    break;
                case 'rounded':
                    this.selectCell.setConnector(val, { radius: 20 })
                    break;
                case 'jumpover':
                    this.selectCell.setConnector(val, { radius: 20 })
                    break;
            }
        },
        // 边的宽度
        changeEdgeStrokeWidth(val) {
            if (this.form.isArrows) {
                this.selectCell.attr({
                    line: {
                        strokeWidth: val,
                        sourceMarker: {
                            width: 12 * (val / 2) || 12,
                            height: 8 * (val / 2) || 8
                        },
                        targetMarker: {
                            width: 12 * (val / 2) || 12,
                            height: 8 * (val / 2) || 8
                        }
                    }
                })

            } else {
                this.selectCell.attr({
                    line: {
                        strokeWidth: val,
                        targetMarker: {
                            width: 12 * (val / 2) || 12,
                            height: 8 * (val / 2) || 8
                        }
                    }
                })
            }

        },
        // 边的箭头
        changeEdgeArrows(val) {
            if (val) {
                this.selectCell.attr({
                    line: {
                        sourceMarker: {
                            name: 'block',
                            width: 12 * (this.form.strokeWidth / 2) || 12,
                            height: 8 * (this.form.strokeWidth / 2) || 8
                        },
                        targetMarker: {
                            name: 'block',
                            width: 12 * (this.form.strokeWidth / 2) || 12,
                            height: 8 * (this.form.strokeWidth / 2) || 8
                        },
                    }
                })
            } else {
                this.selectCell.attr({
                    line: {
                        sourceMarker: '',
                        targetMarker: {
                            name: 'block',
                            size: 10 * (this.form.strokeWidth / 2) || 10
                        },
                    }
                })
            }
        },
        // 边的添加蚂蚁线
        changeEdgeAnit(val) {
            if (val) {
                this.selectCell.attr({
                    line: {
                        strokeDasharray: 5,
                        style: {
                            animation: 'ant-line 30s infinite linear',
                        }
                    }
                })
            } else {
                this.selectCell.attr({
                    line: {
                        strokeDasharray: 0,
                        style: {
                            animation: '',
                        }
                    }
                })
            }
        },
        // 给线添加调节工具
        changeEdgeTools(val) {
            if (val) this.selectCell.addTools(['vertices', 'segments'])
            else this.selectCell.removeTools()
        },
        // 删除节点
        handlerDel() {
            let _this = this;
            Modal.confirm({
                title: `此操作将永久删除此${this.editTitle === '编辑节点' ? '节点' : '连线'}, 是否继续?`,
                //icon: createVNode(ExclamationCircleOutlined),
                content: 'Some descriptions',
                okText: 'Yes',
                okType: 'danger',
                cancelText: 'No',
                onOk() {
                    const cells = _this.graph.getSelectedCells();
                    let cellss = JSON.parse(JSON.stringify(cells));
                    if (cellss[0].view == "vue-shape-view" && (cellss[0].data.type == "defaultStart" || cellss[0].data.type == "defaultCircle")) {
                        message.error('开始和结束的节点不能删除!');
                        return false;
                    }
                   let newAddEdge={id:""};
                    if(typeof cellss[0].data.customNodeObj.zindex!='undefined'){
                         newAddEdge = appendEdgeObj(_this.graph, _this.lableIndx)
                    }
                   // let newAddEdge = appendEdgeObj(_this.graph, _this.lableIndx)
                    console.log(newAddEdge);
                    let { cells: jsonArr } = _this.graph.toJSON(); //要删除一个节点就要获取全部节点来替换
                    console.log(jsonArr)
                    let RemoveTop = ""; //找到删除节点的顶部Id找到这条线
                    let RemoveBottom = "";
                    let RemoveLableText = "";
                    let obj1 = {};
                    let obj = {}
                    console.log(RemoveTop);
                    jsonArr.map(item => {
                        if (item.shape == "edge") {
                            if (cellss[0].ports.items[3].id == item.target.port) {
                                RemoveLableText = item.labels[0].attrs.labelText.text
                                console.log(item.labels[0].attrs.labelText.text);

                                obj1 = item.source;
                                RemoveTop = item.id;
                                RemoveBottom = cellss[0].ports.items[1].id;
                                console.log(item.id);
                                jsonArr.map(item2 => {
                                    if (item2.shape == "edge") {
                                        if (item2.source.port == RemoveBottom) {
                                            obj = item2.target;
                                        }
                                    }

                                })
                            }
                            console.log(obj);
                            console.log(obj1);
                        }

                    })
                    //重新赋值
                    jsonArr.map(item5 => {
                        if (newAddEdge.id == item5.id) {
                            item5.labels[0].attrs.labelText.text = RemoveLableText;
                            item5.source.cell = obj1.cell;
                            item5.source.port = obj1.port;
                            item5.target.cell = obj.cell;
                            item5.target.port = obj.port;

                        }
                    })
                    const jsonArrSort2 = JSON.parse(JSON.stringify(jsonArr))
                    console.log(857857, jsonArrSort2);

                    let NodeList = [];
                    let ShapeList = [];

                    jsonArrSort2.map(item => {
                        if (item.shape == "custom-vue-node") {
                            NodeList.push(item);
                        } else {
                            ShapeList.push(item);
                        }
                    })
                    console.log("节点List", NodeList);
                    console.log("线条List", ShapeList);
                    jsonArr.map(item => {
                        for (let i = 0; i < ShapeList.length; i++) {
                            if (item.shape == "custom-vue-node" && item.data.type == "defaultStart") {
                                item.data.customNodeObj.zindex = 0
                            }
                            if (ShapeList[i].target.cell == item.id) {
                                item.data.customNodeObj.zindex = ShapeList[i].labels[0].attrs.labelText.text;
                            }
                        }

                    })
                    _this.graph.fromJSON(jsonArr);
                    console.log("要删除的节点", JSON.parse(JSON.stringify(cellss)));

                    console.log(newAddEdge);
                    if (cells.length) {
                        _this.graph.removeCells(cells)
                        _this.form = {}
                        _this.editDrawer = false
                        // _this.$message({type: 'success',message: '删除成功!'})
                    }
                },
                onCancel() {
                    console.log('Cancel');
                },
            });

        },
        // 导出
        handlerSend() {
            // 我在这里删除了链接桩的设置，和工具（为了减少数据），反显的时候要把删除的链接桩加回来
            console.log(111, this.graph.toJSON());
            const { cells: jsonArr } = this.graph.toJSON()
            const tempGroupJson = jsonArr.map(item => {
                if (item.ports && item.ports.groups) delete item.ports.groups
                if (item.tools) delete item.tools
                return item
            })
            if (this.selectCell) {
                this.selectCell.removeTools()
                this.selectCell = ''
            }
            this.$emit('finish', JSON.stringify(tempGroupJson))
            console.log(JSON.stringify(tempGroupJson))
        },
    }
}
</script>

<style>
@keyframes ant-line {
    to {
        stroke-dashoffset: -1000
    }
}
</style>

<style scoped="scoped">
.edit-main {
    /* width: 500px; */
    padding: 20px;
}

.all {
    border-radius: 8px;
    overflow: hidden;
}

.antv-menu {
    width: 300px;
    min-width: 300px;
    border-right: 1px solid #d5d5d5;
    padding: 0px;
    overflow: auto;
    padding: 0 10px 0px 0px;
}

h3 {
    padding: 0px;
}

;
li {
    height: 80px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #555;
    background: #fff;
    margin: 5px 10px;
    font-size: 12px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease;
}

/* i:hover{
        box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.3);
      } */

i {
    font-size: 18px;
    margin-right: 10px;
}

strong {
    flex: 1;
}

.antv-wrapper {
    flex: 1;
    position: relative;
}

.wrapper-canvas {
    position: relative;
    height: 100vh;
    min-height: 720px;
}

.wrapper-tips {
    padding: 10px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
}

.wrapper-tips-item {
    padding-left: 10px;
    font-size: 12px;
}

.antv-content {
    background: #fff;
    display: flex;
    overflow: hidden;
    position: relative;
    border: #555 solid 1px;
    padding: 20px 10px 5px 10px;
    border-top: 0px;
}

.edit-btn {}

.wrapper-btn {
    text-align: center;
    padding: 20px;
}

.menu-list {
    padding: 0;
    border: 1px solid;
    height: 60px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
}

.wrapper-btn1 {
    float: right;
    padding: 5px 20px;
}

.felxclass {
    width: 350px;
    min-width: 100px;
    border: 1px solid rgb(161 161 161 / 90%);
    position: fixed;
    top: 100px;
    right: 50px;
    box-shadow: 3px 3px 1px rgb(161 161 161 / 90%);
    background-color: #fff;
    z-index: 1;
}
#popupDiv>>>.ant-card-body{
 padding: 0px;   
}
.popupDiv-father{
position: absolute;
box-shadow: 5px 5px 5px #cdcdcd;
border-radius: 10px;
}
.menu-list1{
  cursor:pointer;
  list-style: none;
  padding: 0px 10px 10px 10px;
  margin: 0;
  font-weight: bolder;
  text-align: left;
}
 
</style>
