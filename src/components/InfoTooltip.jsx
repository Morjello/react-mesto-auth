function InfoTooltip({ isOpen, onClose, infoText, infoImage }) {
  return (
    <div className="root__wrapper">
      <div className={`popup ${isOpen && "popup_opened"}`}>
        <div className="info-tooltip__container">
          <div
            className="info-tooltip__image"
            style={{
              backgroundImage: `url(${infoImage})`,
            }}
          ></div>
          <h2 className="info-tooltip__text">{infoText}</h2>
          <button
            type="button"
            className="popup__close"
            onClick={onClose}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
