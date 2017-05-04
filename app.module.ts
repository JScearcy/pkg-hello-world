import { Module } from 'nest.js';
import { HelloController } from './hello.controller';
import { BaseController } from './base.controller';

@Module({
    controllers: [
        HelloController,
        BaseController
    ]
})
export class ApplicationModule {}