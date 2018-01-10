import Environment from "../../common/environments";
import { Delegator } from "../../common/local-storage.service";

export class LoginService {
  registerClientId = (params, successCallBack, errorCallBack) => {
    var delegator = new Delegator();
    const url =
      Environment.SERVER +
      Environment.apiUrl +
      Environment.RESTURL.registerClientId +
      "?clientId=" +
      params.clientId;
    delegator._post(params, url, successCallBack, errorCallBack);
  };

  authenticateUser(user, successCallback, errorCallback) {
    var delegator = new Delegator();
    const url =
      Environment.SERVER +
      Environment.RESTURL.authenticationUrl +
      "?grant_type=" +
      user.grantType +
      "&username=" +
      user.email +
      "&password=" +
      user.password;
    delegator._post(user, url, successCallback, errorCallback);
  }

  loginUser(user, successCallback, errorCallback) {
    var delegator = new Delegator();
    const url =
      Environment.SERVER +
      Environment.apiUrl +
      Environment.RESTURL.loginUrl +
      "?email=" +
      user.email +
      "&getImg=true";
    delegator._get(url, successCallback, errorCallback);
  }
}
