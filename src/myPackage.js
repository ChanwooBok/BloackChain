// 몇천줄이나 되는 js code를 당장 바꾸고 싶지 않고 ts의 보호만 받게 하고 싶을때.
// jsDOC을 사용하면 js파일도 ts의 보호를 받게끔 할 수 있다.
// 단지 comment를 더하는거기 때문에 js코드에 오류없이 ts를 적용시킬 수 있다.
//@ts-check
/**
 * init program
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 *
 * @returns boolean
 */

export function init(config) {
  return true;
}

/**
 * Exits the program
 * @param {number} code
 * @returns number
 */

export function exit(code) {
  return code + 1;
}
