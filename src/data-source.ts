import { DataSource } from 'typeorm'
import { Post } from './entity/Post'

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'challenge',
    entities: [Post],
    synchronize: true,
    logging: false
})