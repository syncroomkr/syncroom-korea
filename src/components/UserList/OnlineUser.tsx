import React, { useCallback } from "react";

import { useDispatch } from "react-redux";
import { closeSidebar } from "../../modules/sidebar";

import { scrollToRoom } from "../../common/util/scrollToRoom";

import Delete from "../../resource/img/icon/x.svg?react";
import Arrow from "../../resource/img/icon/right-arrow.svg?react";
import { useUsersStore } from "@/store";

interface OnlineUserProps {
  userName: string;
  roomId: string;
  isActive: boolean;
}

function OnlineUser({ userName, roomId, isActive }: OnlineUserProps) {
  const dispatch = useDispatch();
  const deleteFavorite = useUsersStore(state => state.deleteFavoriteUser);

  const findUserRoom = useCallback(() => {
    if (!isActive) {
      dispatch(closeSidebar());
      scrollToRoom(roomId);
    }
  }, [roomId, dispatch, isActive]);

  const deleteSelf = useCallback(() => {
    deleteFavorite(userName);
  }, [deleteFavorite, userName]);

  return (
    <div className="Online User" onClick={findUserRoom}>
      <svg className="indicator" viewBox="0 0 2 2">
        <circle cx="1" cy="1" r="1" />
      </svg>
      <span>{userName}</span>
      <button className="delete" onClick={deleteSelf} disabled={!isActive}>
        <Delete />
      </button>
      <Arrow className="arrow" />
    </div>
  );
}

// const scrollToRoom = (roomId: number) => {
//     const keyFrames = (color: string) => [
//         {boxShadow: "0 0 0.8rem rgba(127, 127, 127, 0.1)"},
//         {boxShadow: `0 0 0.8rem ${color}`, offset: 0.1},
//         {boxShadow: `0 0 0.8rem ${color}`, offset: 0.8},
//         {boxShadow: "0 0 0.8rem rgba(127, 127, 127, 0.1)"},
//     ];
//
//     const roomTile = document.getElementById(roomId.toString());
//
//     if (roomTile) {
//         roomTile.scrollIntoView({behavior: "smooth", block: "center"});
//         roomTile.animate(keyFrames("rgba(20, 20, 20, 1)"), 2000);
//     } else {
//         const filterElements = document.querySelectorAll(".Toolbar > .selected");
//
//         filterElements.forEach(element => {
//             element?.animate(keyFrames("rgba(255, 75, 85, 0.9)"), 1200);
//         })
//     }
// }

export default React.memo(OnlineUser);
