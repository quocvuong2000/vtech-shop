import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Doanh thu</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">đang tính...</span>
          <span className="featuredMoneyRate">
            -0 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">So với tháng trước</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Bán hàng</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">đang tính...</span>
          <span className="featuredMoneyRate">
            -0 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">So với tháng trước</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Chi phí</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">đang tính...</span>
          <span className="featuredMoneyRate">
            +0 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">So với tháng trước</span>
      </div>
    </div>
  );
}
