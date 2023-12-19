// 画布基本设置（这些例子上面都有）
let _this = null;
export default{
  assign(vm){
    _this = vm;
    console.log(111,_this);
  }
 }
export const configSetting = (Shape) => {
  
    return {
      grid: false,
      autoResize: true,
      translating: { restrict: true },
      mousewheel: {
        enabled: true,
        zoomAtMousePosition: true,
        modifiers: 'ctrl',
        minScale: 0.5,
        maxScale: 3,
      },
      connecting: {
        router: {
          name: 'manhattan',
          args: {
            padding: 1,
          },
        },
        connector: {
          name: 'rounded',
          args: {
            radius: 8,
          },
        },
        anchor: 'center',
        connectionPoint: 'anchor',
        allowBlank: false,
        snap: {
          radius: 20,
        },
        createEdge() {
          return new Shape.Edge({
            defaultLabel: {
              markup: [
                {
                  tagName: 'ellipse',
                  selector: 'bg',
                },
                {
                  tagName: 'text',
                  selector: 'txt',
                },
                {
                  tagName: 'image',
                  selector: 'img',
                },
              ],
              attrs: {
                txt: {
                  fill: '#7c68fc',
                  textAnchor: 'middle',
                  textVerticalAnchor: 'middle',
                },
                bg: {
                  ref: 'txt',
                  refRx: '70%',
                  refRy: '80%',
                  stroke: '#7c68fc',
                  fill: 'white',
                  strokeWidth: 2,
                },
              },
            },
            attrs: {
              line: {
                stroke: '#A2B1C3',
                strokeWidth: 2,
                targetMarker: {
                  name: 'block',
                  width: 12,
                  height: 8
                },
              },
              
            },
          }).appendLabel({
            attrs: {
              img: {
                event: 'node:clickShow',
                'xlink:href':'data:image/png;base64,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',
                width: 20,
                height: 20,
                x: -10,
                y: -10,
                textAlign: center
              },
              labelText:{
                text:1
              }
            },
            position: {
              distance: 0.3,
            },
          })
        },
        validateConnection({ targetMagnet }) {
          return !!targetMagnet
        },
      },
      onToolItemCreated({ tool }) {
        const handle = tool
        const options = handle.options
        if (options && options.index % 2 === 1) {
          tool.setAttrs({ fill: 'red' })
        }
      },
      highlighting: {
        magnetAdsorbed: {
          name: 'stroke',
          args: {
            attrs: {
              fill: '#5F95FF',
              stroke: '#5F95FF',
            },
          },
        },
      },
      resizing: true,
      rotating: true,
      selecting: {
        enabled: true,
        rubberband: true,
        showNodeSelectionBox: true,
      },
      snapline: true,
      keyboard: true,
      clipboard: true
    }
  }
  
  /**
  * 节点预设类型 
  * 0椭圆形: defaultOval, 
  * 1方形: defaultSquare, 
  * 2圆角矩形: defaultYSquare,
  * 3菱形: defaultRhombus, 
  * 4平行四边形: defaultRhomboid, 
  * 5圆形: defaultCircle, 
  * 6图片: otherImage
  * 到时候通过传入的type===通过匹配 data里面设置的type获取到相应的节点设置内容
  * 编辑的时候也可以通过节点里面的data.type 获取到到底是什么节点进行响应设设置
  */
  export const configNodeShape = (type) => {
   

    const nodeShapeList =  [{
        label: '开始1',
        /**
         * 
         *  加入data里面的标识type是为了方便编辑的时候找到相对应的类型进行不同的编辑处理
         *  另外获取初始对应的设置
        */
        data: {
          type: type
        },
        shape: 'rect',
        width: 150,
        height: 50,
        markup: [
          {
            tagName: 'rect', // 标签名称
            selector: 'body', // 选择器
          },
          {
            tagName: 'image',
            selector: 'img',
          },
          {
            tagName: 'text',
            selector: 'label',
          },
        ],
        attrs: {
       
          body: {
            stroke: '#8f8f8f',
            strokeWidth: 1,
            fill: '#fff',
            rx: 6,
            ry: 6,
            filter: {
              name: 'dropShadow',
              args: {
                dx: 2,
                dy: 2,
                blur: 3,
              },
            },
          },
          img: {
            'xlink:href':'data:image/png;base64,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',
            width: 20,
            height: 20,
            x: 15,
            y: 15,
          },
          label: {
            text: '开始1',
            fontSize: 16,
            fill: '#333',
          }
        },
        tools: [
          {
            name: 'button',
            args: {
              markup: [
                {
                  tagName: 'circle',
                  selector: 'button',
                  attrs: {
                    // r: 14,
                    stroke: '#fe854f',
                    'stroke-width': 3,
                    fill: 'white',
                    cursor: 'pointer',
         
                  },
                },
                {
                  tagName: 'image',
                  selector: 'img',
                  // textContent: 'Btn A',
                  attrs: {
                     'xlink:href':'data:image/png;base64,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',
                      width: 20,
                      height: 20,
                      x: -15,
                      y: -15,
                   
                  },
                },
              ],
              x: '100%',
              y: '100%',
              offset: { x: -18, y: -18 },
              onClick(view) {
                console.log( 222,view);
                _this.query();
              },
            },
          },
        ],
      },
      {
        label: '数据筛选_1',
        /**
         * 
         *  加入data里面的标识type是为了方便编辑的时候找到相对应的类型进行不同的编辑处理
         *  另外获取初始对应的设置
        */
        data: {
          type: 'defaultSquare'
        },
        shape: 'rect',
        width: 150,
        height: 50,
        markup: [
          {
            tagName: 'rect', // 标签名称
            selector: 'body', // 选择器
          },
          {
            tagName: 'image',
            selector: 'img',
          },
          {
            tagName: 'text',
            selector: 'label',
          },
        ],
        attrs: {
       
          body: {
            stroke: '#8f8f8f',
            strokeWidth: 1,
            fill: '#fff',
            rx: 6,
            ry: 6,
            filter: {
              name: 'dropShadow',
              args: {
                dx: 2,
                dy: 2,
                blur: 3,
              },
            },
          },
          img: {
            'xlink:href':'data:image/png;base64,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',
            width: 20,
            height: 20,
            x: 15,
            y: 15,
          },
          label: {
            text: '数据筛选_1',
            fontSize: 16,
            fill: '#333',
          }
        },
        tools: [
          {
            name: 'button',
            args: {
              markup: [
                {
                  tagName: 'circle',
                  selector: 'button',
                  attrs: {
                    // r: 14,
                    stroke: '#fe854f',
                    'stroke-width': 3,
                    fill: 'white',
                    cursor: 'pointer',
         
                  },
                },
                {
                  tagName: 'image',
                  selector: 'img',
                  // textContent: 'Btn A',
                  attrs: {
                     'xlink:href':'data:image/png;base64,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',
                      width: 20,
                      height: 20,
                      x: -15,
                      y: -15,
                   
                  },
                },
              ],
              x: '100%',
              y: '100%',
              offset: { x: -18, y: -18 },
              onClick(view) {
                console.log( 222,view);
                _this.query();
              },
            },
          },
        ],
      },
      // {
      //   label: '方形',
      //   data: {
      //     type: 'defaultSquare',
      //   },
      //   shape: 'rect',
      //   width: 100,
      //   height: 50,
      //   attrs: {
      //     label: {
      //       text: '方形',
      //       fontSize: 16,
      //       fill: '#333'
      //     },
      //     body: {
      //       fill: '#fff',
      //       stroke: '#333'
      //     }
      //   },
      // },
      {
        label: '数据链接_1',
        /**
         * 
         *  加入data里面的标识type是为了方便编辑的时候找到相对应的类型进行不同的编辑处理
         *  另外获取初始对应的设置
        */
        data: {
          type: 'defaultYSquare'
        },
        shape: 'rect',
        width: 150,
        height: 50,
        markup: [
          {
            tagName: 'rect', // 标签名称
            selector: 'body', // 选择器
          },
          {
            tagName: 'image',
            selector: 'img',
          },
          {
            tagName: 'text',
            selector: 'label',
          },
        ],
        attrs: {
       
          body: {
            stroke: '#8f8f8f',
            strokeWidth: 1,
            fill: '#fff',
            rx: 6,
            ry: 6,
            filter: {
              name: 'dropShadow',
              args: {
                dx: 2,
                dy: 2,
                blur: 3,
              },
            },
          },
          img: {
            'xlink:href':'data:image/png;base64,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',
            width: 20,
            height: 20,
            x: 15,
            y: 15,
          },
          label: {
            text: '数据链接_1',
            fontSize: 16,
            fill: '#333',
          }
        },
        tools: [
          {
            name: 'button',
            args: {
              markup: [
                {
                  tagName: 'circle',
                  selector: 'button',
                  attrs: {
                    // r: 14,
                    stroke: '#fe854f',
                    'stroke-width': 3,
                    fill: 'white',
                    cursor: 'pointer',
         
                  },
                },
                {
                  tagName: 'image',
                  selector: 'img',
                  // textContent: 'Btn A',
                  attrs: {
                     'xlink:href':'data:image/png;base64,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',
                      width: 20,
                      height: 20,
                      x: -15,
                      y: -15,
                   
                  },
                },
              ],
              x: '100%',
              y: '100%',
              offset: { x: -18, y: -18 },
              onClick(view) {
                console.log( 222,view);
                _this.query();
              },
            },
          },
        ],
      },
      // {
      //   label: '圆角矩形',
      //   data: {
      //     type: 'defaultYSquare'
      //   },
      //   shape: 'rect',
      //   width: 100,
      //   height: 50,
      //   attrs: {
      //     body: {
      //       rx: 6,
      //       ry: 6,
      //       fill: '#fff',
      //       stroke: '#333'
      //     },
      //     label: {
      //       text: '圆角矩形',
      //       fontSize: 16,
      //       fill: '#333'
      //     }
      //   },
      // },
      {
        label: '菱形',
        data: {
          type: 'defaultRhombus'
        },
        shape: 'polygon',
        width: 120,
        height: 50,
        attrs: {
          body: {
            refPoints: '0,10 10,0 20,10 10,20',
            fill: '#fff',
            stroke: '#333'
          },
          label: {
            text: '菱形',
            fontSize: 16,
            fill: '#333'
          }
        },
      },
      {
        label: '平行四边形',
        data: {
          type: 'defaultRhomboid'
        },
        shape: 'polygon',
        width: 120,
        height: 50,
        attrs: {
          body: {
            refPoints: '10,0 40,0 30,20 0,20',
            fill: '#fff',
            stroke: '#333'
          },
          label: {
            text: '平行四边形',
            fontSize: 16,
            fill: '#333'
          }
        }
      },
      {
        label: '圆形',
        data: {
          type: 'defaultCircle'
        },
        shape: 'circle',
        width: 80,
        height: 80,
        attrs: {
          label: {
            text: '圆形',
            fontSize: 16,
            fill: '#333'
          },
          body: {
            fill: '#fff',
            stroke: '#333'
          }
        }
      },
      {
        label: "图片",
        data: {
          type: 'otherImage'
        },
        shape: 'rect',
        width: 80,
        height: 80,
        markup: [
          {
            tagName: 'rect',
            selector: 'body',
          },
          {
            tagName: 'image',
          },
          {
            tagName: 'text',
            selector: 'label',
          },
        ],
        attrs: {
          body: {
            stroke: '#5F95FF',
            fill: '#5F95FF',
          },
          image: {
            width: 80,
            height: 80,
            refX: 0,
            refY: 0,
            xlinkHref: 'https://gw.alipayobjects.com/zos/bmw-prod/2010ac9f-40e7-49d4-8c4a-4fcf2f83033b.svg',
          },
          label: {
            fontSize: 14,
            fill: '#fff',
            text: '图片'
          },
        },
      }
    ]
    if(type) {
         
      const obj = nodeShapeList.find(item => {return item.data.type === type})
      return obj || nodeShapeList
    }
    console.log("ccccccccc",nodeShapeList);
    return nodeShapeList
  }
  
  /**
  * 节点连接桩设置
  * 这里设置了上下左右四个
  * 并且给style设置了 visibility: 'hidden'，默认是隐藏的。
  * 如果设置了隐藏记得在画布里面设置鼠标经过显示。
  * graph.on('node:mouseenter', () => {
          const container = document.getElementById('wrapper')
          const ports = container.querySelectorAll('.x6-port-body')
          for (let i = 0, len = ports.length; i < len; i = i + 1) {
            ports[i].style.visibility = val ? 'visible' : 'hidden'
          }
      })
  * 如果需要常显去掉每个链接桩里面的
    style: {
          visibility: 'hidden',
       },
  * 就可以了
  */
  export const configNodePorts = () => {
    return {
      groups: {
        top: {
          position: 'top',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              style: {
                visibility: 'hidden',
              },
            },
          },
        },
        right: {
          position: 'right',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              style: {
                visibility: 'hidden',
              },
            },
          },
        },
        bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              style: {
                visibility: 'hidden',
              },
            },
          },
        },
        left: {
          position: 'left',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              style: {
                visibility: 'hidden',
              },
            },
          },
        },
      },
      items: [
        {
          group: 'top',
        },
        {
          group: 'right',
        },
        {
          group: 'bottom',
        },
        {
          group: 'left',
        },
      ]
    }
  }
  
  // 连线 label 设置
  export const configEdgeLabel = (labelText, fontColor, fill, stroke) => {
    if(!labelText) return { attrs: { labelText: { text: '' }, labelBody: { fill: '', stroke: '' } } }
    return {
        markup: [
          {
            tagName: 'rect',
            selector: 'labelBody',
          },
          {
            tagName: 'text',
            selector: 'labelText',
          },
        ],
        attrs: {
          labelText: {
            text: labelText || '',
            fill: fontColor || '#333',
            textAnchor: 'middle',
            textVerticalAnchor: 'middle',
          },
          labelBody: {
            ref: 'labelText',
            refX: -8,
            refY: -5,
            refWidth: '100%',
            refHeight: '100%',
            refWidth2: 16,
            refHeight2: 10,
            stroke: stroke || '#555',
            fill: fill || '#fff',
            strokeWidth: 2,
            rx: 5,
            ry: 5,
          },
        }
      }
  }
  
  // 键盘事件
  export const graphBindKey = (graph) => {
 
      graph.bindKey(['meta+c', 'ctrl+c'], () => {
        const cells = graph.getSelectedCells()
        if (cells.length) {
          graph.copy(cells)
        }
        return false
      })
      graph.bindKey(['meta+x', 'ctrl+x'], () => {
        const cells = graph.getSelectedCells()
        if (cells.length) {
          graph.cut(cells)
        }
        return false
      })
      graph.bindKey(['meta+v', 'ctrl+v'], () => {
        if (!graph.isClipboardEmpty()) {
          const cells = graph.paste({ offset: 32 })
          graph.cleanSelection()
          graph.select(cells)
        }
        return false
      })
      //undo redo
      graph.bindKey(['meta+z', 'ctrl+z'], () => {
        if (graph.canRedo()) {
          graph.history.undo()
        }
        return false
      })
      graph.bindKey(['meta+shift+z', 'ctrl+shift+z'], () => {
        if (graph.history.canRedo()) {
          graph.history.redo()
        }
        return false
      })
      // select all
      graph.bindKey(['meta+a', 'ctrl+a'], () => {
        const nodes = graph.getNodes()
        if (nodes) {
          graph.select(nodes)
        }
      })
      //delete
   
      graph.bindKey('delete', () => {
        const cells = graph.getSelectedCells()
        if (cells.length) {
          graph.removeCells(cells)
        }
      })
    
      // zoom
      graph.bindKey(['ctrl+1', 'meta+1'], () => {
        const zoom = graph.zoom()
        if (zoom < 1.5) {
          graph.zoom(0.1)
        }
      })
      graph.bindKey(['ctrl+2', 'meta+2'], () => {
        const zoom = graph.zoom()
        if (zoom > 0.5) {
          graph.zoom(-0.1)
        }
      })
      return graph
  }

  export const appendEdgeObj = (graph,lableIndx) => {
 
    return graph.addEdge({
      shape: 'edge',
      source: {},
      target: {},
      defaultLabel: {
          markup: [{
                  tagName: 'ellipse',
                  selector: 'bg',
              },
              {
                  tagName: 'text',
                  selector: 'txt',
              },
              {
                  tagName: 'image',
                  selector: 'img',
              },
          ],
          attrs: {
              txt: {
                  fill: '#7c68fc',
                  textAnchor: 'middle',
                  textVerticalAnchor: 'middle',
              },
              bg: {
                  ref: 'txt',
                  refRx: '70%',
                  refRy: '80%',
                  stroke: '#7c68fc',
                  fill: 'white',
                  strokeWidth: 2,
              },
          },
      },
      attrs: {
          line: {
              stroke: '#A2B1C3',
              strokeWidth: 2,
              targetMarker: {
                  name: 'block',
                  width: 12,
                  height: 8
              },
          },

      },
  }).appendLabel({
    attrs: {
        img: {
            event: 'node:clickShow',
            'xlink:href': 'data:image/png;base64,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',
            width: 20,
            height: 20,
            x: -10,
            y: -10,
        },
        labelText: {
            text: parseInt(lableIndx)
        }
    },
    position: {
        distance: 0.5,
    },
})
 
}