import React from "react";
import { render } from "react-dom";
import ImagePreview from "react-image-preview";

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
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556081724857&di=fd4fc58eb3046470ab99dc8754975b26&imgtype=0&src=http%3A%2F%2Fpic38.nipic.com%2F20140216%2F15361977_172737681000_2.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556081562258&di=0f817f004865be09f6993c8900b52493&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Ff54083119edfb83c4cfe9ce2eeebc076.jpeg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556081562256&di=91efcb685f4ac6fe335c31f4b44a8176&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheying%2F20161018%2Fheliushulinfengjing_7283795.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556081610320&di=1cabe95ef8e59a190e6740ebb0b6904d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F17%2F20180817180703_Zm5Hw.jpeg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556081610317&di=04de57daea3b8eda36a17e31455453c5&imgtype=0&src=http%3A%2F%2Fupload.mnw.cn%2F2015%2F0708%2F1436325189609.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556081610316&di=eb8aff0d5738fce128465d82c83e8a5d&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F55a61158b2b9e.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556081610313&di=90588691392354e11b5855eee908007e&imgtype=0&src=http%3A%2F%2Fwww.bbra.cn%2FUploadfiles%2Fimgs%2F2013%2F08%2F19%2Fcity1%2FXbzs_005.jpg"
    ];

    return (
      <div>
        <button onClick={() => this.setState({ visible: true })}>打开</button>
        <ImagePreview
          imgs={imgs}
          visible={this.state.visible}
          onClose={this.onClose}
          width={1000}
          height={500}
          showThumbnail={true}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
