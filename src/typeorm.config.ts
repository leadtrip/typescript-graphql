import {DataSource} from "typeorm";
import * as process from "process";
import {Product} from "./entities/Product";
import dotenv from "dotenv";

dotenv.config();
export default new DataSource({
    type: 'postgres',
    url: process.env.DB_URL,
    entities: [Product],
    synchronize: true       // this generates the tables
})