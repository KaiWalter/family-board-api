import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as os from 'os';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.res = {
        body: "It's alive! --- OS :" + os.type() + " - " + os.release()
    };
};

export default httpTrigger;
