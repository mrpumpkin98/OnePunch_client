import apiInstance from "../../apiInstance/apiInstance";

export const useGetFetchScheduleClass = (
  scheduleId: any,
  setInfo: any,
  setUserId: any,
  setUserName: any,
  setMemberId: any,
  setMemberName: any,
  setIssuedTicketName: any,
  setStartAt: any,
  setEndAt: any
) => {
  const getMemberInfo = async () => {
    const response = await apiInstance.get(
      `/schedules/private-lesson/${scheduleId}`
    );
    setInfo(response.data);
    setUserId(response.data.tutor.id);
    setUserName(response.data.tutor.name);
    setMemberId(response.data.attendanceHistories[0]?.member.id);
    setMemberName(response.data.attendanceHistories[0]?.member.name);
    setStartAt(response.data.startAt);
    setEndAt(response.data.endAt);
    setIssuedTicketName(response.data.issuedTicket.title);
  };
  return { getMemberInfo };
};
