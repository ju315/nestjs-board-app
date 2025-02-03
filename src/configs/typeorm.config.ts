import * as config from 'config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const dbConfig = config.get('db');

export const typeORMConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.RDS_HOSTNAME || dbConfig.host,
  port: process.env.RDS_PORT || dbConfig.port,
  username: process.env.RDS_USERNAME || dbConfig.username,
  password: process.env.RDS_PASSWORD || dbConfig.password,
  database: process.env.RDS_DB_NAME || dbConfig.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: dbConfig.synchronize, // 다시 실행시 엔티티안에서 수정된 커럼의 길이, 타입, 변경값등을 해당 테이블을 Drop 후 다시 생성
};
