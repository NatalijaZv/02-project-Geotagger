import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();  //In NestJS, dotenv is commonly used for loading environment variables from a .env file into process.env.

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  //DATABASE_URL typically follows the format:postgres://username:password@host:port/database_name

  synchronize: true, // IMPORTANT! Remove this before going into production
  entities: ['dist/**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
  migrationsTableName: 'migrations',
  migrations: ['dist/migrations/*.js'],
  migrationsRun: true
};

export default typeOrmModuleOptions;
