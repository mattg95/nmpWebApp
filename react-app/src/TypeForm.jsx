import React, { useEffect, useRef, useState } from "react";
import * as typeformEmbed from "@typeform/embed";

const TypeForm = ({ passDataUpstream, isMobile }) => {
  const typeformComponent = useRef(null);
  const buttonRef = useRef(null);
  const [typeformWidgetOpen, setTypeformWidgetOpen] = useState(true);

  const queryStr = window.location.search.substr(1);

  const mobileTypeform = typeformEmbed.makePopup(
    `https://z8ivgb8lhnl.typeform.com/to/rye8VWC5#${queryStr}`,
    {
      mode: "popup",
      autoClose: 3,
      onSubmit: ({ response_id }) => {
        passDataUpstream({ responseId: response_id });
      },
      onClose: ({ response_id }) => {
        passDataUpstream({ responseId: response_id });
      },
    }
  );

  useEffect(() => {
    !isMobile &&
      typeformEmbed.makeWidget(
        typeformComponent.current,
        `https://z8ivgb8lhnl.typeform.com/to/rye8VWC5#${queryStr}`,
        {
          hideScrollbars: true,
          hideHeaders: true,
          opacity: 0,
          onSubmit: ({ response_id }) => {
            passDataUpstream({ responseId: response_id });
            setTimeout(() => {
              setTypeformWidgetOpen(false);
            }, 3000);
          },
        }
      );
  }, [typeformComponent, passDataUpstream, isMobile, queryStr]);

  return (
    <div>
      <div
        ref={typeformComponent}
        className={`typeform-widget ${typeformWidgetOpen ? "" : "closed"}`}
        id="typeform"
      />
    </div>
  );
};

export default TypeForm;
