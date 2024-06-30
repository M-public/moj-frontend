/**
 * 检查当前登录用户是否有某个权限
 * @param loginUser 当前登录用户
 * @param needAccess 需要有的权限
 * @returns boolean 有无权限
 */
import ACCESS_ENUM from "@/access/ACCESSENUM";

const checkAccess = (loginUser: any, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
  // 检查当前登录用户具有的权限（如果没有loginUser. 则表示未登录）
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) return true;

  // 如果需要用户登录才能访问
  if (needAccess === ACCESS_ENUM.USER) {
    // TODO 用户登录即可
    // 如果未登录，无权限
    if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }

  // 如果需要管理员权限
  if (needAccess === ACCESS_ENUM.ADMIN) {
    // 如果不是管理员，无权限
    if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
      return false;
    }
  }
  return true;
};

export default checkAccess;
