import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repository/TagRepository"

class CreateTagService {

    async execute(name: string) {
        if (!name) {
            throw new Error("Invalid name.");
        }

        const tagRepo = getCustomRepository(TagRepository);

        const tagAlreadyExists = await tagRepo.findOne({ name });
        if (tagAlreadyExists) {
            throw new Error("Tag already exists.");
        }

        const tag = tagRepo.create({
            name
        });

        await tagRepo.save(tag);

        return tag;
    }
}

export { CreateTagService }