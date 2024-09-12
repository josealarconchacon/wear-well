import "./button.style.scss";

const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  invert: "invert",
};

const Button = ({ children, buttonType, ...inputOptions }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
      {...inputOptions}
    >
      {children}
    </button>
  );
};

export default Button;
