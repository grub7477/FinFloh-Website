import ButtonCommon from "../../UI/Button/Button";
import style from "./IntegrationSection.module.scss";

const IntegrationSection = ({ btnText, btnLink, icon }) => {
  return (
    <section classname={style.integration__container}>
      <div className={`container ${style.integration__contentWrapper}`}>
        <h3 className="heading_md highlight-text--gradient text-center">
          GET, SET, GO ON DAY 1!
        </h3>
        <h2 className="text-center">Out-Of-The-Box<br/>Seamless Integration</h2>
        <p className="para_sm text-center">
          Integrate with your ERP/Accounting Software, Payments, CRM,
          Communications & other tools in just a few simple steps without any
          coding efforts and start managing your accounts receivables with ease.
        </p>
        <ButtonCommon
          label={btnText}
          href={btnLink}
          endIcon={icon}
          variant="primary"
        />
      </div>
    </section>
  );
};

export default IntegrationSection;
