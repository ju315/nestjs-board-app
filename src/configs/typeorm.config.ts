import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'board-app',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true, // 다시 실행시 엔티티안에서 수정된 커럼의 길이, 타입, 변경값등을 해당 테이블을 Drop 후 다시 생성
};
