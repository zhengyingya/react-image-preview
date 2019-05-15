# React ImagePreview

图片预览与查看器，自动适应移动端，只需提供图片地址数组即可，自动计算图片宽高，自适应显示

<img src="https://thumbnail0.baidupcs.com/thumbnail/47af5e972754f4ede7577d01c2515819?fid=3675183739-250528-500745794020250&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-RBgF%2b02X7PRuPGrDD2hTZNfdD4o%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3119703625516159019&dp-callid=0&time=1557892800&size=c1440_u900&quality=90&vuk=3675183739&ft=image&autopolicy=1" width = "500" height = "300"/>
<img src="https://thumbnail0.baidupcs.com/thumbnail/d6b714dc6b0f5aae4c2a8f94024211c7?fid=3675183739-250528-935973412166754&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-tU2o1VLalTpyyKOSqcRICmPOXNI%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3119719539444150449&dp-callid=0&time=1557892800&size=c375_u667&quality=90&vuk=3675183739&ft=image&autopolicy=1" width = "200" height = "300"/>

## install

```shell
npm install imgpreview-react  -S
```

## example

```shell
import React from "react"
import ImagePreview from "imgpreview-react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const imgs = [
      "./1.jpg",
      "./2.jpg",
      "./3.jpg",
      "./4.jpg",
    ];

    return (
      <div>
        <ImagePreview
          imgs={imgs}
          visible={this.state.visible}
          onClose={this.onClose}
          width={1000}
          height={500}
        />
      </div>
    );
  }
}
```

## api

| 参数          | 说明                 | 类型     | 默认值    | 是否必须 |
| ------------- | -------------------- | -------- | --------- | -------- |
| imgs          | 图片预览地址数组     | array    | undefined | 是       |
| cIndex        | 当前预览的图片下标   | number   | 0         | 否       |
| width         | 图片预览器的宽度     | number   | 800       | 否       |
| height        | 图片预览器的高度     | number   | 500       | 否       |
| visible       | 图片预览器是否显示   | bool     | undefined | 是       |
| onClose       | 图片预览器关闭时回调 | function | undefined | 否       |
| showClose     | 是否显示关闭按钮     | bool     | true      | 否       |
| showThumbnail | 是否显示底部缩略图   | bool     | true      | 否       |
