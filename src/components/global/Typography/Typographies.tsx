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
      className={`text-3xl md:text-4.5xl font-semibold dark:text-white opacity-80 ${props.className}`}
    >
      {props.children}
    </h3>
  );
};

type H4Props = {
  children?: React.ReactNode;
  className?: string;
};

export const H4 = (props: H4Props) => {
  return (
    <h4
      className={`text-2xl font-semibold dark:text-white opacity-80 ${props.className}`}
    >
      {props.children}
    </h4>
  );
};

type H5Props = {
  i18nKey?: string;
  children?: React.ReactNode;
  className?: string;
};

export const H5 = (props: H5Props) => {
  return (
    <h5
      className={`text-lg md:text-xl font-semibold dark:text-white opacity-80 ${props.className}`}
    >
      {props.i18nKey && (
        <Trans
          i18nKey={props.i18nKey}
          components={[
            <span className="text-primary dark:text-primary-dark" />,
          ]}
        />
      )}
      {props.children && props.children}
    </h5>
  );
};

type H6Props = {
  i18nKey?: string;
  children?: React.ReactNode;
  className?: string;
};

export const H6 = (props: H6Props) => {
  return (
    <h6
      className={`text-black dark:text-white opacity-80 ${props.className} md:text-xl`}
    >
      {props.i18nKey && (
        <Trans
          i18nKey={props.i18nKey}
          components={[
            <span className="text-primary dark:text-primary-dark" />,
          ]}
        />
      )}
      {props.children && props.children}
    </h6>
  );
};
