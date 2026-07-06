import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { getDb } from "./queries/connection";
import { projectInquiries } from "@db/schema";

export const inquiryRouter = createRouter({
  create: publicQuery
    .input(
      z.object({
        projectType: z.string().min(1),
        budget: z.string().optional(),
        timeline: z.string().optional(),
        projectId: z.string().optional(),
        fullName: z.string().min(1),
        email: z.string().email(),
        message: z.string().optional(),
        userId: z.number().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const result = await db.insert(projectInquiries).values({
        userId: input.userId ?? null,
        projectType: input.projectType,
        budget: input.budget ?? null,
        timeline: input.timeline ?? null,
        projectId: input.projectId ?? null,
        fullName: input.fullName,
        email: input.email,
        message: input.message ?? null,
      });
      return { id: Number(result[0].insertId), success: true };
    }),
});
