export interface UserData {
    username?: string;
    picture: string | undefined;
}

export default class User implements UserData {
    id: string;
    username: string;
    email: string;
    permissions: string;
    token: string;
    picture: string | undefined;

    constructor (id : string, username: string, email: string, token: string, permissions?: string, picture? : string) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.permissions = permissions? permissions : 'User';
        this.token = token;
        this.picture = picture;
    }
};
