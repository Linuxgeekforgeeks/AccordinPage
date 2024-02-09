import React, { useState } from "react";
import "./AccordinItem.css";
import { AddCircleIcon } from "../../assets/icons/AddIcon";
import { MinusCircleIcon } from "../../assets/icons/MinusIcon";

function AccordinItem({title,content}) {
  const [showaddIcon, setShowAddIcon] = useState(true);
  return (
    <article className={`accordinItem ${!showaddIcon?"paddingbig":"paddingsmall"}`}>
      <div onClick={()=>setShowAddIcon(!showaddIcon)} className={`accordinItem__top`}>
        <p>{title}</p>
        {showaddIcon ? <AddCircleIcon /> : <MinusCircleIcon />}
      </div>
      {!showaddIcon && (

      <div className="accordinItem__content">
        <p>
          {content}
        </p>
      </div>

      )}
    </article>
  );
}

export default AccordinItem;
