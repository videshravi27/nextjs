import { z } from 'zod';

const schema = z.object({
    price: z.number().min(1).max(100),
})

export default schema;