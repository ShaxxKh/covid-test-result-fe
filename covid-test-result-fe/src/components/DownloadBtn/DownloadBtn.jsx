import MyText from "../MyText/MyText";
import downloadImg from "./../../assets/images/download.svg";

const DownloadBtn = () => {
    return <button className="download-btn">
        <img src={downloadImg} alt="download" className="download-img" />
        {<MyText tid="download" />}
    </button>;
};

export default DownloadBtn;