import { FaCalculator, FaPlayCircle, FaRegNewspaper } from "react-icons/fa";
import styles from "./css/homeView.module.css";
import { IoDocumentTextOutline, IoDocumentTextSharp } from "react-icons/io5";
import { guideCommon, guideCommonVideo } from "../../mock/guide";
import { PiMoneyWavy } from "react-icons/pi";
import CardManyHref, { TCards } from "./ui/chart/CardManyHref";
import { GiReceiveMoney } from "react-icons/gi";
import CardOneHref, { TCard } from "./ui/chart/CardOneHref";
import { BsCart3 } from "react-icons/bs";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { TbPackages } from "react-icons/tb";
import CardManyHrefArrowLeft from "./ui/chart/CartManyHrefArrowLeft";
import CardOneHrefColumn from "./ui/chart/CardOneHrefColumn";
import { TiGroupOutline } from "react-icons/ti";
import { AiOutlineProduct } from "react-icons/ai";
import { LiaStoreAltSolid } from "react-icons/lia";
import CardArrowDown from "./ui/chart/CardArrowDown";

const SIZE_ICON_CARD = 20;
const SIZE_ICON_CARD_LEFT = 14;

const cardOne: TCards = {
  title: "Thu tiền",
  data: [
    {
      title: "Thu tiền mặt",
      href: "/hk1",
      icon: <PiMoneyWavy size={SIZE_ICON_CARD} />,
    },
    {
      title: "Báo có ngân hàng",
      href: "/ca3",
      icon: <PiMoneyWavy size={SIZE_ICON_CARD} />,
    },
  ],
};

const cardTwo: TCards = {
  title: "Chi tiền",
  data: [
    {
      title: "Chi tiền mặt",
      href: "/hk2",
      icon: <GiReceiveMoney size={SIZE_ICON_CARD} />,
    },
    {
      title: "Báo nợ ngân hàng",
      href: "/ca4",
      icon: <GiReceiveMoney size={SIZE_ICON_CARD} />,
    },
  ],
};

const cardThree: TCard = {
  title: "Hóa đơn",
  icon: <BsCart3 size={30} />,
  href: "/hk5",
};

const cardFour: TCard = {
  title: "Phiếu nhập mua",
  icon: <TfiShoppingCartFull size={30} />,
  href: "/hkm",
};

const cardFive: TCards = {
  title: "Nhập xuất kho",
  data: [
    {
      title: "Nhập kho",
      href: "/hk7",
      icon: <TbPackages size={SIZE_ICON_CARD} />,
    },
    {
      title: "Xuất kho",
      href: "/hk8",
      icon: <IoDocumentTextOutline size={SIZE_ICON_CARD} />,
    },
  ],
};

const cardSix: TCards = {
  title: "Sổ sách kế toán - Báo cáo thuế",
  data: [
    {
      title: "S1 - Sổ chi tiết doanh thu bán hàng hóa dịch vụ",
      href: "/hkrpts1",
      icon: <IoDocumentTextOutline size={SIZE_ICON_CARD_LEFT} />,
    },
    {
      title: "S2 - Sổ chi tiết vật liệu, dụng cụ, sản phẩm, hàng hóa",
      href: "/hkrpts2",
      icon: <IoDocumentTextOutline size={SIZE_ICON_CARD_LEFT} />,
    },
    {
      title: "S3 - Sổ chi phí sản xuất kinh doanh",
      href: "/hkrpts3",
      icon: <IoDocumentTextOutline size={SIZE_ICON_CARD_LEFT} />,
    },
    {
      title: "S4 - Sổ theo dõi tình hình thực hiện nghĩa vụ thuế với NSNN",
      href: "/hkrpts4",
      icon: <IoDocumentTextOutline size={SIZE_ICON_CARD_LEFT} />,
    },
    {
      title:
        "S5 - Sổ theo dõi tình hình thanh toán tiền lương và các khoản nộp theo lương của người lao động",
      href: "/hkrpts5",
      icon: <IoDocumentTextOutline size={SIZE_ICON_CARD_LEFT} />,
    },
    {
      title: " S6 - Sổ quỹ tiền mặt",
      href: "/hkrpts6",
      icon: <IoDocumentTextOutline size={SIZE_ICON_CARD_LEFT} />,
    },
    {
      title: "S7 - Sổ tiền gửi ngân hàng",
      href: "/hkrpts6",
      icon: <IoDocumentTextOutline size={SIZE_ICON_CARD_LEFT} />,
    },
    {
      title: "Báo cáo thuế",
      href: "/reports?module=30.22",
      icon: <IoDocumentTextOutline size={SIZE_ICON_CARD_LEFT} />,
    },
  ],
};

