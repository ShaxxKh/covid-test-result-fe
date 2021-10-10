import MyText from "../MyText/MyText";
import downloadImg from "./../../assets/images/download.svg";
import axios from "axios";
import constants from "../../constants";
import { useContext } from "react";
import { Context } from "../../context";

const DownloadBtn = () => {

    const { testResult } = useContext(Context);

    const downloadPdf = () => {
        axios({
            method: "POST",
            url: `${constants.BACKEND_URL}/generatePdf`,
            data: testResult
        }, { responseType: Blob }).then((res) => {
            console.log(res);

            // let headerLine = res.headers["content-disposition"];
            // let startFileNameIndex = headerLine.indexOf('"') + 1;
            // let endFileNameIndex = headerLine.lastIndexOf('"');
            // let filename = headerLine.substring(
            //     startFileNameIndex,
            //     endFileNameIndex
            // );
            const url = window.URL.createObjectURL(
                new Blob([res.data], {
                    type: "application/pdf",
                })
            );
            console.log(url);
            const link = document.createElement("a");

            link.href = url;
            link.setAttribute("download", "output");
            document.body.appendChild(link);
            link.click();
            link.remove();
        });
    };

    return <button onClick={downloadPdf} className="download-btn">
        <img src={downloadImg} alt="download" className="download-img" />
        {<MyText tid="download" />}
    </button>;
};

export default DownloadBtn;