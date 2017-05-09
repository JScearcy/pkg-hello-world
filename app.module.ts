import { Module } from 'nest.js';
import { HelloController } from './controllers/hello.controller';
import { BaseController } from './controllers/base.controller';

@Module({
    controllers: [
        HelloController,
        BaseController
    ]
})
export class ApplicationModule {}