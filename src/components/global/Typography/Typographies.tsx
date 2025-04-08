import { Trans } from "react-i18next";

type H1Props = {
  children?: React.ReactNode;
  className?: string;
};

export const H1 = (props: H1Props) => {
  return (
    <h1
      className={`text-primary dark:text-primary-dark font-semibold text-center text-4xl md:text-6xl ${props.className}`}
    >
      {props.children}
    </h1>
  );
};

type H2Props = {
  children?: React.ReactNode;
  className?: string;
};

export const H2 = (props: H2Props) => {
  return (
    <h2 className={`text-4xl font-semibold dark:text-white ${props.className}`}>
      {props.children}
    </h2>
  );
};

type H3Props = {
  children?: React.ReactNode;
  className?: string;
};

export const H3 = (props: H3Props) => {
  return (
    <h3
      className={`text-black dark:text-white opacity-80 font-semibold text-3xl md:text-4.5xl ${props.className}`}
    >
      {props.children}
    </h3>
  );
};

type DescriptionProps = {
  i18nKey: string;
  className?: string;
};

export const Description = (props: DescriptionProps) => {
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
