import {DataSource} from "typeorm";
import * as process from "process";
import {Product} from "./entities/Product";
import dotenv from "dotenv";
import {User} from "./entities/User";

dotenv.config();
export default new DataSource({
    type: 'postgres',
    url: process.env.DB_URL,
    entities: [Product, User],
    synchronize: true       // this generates the tables
})