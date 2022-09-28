import useEth from "../../contexts/EthContext/useEth";

function ContractBtns() {
  const { state: { contract, accounts } } = useEth();

  const finish = async e => {

    try{
      await contract.methods.finishDonation().send({ from: accounts[0] });
    }catch(error){
      alert(error.message);
    }
  };

  return (
    <div className="btns">

      <button onClick={finish} className="btn btn-finish">
        Finish
      </button>
    </div>
  );
}

export default ContractBtns;
