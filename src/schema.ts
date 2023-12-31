import {makeSchema} from "nexus"
import {join} from 'path'
import * as process from "process";
import * as types from './graphql'

export const schema = makeSchema({
    types,
    outputs: {
        schema: join(process.cwd(), "schema.graphql"),
        typegen: join(process.cwd(), "nexus-typegen.ts"),
    }
})