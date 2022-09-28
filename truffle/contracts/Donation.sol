pragma solidity ^0.8.0;

contract Donation {

    address payable[] public donors = [payable(0xf847b8CABDcaa8C03D2545238Da75147FcC6e509),payable(0x851311277364F6ba805883d14Fa47CC4D71f08d3),payable(0x77301AC0EFbEeCedfd7c4683002c8259813216AC),payable(0x780e9633a53cAebcfb05b49789214a452CF305D8),payable(0xBfD36FF8379b9313D8ef5e9a7779Bb161c386aAD),payable(0xb14666db916D1e3Bc1FE06E0c490263dCe8E3dB0),payable(0xfD76e21974a628153ED8305BD95c8744966a3042),payable(0x1D941D54424b65a90134F76Cb4c528abF59Be78B),payable(0x9F4746cbD27A4FB3DAf235227347827Cc91604e3),payable(0xC9b021E83c1F0AF174E668bCB017b116F42a0dd5),payable(0x73B374356CdcEF897dE065b9a290ce4933bA7824),payable(0x8a864E6bE66749925ADe4784f5bba2D34AF62360),payable(0x6beCB3B84Aa562a49Be5485e2AeaBbA1F4fAA55A),payable(0xaD95122B83E6250c2051de25B3C438e67eF84C78),payable(0x0023287d0c14f6cA483433C016648937511C1fc6),payable(0x00c7dc79e1deC74BA51751a4b033D277DB186b2D),payable(0xe902f1979ABe4B9eB2d53B3F939031BB1B139c50),payable(0x9f94a4780f781e5E10c9a38019D86Bd3a479e196),payable(0x965Cc9a7A7279C27932edDa7CCa5245C74C088Ad),payable(0xbed5672CF7313b3D4eEd0358B34AfdB45d632eA4)];
    mapping(address => uint) donations;
    address owner;

    constructor() {
        owner = msg.sender;
    }

    function donate(address projectAddress) public payable{
        donations[projectAddress] += msg.value;
    }

    function finishDonation() public {
        require(msg.sender == owner, "You don't have the authority to finish donation process.");
        for(uint i = 0; i < donors.length; i++){
            donors[i].transfer(donations[donors[i]]);
        }
        selfdestruct(payable(owner));  //Here actually, there must be no fund to send the owner.
    }
}
