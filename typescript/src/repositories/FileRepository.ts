import { EntityRepository, Repository } from 'typeorm';

import { File } from '../models/File';

@EntityRepository(File)
class FileRepository extends Repository<File>{
}

export { FileRepository }