const cardSeven: TCards = {
  title: "Báo cáo quản lý",
  data: [
    {
      title: " Báo cáo quản trị",
      href: "/reports?module=30.29",
      icon: <IoDocumentTextOutline size={SIZE_ICON_CARD_LEFT} />,
    },
    {
      title: "Báo cáo quản lý kho",
      href: "/reports?module=30.24",
      icon: <IoDocumentTextOutline size={SIZE_ICON_CARD_LEFT} />,
    },
    {
      title: "Báo cáo công nợ",
      href: "/reports?module=30.26",
      icon: <IoDocumentTextOutline size={SIZE_ICON_CARD_LEFT} />,
    },
    {
      title: " Báo cáo bán hàng",
      href: "/reports?module=30.27",
      icon: <IoDocumentTextOutline size={SIZE_ICON_CARD_LEFT} />,
    },
    {
      title: " Báo cáo mua hàng",
      href: "/reports?module=30.26",
      icon: <IoDocumentTextOutline size={SIZE_ICON_CARD_LEFT} />,
    },
  ],
};

const cardEight: TCard = {
  title: "Khách quan",
  icon: <TiGroupOutline size={30} />,
  href: "/hkdmkh",
};

const cardNine: TCard = {
  title: "Hàng hóa",
  icon: <AiOutlineProduct size={30} />,
  href: "/hkdmvt",
};

const cardTen: TCard = {
  title: "Kho hàng",
  icon: <LiaStoreAltSolid size={30} />,
  href: "/hkdmvt",
};

const cardEleven: TCard = {
  title: "Tính giá tồn kho",
  icon: <FaCalculator size={30} />,
  href: "/hktinhgiavt",
};


const SIZE_ICON = 16;

const HomeView = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={`${styles.chart} scroll-common`}>
          {/* <div className={styles.test1}></div> */}
          <div className={styles.chart__wrapper}>
            <div className={styles.chart__topLayout}>
              <div className={styles.chart__left}>
                <CardManyHref {...cardOne} />
                <CardManyHref {...cardTwo} />
                <CardOneHref {...cardThree} />
                <CardOneHref {...cardFour} />
                <CardManyHref {...cardFive} />

                <div className={styles["line-connect"]}></div>
              </div>
              <div className={styles.chart__right}>
                <CardManyHrefArrowLeft {...cardSix} />
                <CardArrowDown {...cardEleven} />

                <CardManyHrefArrowLeft {...cardSeven} />
              </div>
            </div>
            <div className={styles.chart__bottomLayout}>
              <CardOneHrefColumn {...cardEight} />
              <CardOneHrefColumn {...cardNine} />
              <CardOneHrefColumn {...cardTen} />

            </div>
          </div>
        </div>
        <div className={styles.guide}>
          <h1 className={styles.guide__title}>
            Thông tin từ <span className={styles.guide__city}>ZENTECH</span>
          </h1>
          <a
            href="http://help.zentech.vn/zenhkd/categories/cap-nhat-tinh-nang"
            target="_blank"
            className={` ${styles.guide__content}`}
          >
            <FaRegNewspaper size={SIZE_ICON} />
            <span>Tính năng mới</span>
          </a>

          <h2 className={styles.guide__title}>Hướng dẫn chung</h2>

          <div className={styles.guide__common}>
            {guideCommon.map((guide, i) => (
              <div key={guide.href + i} className={styles.guide__content}>
                <IoDocumentTextSharp size={SIZE_ICON} />
                <a href={guide.href} target="_blank">
                  {guide.title}
                </a>
              </div>
            ))}
          </div>

          <h2 className={styles.guide__title}>Video hướng dẫn </h2>

          <div className={styles.guide__common}>
            {guideCommonVideo.map((guide, i) => (
              <div key={guide.href + i} className={styles.guide__content}>
                <FaPlayCircle size={SIZE_ICON} />

                <a href={guide.href} target="_blank">
                  {guide.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
