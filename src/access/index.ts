import router from "@/router";
import store from "@/store";
import ACCESS_ENUM from "@/access/ACCESSENUM";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  console.log("登录用户信息", store.state.user.loginUser);

  const loginUser = store.state.user.loginUser;
  // 如果未登录过，自动登录
  if (!loginUser || !loginUser.userRole) {
    // 加 await 是为了等用户成功登陆之后，再执行后续代码
    await store.dispatch("user/getLoginUser");
  }

  const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;

  // 要跳转的页面 必须需要登录
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    // 如果未登录，跳转到登录页面
    if (!loginUser || !loginUser.userRole) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    // 继续走权限校验逻辑
    // 如果已经登录，但是权限不足，跳转到无权限页面
    if (!checkAccess(loginUser, needAccess)) {
      next("/noAuth");
    }
  }
  next();
});
