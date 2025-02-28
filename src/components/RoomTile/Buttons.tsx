import React from "react";
import classNames from "classnames";

import { joinRoom } from "../../common/util/joinRoom";

import { useDispatch } from "react-redux";
import { openModal } from "../../modules/modal";
import { ModalClass } from "../../modules/modal/modalClass";

import Share from "../../resource/img/icon/share.svg?react";
import Notification from "../../resource/img/icon/notification.svg?react";
import { Status } from "@/common/classes/properties";

interface ButtonsProps {
  name: string;
  isPublic: boolean;
  isFull: boolean;
  changeSubscription: () => void;
  isSubscribed: boolean;
}

function Buttons({
  name,
  isPublic,
  isFull,
  changeSubscription,
  isSubscribed,
}: ButtonsProps) {
  const dispatch = useDispatch();
  const join = isPublic
    ? (temp: boolean) => {
        joinRoom(name, "", temp);
      }
    : (temp: boolean) => {
        dispatch(
          openModal({
            modalClass: ModalClass.PASSWORD,
            roomName: name,
            temp,
          }),
        );
      };
  const share = () => {
    dispatch(
      openModal({
        modalClass: ModalClass.SHARE,
        roomName: name,
        status: isPublic ? Status.PUBLIC : Status.PRIVATE,
      }),
    );
  };

  return (
    <div className="Buttons">
      <button className="shareBtn" onClick={share}>
        <Share />
        <span>공유</span>
      </button>
      {isFull ? (
        <div>
          <button
            className={classNames("notiBtn", { subscibed: isSubscribed })}
            onClick={changeSubscription}
          >
            <Notification />
            <span>{isSubscribed ? "알림 취소" : "자리 나면 알림 받기"}</span>
          </button>
        </div>
      ) : (
        <div>
          <button onClick={() => join(true)}>
            <span>임시 참여</span>
          </button>
          <button className="joinBtn" onClick={() => join(false)}>
            <span>참여하기</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default React.memo(Buttons);
