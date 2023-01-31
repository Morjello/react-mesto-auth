import InfoTooltip from "./InfoTooltip";
import unionFail from "../images/UnionFail.png";

function FailRegistrationPopup({ isOpen, onClose }) {
  return (
    <InfoTooltip
      isOpen={isOpen}
      onClose={onClose}
      infoImage={unionFail}
      infoText={"Что-то пошло не так! Попробуйте ещё раз."}
    />
  );
}

export default FailRegistrationPopup;
