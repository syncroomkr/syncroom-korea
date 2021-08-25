import RoomType from "../classes/Room";
import {MemberType} from "../classes/Member";
import {CountryType, InstType, StatusType} from "../classes/properties";

export const roomFilter = (
    search: string,
    country: CountryType | null,
    inst: InstType | null,
    status: StatusType | null
) => (room: RoomType) => {
    if (!room.name.includes(search)
        && room.members.filter(
            (member: MemberType) => member.nickname.includes(search)
        ).length === 0) return false;
    if (country && room.country !== country) return false;
    if (inst && room.members.filter(
        (member: MemberType) => member.inst === inst
    ).length !== 0) return false;
    return !(status && room.status !== status);
};