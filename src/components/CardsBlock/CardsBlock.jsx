import DownloadBtn from "../DownloadBtn/DownloadBtn";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import StatusBlock from "../StatusBlock/StatusBlock";

const CardsBlock = () => {
    return <div className="cards-block">
        <div className="status-container">
            <StatusBlock />
            <DownloadBtn />
        </div>
        <PersonalInfo />
    </div>;
};

export default CardsBlock;