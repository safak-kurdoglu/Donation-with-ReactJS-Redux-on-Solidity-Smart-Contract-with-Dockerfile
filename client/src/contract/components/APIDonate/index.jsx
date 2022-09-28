import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import ContractBtns from "./ContractBtns";
import NoticeNoArtifact from "../NoticeNoArtifact";
import NoticeWrongNetwork from "../NoticeWrongNetwork";

function Donate() {
  const { state } = useEth();
  const [value, setValue] = useState("?");

  const donate =
    <>

      <div className="contract-container">
        <ContractBtns setValue={setValue} />
      </div>

    </>;

  return (
    <div className="donate">
      {
        !state.artifact ? <NoticeNoArtifact /> :
          !state.contract ? <NoticeWrongNetwork /> :
            donate
      }
    </div>
  );
}

export default Donate;
