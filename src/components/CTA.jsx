import styles from "../styles";
import Button from "./Button";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-[#E3E8EF]  xs:leading-[76.8px] leading-[66.8px] w-full">
          Let's try our service now
        </h2>
        <p
          className={`text-[#E3E8EF] font-poppins font-normal text-[18px] leading-[30.8px] max-w-[470px] mt-5`}
        >
          Everything you need to accept card payments and grow your business
          anywhere on the planet
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}></div>
      <Button />
    </section>
  );
};

export default CTA;
