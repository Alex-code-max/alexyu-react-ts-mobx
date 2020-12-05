import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";
import "./index.scss";
// import { evaluation } from "../../../request";
import { Button } from "antd-mobile";
const EvaluationIndex = inject("timer")(
  observer(({ timer }) => {
    useEffect(() => {
      // evaluation.getIndustryArr();
    });
    return (
      <div className="evaluation-index">
        <div className="header">
          <img
            src="https://static.iqycamp.com/images/wxqrcode/indexHeader-sdwog159.png"
            alt="头图"
          />
        </div>
        <Button type="primary">123</Button>
      </div>
    );
  })
);
// class Index extends React.Component {}
// const Index: React.FC = () => {
//   return <div>asdasdasd</div>;
// };
export default EvaluationIndex;
