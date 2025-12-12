import { SectionBackground } from "../../utils/constants";

const SectionLayout = ({ children, background = SectionBackground.LIGHT }) => {
  return (
    <div
      className={
        SectionBackground.DARK === background
          ? "bg-container"
          : "bg-container"
      }
    >
      <div className="container-main">{children}</div>
    </div>
  );
};

export default SectionLayout;
