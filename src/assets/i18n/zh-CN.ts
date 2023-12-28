import pages from './zh-CN/page';
import abnormal from './zh-CN/abnormal';
import personalize from './zh-CN/personalize';
import login from './zh-CN/login';
import register from './zh-CN/register';
import sideSetting from './zh-CN/side-setting';
import header from './zh-CN/header';
import authGuard from './zh-CN/auth-guard';
import notice from './zh-CN/notice';
import system from './zh-CN/system';
export default {
  ...pages,
  ...abnormal,
  ...personalize,
  ...login,
  ...register,
  ...sideSetting,
  ...header,
  ...authGuard,
  ...notice,
  ...system
};
