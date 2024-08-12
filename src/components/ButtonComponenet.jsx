const btnStyle = {
  display: "flex",
  justifyContent: "center",
};

export default function Button({ children, onClick, className = "" }) {
  return (
    <div style={btnStyle}>
      <button className={className} onClick={onClick}>
        {" "}
        {children}{" "}
      </button>
    </div>
  );
}

/*  –theme-backgroundp-ultralight: #effaff;
  –theme-backgroundp-normal: #a0d2eb;
  –theme-backgroundp-light: #e5eaf5;
  –theme-color-light: #d0bdf4;
  –theme-color-normal: #8458b3;
  –theme-color-dark: #494d5f*/
