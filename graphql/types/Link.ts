// /graphql/types/Link.ts
import { builder } from "../builder";

builder.prismaObject('Link', {
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title'),
    url: t.exposeString('url'),
    description: t.exposeString('description'),
    imageUrl: t.exposeString('imageUrl'),
    category: t.exposeString('category'),
    users: t.relation('users')
  })
})

// 1. 
builder.queryField("links", (t) =>
// 2. 
  t.prismaField({
    // 3. 
    type: ['Link'],
    // 4. 
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.link.findMany({ ...query })
  })
)