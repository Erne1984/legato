import { PipelineStage } from 'mongoose';
import Repository from '../../../../shared/repository/repository/repositiory';
import Post from '../../Post';
import { Service } from '../../../../shared/interfaces/Service';

export default class ListPostService implements Service<Post[]> {
  private repository: Repository<Post>;

  constructor(repository: Repository<Post>) {
    this.repository = repository;
  }

  public async execute(
    pipeline: PipelineStage[],
    page: number = 0,
    pageSize: number = 10,
  ): Promise<Post[]> {
    const foundedPosts = await this.repository.aggregate(
      pipeline,
      page,
      pageSize,
    ) as Post[];

    return foundedPosts;
  }
}

