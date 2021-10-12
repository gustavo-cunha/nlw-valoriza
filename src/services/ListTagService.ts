import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repository/TagRepository"
import { classToPlain } from "class-transformer";

class ListTagService {

    async execute() {
        const tagRepo = getCustomRepository(TagRepository);
        const registros = await tagRepo.find();
        return classToPlain(registros);
    }

}

export { ListTagService }
