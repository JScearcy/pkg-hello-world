import { Controller, Get, Response, Param } from 'nest.js';

@Controller('/')
export class BaseController {
    @Get()
    public async base(@Response() res, @Param('id') id) {
        const response = await Promise.resolve("Base route")
        res.status(200).json(response);
    }

}