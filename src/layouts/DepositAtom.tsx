import ReactImg from "../assets/react.svg";
import RemoveImg from "../assets/remove.svg";
import ArrowRightImg from "../assets/arrowRight.svg";
import PencilImg from "../assets/pencil.svg";
import ClockImg from "../assets/clock.svg";

function DepositAtom() {
  return (
    <div className="h-screen min-h-[700px] bg-[#BEBEBE] flex justify-center items-center">
      <div className="relative w-[640px] box-border h-[704px] p-[24px] bg-[#FEFEFF] rounded-[16px]">
        <h2 className="h-[40px] flex justify-between font-semibold">
          <span className="text-[22px] text-[#2B3138] leading-[40px]">
            Deposit ATOM
          </span>
          <span className="w-[40px] h-[40px] box-border p-[8px] leading-[40px] flex justify-center items-center text-[#2E343B] cursor-pointer hover:bg-[#F6FAFC] rounded-[8px]">
            <img src={RemoveImg} />
          </span>
        </h2>
        <div className="flex flex-row mt-[46px] relative">
          <div className="flex flex-col flex-1">
            <span className="text-[#667686] text-[18px] font-medium">
              From Cosmos Hub
            </span>
            <div className="flex items-center h-[64px] mt-[16px] box-border p-[16px] bg-[#EDF2F9] rounded-[8px]">
              <img
                src={ReactImg}
                className="w-[22px] bg-[#39384C] p-[5px] rounded-full"
              />
              <span className="text-[#758394] text-[18px] ml-[16px]">
                atom1xy5y...m6wwz9a
              </span>
            </div>
          </div>
          <img
            src={ArrowRightImg}
            className="relative top-[16px] w-[36px] box-border p-[8px]"
          />
          <div className="flex flex-col flex-1">
            <span className="text-[#667686] text-[18px] font-medium">
              To Osmosis
            </span>
            <div className="relative flex items-center h-[64px] mt-[16px] box-border p-[16px] bg-[#EDF2F9] rounded-[8px]">
              <img
                src={ReactImg}
                className="w-[22px] bg-[#39384C] p-[5px] rounded-full"
              />
              <span className="text-[#758394] text-[18px] ml-[16px]">
                osmolxy5y...w9a
              </span>
              <img src={PencilImg} className="w-[22px] absolute right-[16px]" />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-[40px] mb-[16px] text-[#667585] text-[20px] font-medium">
          <span>Select amount</span>
          <span>
            <span className="font-normal">Available</span> 2 ATOM
          </span>
        </div>
        <div className="flex items-center justify-start h-[86px] leading-[86px] border-[1.5px] border-solid border-[#D6DCE2] rounded-[8px]">
          <img
            src={ReactImg}
            className="w-[32px] bg-[#39384C] p-[5px] mx-[18px] rounded-full"
          />
          <div className="flex flex-1 px-[18px] items-center justify-between border-l-[1.5px] border-solid border-[#D6DCE2]">
            <span className="text-[#2B3138] text-[20px] font-medium">2</span>
            <span className="text-[#2B3138] text-[20px] ml-[16px] font-medium">
              <span>ATOM</span>
              <span className="text-[#8A95A2] text-[18px] ml-[16px] font-normal">
                ≈ $1,013
              </span>
            </span>
          </div>
        </div>
        <div className="flex justify-end mt-[16px] mb-[48px] text-[18px] text-[#677685] font-medium">
          <span className="bg-[#EDF2F9] p-[8px] rounded-[4px]">Max</span>
          <span className="bg-[#EDF2F9] p-[8px] ml-[8px] rounded-[4px]">
            1/2
          </span>
          <span className="bg-[#EDF2F9] p-[8px] ml-[8px] rounded-[4px]">
            1/3
          </span>
        </div>
        <div className="w-[592px] absolute bottom-[12px]">
          <div className="flex items-center h-[46px] leading-[46px] mb-[24px] bg-[#EDF2F9] rounded-[8px]">
            <img className="w-[25px] ml-[16px] mr-[18px]" src={ClockImg} />
            <span className="text-[#484E55] text-[18px]">Estimated time: </span>
            <span className="text-[#3E373E] text-[18px] font-semibold">
              &nbsp;20 seconds
            </span>
          </div>
          <div className="h-[78px] leading-[72px] text-center text-[24px] font-medium text-[#FEFEFE] bg-[#2A3038] rounded-[8px]">
            Transfer
          </div>
          <div className="h-[78px] leading-[72px] text-center text-[20px] font-medium text-[#6D7A8B]">
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepositAtom;
