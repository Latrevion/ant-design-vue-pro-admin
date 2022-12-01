//获取当前权限
export function getCurrentAuthority() {
  return ["admin"];
  //   return ['user'];
}

//对比权限
export function check(authority) {
  const current = getCurrentAuthority();
  return current.some((item) => authority.includes(item));
}

//check isLogin
export function isLogin() {
  const current = getCurrentAuthority();
  return current && current[0] !== "guest";
}
