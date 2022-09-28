import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import ContractBtns from "./ContractBtns";
import NoticeNoArtifact from "../NoticeNoArtifact";
import NoticeWrongNetwork from "../NoticeWrongNetwork";

function Finish() {
  const { state } = useEth();
  const [value, setValue] = useState("?");

  const finish =
    <>

      <div className="finish-contract-container">
        <ContractBtns setValue={setValue} />
      </div>

    </>;

  return (
    <div className="finish">
      {
        !state.artifact ? <NoticeNoArtifact /> :
          !state.contract ? <NoticeWrongNetwork /> :
          finish
      }
    </div>
  );
}

export default Finish;
