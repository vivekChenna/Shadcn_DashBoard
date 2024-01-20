import React from "react";
import Mail from "./mail";
import { mails, accounts } from "./MailData";

const MailBox = () => {
  const defaultLayout = undefined;
  const defaultCollapsed = undefined;

  return (
    <>
   <div className="hidden flex-col md:flex">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  );
};

export default MailBox;
