interface ILog {  }

export class ConsoleService {

    constructor() { }

    private static _console(params:ILog) {}

    static callstack(depth:number = 2): string {
        return "";
    }
    
    static INFO(message: string = "", message_var: any = null) {}

    static WARN(message: string = "", message_var: any = null) {}

    static ERROR(message: string = "", message_var: any = null) {}

    static DEBUG(message: string = "", message_var: any = null, caller: string = "") {}

    static SUCCESS(message: string = "", message_var: any = null, caller: string = "") {}

    static FAILURE(message: string = "", message_var: any = null, caller: string = "") {}

    static ASSERT(condition: boolean, message: string = "", caller: string = ""){}

}
