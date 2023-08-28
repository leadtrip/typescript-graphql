import {ApolloServer} from "apollo-server";
import {schema} from "./schema";
import typeormConfig from "./typeorm.config";
import { Context } from "./types/Context";
import {auth} from "./middlewares/auth";

const boot = async () => {
    const conn = await typeormConfig.initialize();

    const server = new ApolloServer({
        schema,
        context: ({req}): Context => {
            const token = req?.headers?.authorization ?
                auth(req.headers.authorization)
                :
                null
            return {conn, userId: token?.userId}
        },
    })

    server.listen(5000).then(({url}) =>{
        console.log("listening on " + url)
    });
};

boot();