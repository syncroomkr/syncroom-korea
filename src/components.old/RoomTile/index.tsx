// import React, {useMemo} from "react";
// import "./style.scss";
// import classNames from "classnames";
//
// import SimpleBar from "simplebar-react";
//
// import MemberDisplay from "./MemberList";
// import Buttons from "./Buttons";
// import Flag from "../../resource/img/icon/Flag";
// import {ReactComponent as Lock} from "../../resource/img/icon/lock.svg";
//
// import RoomType from "../../common/classes/Room";
// import {Status} from "../../common/classes/properties";
//
// import {useNotificationHandler} from "../../common/hooks/useNotificationHandler";
// import { getRoomId, Room } from "../../common/api/interfaces";
//
// interface Size {
//     width: string;
//     height: string;
// }
//
// interface RoomTileProps {
//     room: Room;
//     size: Size;
// }
//
// function RoomTile({room, size}: RoomTileProps) {
//     const isFull: boolean = room.members.length === 5;
//
//     const [subsribeStatus, changeSubscibeStatus] = useNotificationHandler({
//         room, isFull
//     });
//
//
//     return (
//         <div
//             id={getRoomId(room)}
//             className={classNames(
//                 "RoomTile",
//                 {"public": !room.needPasswd, "private": room.needPasswd},
//                 {"full": isFull})}
//             style={size}
//         >
//             <div className="room-header">
//                 {/*<Flag country={room.country}/>*/}
//                 {room.needPasswd ? <></> : <Lock/>}
//                 <span className='room-name'>{room.roomName}</span>
//             </div>
//             <SimpleBar className="room-desc-wrap">
//                 <div className="room-desc">
//                     <p>
//                         {room.tags.length > 0
//                             ? "#" + room.tags.join("   #") + "\n"
//                             : null}
//                     </p>
//                     {room.desc ? room.desc.trim() : "방 설명이 없습니다."}
//                 </div>
//             </SimpleBar>
//             <MemberDisplay members={room.members}/>
//             <Buttons
//                 name={room.name}
//                 status={room.status}
//                 isFull={isFull}
//                 changeSubscription={changeSubscibeStatus}
//                 isSubscribed={subsribeStatus}
//             />
//         </div>
//     );
// }
//
// export default RoomTile;
export {}
