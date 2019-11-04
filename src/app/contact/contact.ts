export class Contact {
    constructor (
        name:string,
        email:string,
        subject:string,
        message:string,
        sendToEmail:string,
        sendToName:string
    ) {}

    public get name() : string {
        return this.name;
    }
    public set name(name : string) {
        this.name = name;
    }
    
    public get email() : string {
        return this.email;
    }
    public set email(email : string) {
        this.email = email;
    }

    public get subject() : string {
        return this.subject;
    }
    public set subject(subject : string) {
        this.subject = subject;
    }

    public get message() : string {
        return this.message;
    }
    public set message(message : string) {
        this.message = message;
    }
}
