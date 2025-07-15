import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const waterTests = pgTable("water_tests", {
  id: serial("id").primaryKey(),
  ph: text("ph").notNull(),
  turbidity: text("turbidity").notNull(),
  color: text("color").notNull(),
  smell: text("smell").notNull(),
  source: text("source").notNull(),
  riskLevel: text("risk_level").notNull(),
  riskScore: integer("risk_score").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertWaterTestSchema = createInsertSchema(waterTests).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertWaterTest = z.infer<typeof insertWaterTestSchema>;
export type WaterTest = typeof waterTests.$inferSelect;
