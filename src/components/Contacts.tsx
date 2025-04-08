import { useTranslation } from "react-i18next";

import Wrapper from "./global/Wrapper";
import { H2, Paragraph } from "./global/Typography/Typographies";
import GradientButton from "./global/GradientButton";
import { getLogo, getRedirectURL } from "../utilities/GetUtilities";
import AnimateOnSeen from "./global/Animation/AnimateOnSeen";
import { openInNewTab } from "../utilities/Functions";

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <Wrapper className="w-full">
      <div className="flex flex-col text-center px-2 gap-6">
        <AnimateOnSeen>
          <H2>{t("contact.title")}</H2>
        </AnimateOnSeen>
        <AnimateOnSeen>
          <Paragraph>{t("contact.subtitle")}</Paragraph>
        </AnimateOnSeen>
        <AnimateOnSeen>
          <div className="flex flex-row justify-center gap-4">
            <GradientButton
              onClick={() => openInNewTab(getRedirectURL("Email"))}
            >
              {getLogo("Email")} Email
            </GradientButton>
            <GradientButton
              onClick={() => openInNewTab(getRedirectURL("LinkedIn"))}
            >
              {getLogo("LinkedIn")} LinkedIn
            </GradientButton>
            <GradientButton
              onClick={() => openInNewTab(getRedirectURL("Resume"))}
            >
              {getLogo("Resume")} Resume
            </GradientButton>
          </div>
        </AnimateOnSeen>
      </div>
    </Wrapper>
  );
};

export default Contacts;
