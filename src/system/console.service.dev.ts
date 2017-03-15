interface ILog {
    level: string,
    title: string,
    styles: {
        primary: string,
        secondary: string,
        tertiary: string
    },
    message: string,
    variable: any,
    caller?: string
}

export class ConsoleService {

    constructor() { }

    private static _console(params:ILog) {

        let message_pos = (params.message != "") ? "%c=>%s" : "";
        let message_str = (params.message != "") ? params.message : "";

        let styles = `
            border-top-left-radius: 2px;
            border-bottom-left-radius: 2px;
            padding: 2px 5px;
            font-weight:bold;
            color: ${params.styles.secondary};
            background-color: ${params.styles.primary};
            border-color: ${params.styles.tertiary};
        `;

        let border_styles = `
            width: 0; 
            height: 0; 
            border-top: 2px solid transparent;
            border-bottom: 2px solid transparent;
            border-left: 2px solid ${params.styles.secondary};
            background-color: ${params.styles.primary};
        `;

        let inverse_styles = `
            padding: 2px 0 2px 5px;
            color: ${params.styles.primary};
            background-color: ${params.styles.secondary};
            border-color: ${params.styles.tertiary};
        `;

        let final_styles = (params.message) ? ` 
            border-top-right-radius: 2px;
            border-bottom-right-radius: 2px;
            padding: 2px 0 2px 5px;
            font-weight: normal;
            color: ${params.styles.secondary};
            background-color: ${params.styles.primary};
            border-color: ${params.styles.tertiary};
        ` : "";

        let caller = (params.caller) ? params.caller : this.callstack(3);

        console[params.level]("%c"+params.title+"%c@%s"+message_pos, styles, inverse_styles, caller, final_styles, message_str);
        
        if (params.variable) {
            console.group(typeof params.variable);
            console.log(params.variable);
            console.groupEnd();
        } 
    }


    static callstack(depth:number = 2): string {
        let stack: string = new Error().stack;

        let regexp: any = new RegExp("^(?:.*\\r?\\n){"+depth+"}.*[\\s\\.](\\w+)[\\s\\.](\\w+)\\s[\\[\\(].*\\r?\\n(?:[\\s\\S]*)$", "g");

        let caller:string = stack.replace(regexp, "$1#$2()").replace(/^new#(.*)\(\)$/, "$1#constructor()");

        return caller;
    }
    
    static INFO(message: string = "", message_var: any = null) {

        this._console({
            level: "info",
            title: "NOTICE",
            styles: {primary:"#31708F", secondary:"#D9EDF7", tertiary:"#BCE8F1"},
            message: message,
            variable: message_var
        });
    }

    static WARN(message: string = "", message_var: any = null) {

        this._console({
            level: "warn",
            title: "WARNING",
            styles: {primary:"#8A6D3B", secondary:"#FCF8E3", tertiary:"#FAEBCC"},
            message: message,
            variable: message_var
        });
    }

    static ERROR(message: string = "", message_var: any = null) {

        this._console({
            level: "error",
            title: "ERROR",
            styles: {primary:"#A94442", secondary:"#F2DEDE", tertiary:"#EBCCD1"},
            message: message,
            variable: message_var
        });
    }

    static DEBUG(message: string = "", message_var: any = null, caller: string = "") {

        this._console({
            level: "log",
            title: "DEBUG",
            styles: {primary:"#333", secondary:"#F1F1F1", tertiary:"#333"},
            message: message,
            variable: message_var,
            caller: caller
        });
    }

    static SUCCESS(message: string = "", message_var: any = null, caller: string = "") {
        
        this._console({
            level: "log",
            title: "SUCCESS",
            styles: {primary:"#3C763D", secondary:"#DFF0D8", tertiary:"#D6E9C6"},
            message: message,
            variable: message_var,
            caller: caller
        });

    }

    static FAILURE(message: string = "", message_var: any = null, caller: string = "") {

        this._console({
            level: "log",
            title: "FAILURE",
            styles: {primary:"#A94442", secondary:"#F2DEDE", tertiary:"#EBCCD1"},
            message: message,
            variable: message_var,
            caller: caller
        });
    }

    //@TODO 
    static ASSERT(condition: any, message: string = "", caller: string = ""){
        let set_caller = (caller) ? caller : this.callstack(3);
        let message_var = null;
        message = message + " : " + condition;

        if (condition) {
            this.SUCCESS(message, message_var, set_caller);
        } else {
            this.FAILURE(message, message_var, set_caller);
        }
    }

}
