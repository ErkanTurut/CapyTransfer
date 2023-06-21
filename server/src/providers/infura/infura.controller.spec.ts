import { Test, TestingModule } from '@nestjs/testing';
import { InfuraController } from './infura.controller';

describe('InfuraController', () => {
  let controller: InfuraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfuraController],
    }).compile();

    controller = module.get<InfuraController>(InfuraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
