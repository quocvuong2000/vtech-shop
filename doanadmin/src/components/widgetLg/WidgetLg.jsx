import "./widgetLg.css";

export default function WidgetLg() {
  
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Giao dịch mới nhất</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Khách hàng</th>
          <th className="widgetLgTh">Ngày</th>
          <th className="widgetLgTh">Số lượng</th>
          <th className="widgetLgTh">Trạng thái</th>
        </tr>
      </table>
    </div>
  );
}
