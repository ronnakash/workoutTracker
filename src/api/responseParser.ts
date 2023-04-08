import User from "../interfaces/user";

export const parseUserFromLoginRequest = (res : any) : User | undefined => {
    const user = parseUserFromRequest(res);
    return user;
}

export const parseUserFromRegisterRequest = (res : any) : User | undefined => {
    const user = parseUserFromRequest(res);
    return user;
}

export const parseUserFromUpdateRequest = (res : any) : User | undefined => {
    let obj = JSON.parse(res);
    let {updated} = obj;
    return updated;
}

export const parseUserFromRequest = (res : any) : User | undefined => {
    let obj = JSON.parse(res);
    let {token, user} = obj;
    if (token && user) {
      let {_id ,username, email, permissions, picture} = user;
      return new User(_id, username, email, 'Bearer ' + token, permissions, picture);
    }
    return undefined;
}