import InfoTooltip from "./InfoTooltip";
import union from "../images/Union.jpg";

function SuccessfulRegistrationPopup({ isOpen, onClose }) {
  return (
    <InfoTooltip
      isOpen={isOpen}
      onClose={onClose}
      infoImage={union}
      infoText={"Вы успешно зарегистрировались!"}
    />
  );
}

export default SuccessfulRegistrationPopup;
