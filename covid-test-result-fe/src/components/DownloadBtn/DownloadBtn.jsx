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
            encoding: null,
            responseType: "blob",
            data: testResult
        }).then((res) => {
            const url = window.URL.createObjectURL(
                new Blob([res.data], {
                    type: "application/pdf",
                })
            );

            const link = document.createElement("a");

            link.href = url;
            link.setAttribute("download", "output");
            document.body.appendChild(link);
            link.click();
            link.remove();
        });
    };

    return <a download onClick={downloadPdf} className="download-btn">
        <img src={downloadImg} alt="download" className="download-img" />
        {<MyText tid="download" />}
    </a>;
};

export default DownloadBtn;