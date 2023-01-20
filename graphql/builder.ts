// graphql/builder.ts

// 1.
import SchemaBuilder from "@pothos/core";
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import prisma from "../lib/prisma";
import RelayPlugin from '@pothos/plugin-relay';
import { createContext } from './context'

// 2. 
export const builder = new SchemaBuilder<{
  // 3. 
  PrismaTypes: PrismaTypes
  Context: ReturnType<typeof createContext>,
}>({
  // 4.
  plugins: [PrismaPlugin, RelayPlugin],
  relayOptions: {},
  prisma: {
    client: prisma,
  }
})


builder.queryType({
  fields: (t) => ({
    ok: t.boolean({
      resolve: () => true,
    }),
  }),
});

builder.mutationType({})