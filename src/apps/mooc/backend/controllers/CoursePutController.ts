import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { CourseCreator } from '../../../../Contexts/Mooc/Courses/application/CourseCreator';
import { Controller } from './Controller';

export class CoursePutController implements Controller {
	constructor(private courseCreator: CourseCreator) {}

	async run(req: Request, res: Response): Promise<void> {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const { id, name, duration } = req.body;

		await this.courseCreator.run(id as string, name as string, duration as string);

		res.status(httpStatus.CREATED).send();
	}
}
