<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-sa-east-1.pooler.supabase.com',
      port: 5432,
      username: 'postgres.ounhiyqfjlxwduucdybe',
      password: 'postgres',
      database: 'postgres',
    })
  ],
})
export class AppModule {}
=======
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './cases/categories/category.module';
import { BrandModule } from './cases/brands/brand.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-sa-east-1.pooler.supabase.com',
      port: 5432,
      username: 'postgres.ounhiyqfjlxwduucdybe',
      password: 'postgres',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true, 
      // ^pega tudo que tem no modelo de entidade que foi carregadoa atrás do autoLoadEntities
      // e replica no banco SÓ DA PRA USAR EM DESENVOLVIMENTO, N CONECTA EM PRODUÇÃO COM SYNCHRONIZE TRUE
    }),
    CategoryModule, 
    BrandModule,
  ],
})
export class AppModule {}
>>>>>>> 80952f4 (feat: 18/08/2024)
