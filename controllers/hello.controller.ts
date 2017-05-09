import { Controller, Get, Response, Param } from 'nest.js';

@Controller('hello')
export class HelloController {
    @Get()
    public async hello(@Response() res, @Param('id') id) {
        const response = await Promise.resolve("Hello world!")
        res.status(200).json(response);
    }
}