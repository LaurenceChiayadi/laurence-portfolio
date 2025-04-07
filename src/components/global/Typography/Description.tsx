import { Trans } from "react-i18next";

type DescriptionProps = {
  i18nKey: string;
  className?: string;
};

const Description = (props: DescriptionProps) => {
  return (
    <p
      className={`text-black dark:text-white opacity-80 ${props.className} md:text-xl`}
    >
      <Trans
        i18nKey={props.i18nKey}
        components={[<span className="text-primary dark:text-primary-dark" />]}
      />
    </p>
  );
};

export default Description;
