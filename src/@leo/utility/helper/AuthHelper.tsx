import { authRole } from "../../../shared/constants/AppConst";
import AvatarDefault from "../../../assets/user/avatar-default.svg";

export const getUserFromJwtAuth = (user: any) => {
  if (user)
    return {
      id: 1,
      uid: 1,
      displayName: user?.name ? user.name : "My name",
      email: user?.email ? user.emai : "",
      photoURL: user?.photoURL ? (
        <img src={user.photoURL} alt="avatar" />
      ) : (
        // <img src={AvatarDefault} alt="avatar" />
        <img src={""} alt="avatar" />
      ),
      role: authRole.user,
      accountId: user?.accountId || 0,
      companyId: user?.companyId || 0,
      companyName: user?.companyName || "",
      fullName: user?.fullName || "",
      userName: user?.userName || "",
      roleId: user?.roleId || 0,
      userCode: user?.userCode || "",
    };
  return user;
};
