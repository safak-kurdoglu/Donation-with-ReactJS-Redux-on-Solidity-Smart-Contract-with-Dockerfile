import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

import { useSelector } from "react-redux";

function ContractBtns() {
  const { state: { contract, accounts } } = useEth();
  const [inputValue, setInputValue] = useState("");
  const toAddress = useSelector((state) => state.project.address);

  const handleInputChange = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  const donate = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue === "") {
      alert("Please enter a value to donate.");
      return;
    }
    try{
      const donationValue = parseInt(inputValue);
      await contract.methods.donate( toAddress ).send({ from: accounts[0], value: donationValue});
    }catch(error){
      alert(error.message);
    }
  };

  return (
    <div className="btns">

      <button onClick={donate} className="btn btn-donate">
        Donate (<input
          type="text"
          placeholder="uint in wei"
          value={inputValue}
          onChange={handleInputChange}
        />)
      </button>

    </div>
  );
}

export default ContractBtns;
