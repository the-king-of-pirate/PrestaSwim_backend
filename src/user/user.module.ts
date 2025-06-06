import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import {
  UserResolver,
  UserAdminResolver,
  ProfessionalResolver,
  ServiceProviderResolver,
} from './user.resolver';
import { PrismaService } from '../prisma/prisma.service';
import { AuthModule } from '../auth/auth.module'; // Import AuthModule here
import { FileUploadService } from 'src/common/services/file-upload.service';

@Module({
  imports: [AuthModule],
  providers: [
    UserService,
    UserResolver,
    UserAdminResolver,
    ProfessionalResolver,
    ServiceProviderResolver,
    PrismaService,
    FileUploadService,
  ],
})
export class UserModule {}
