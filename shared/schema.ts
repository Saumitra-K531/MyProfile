import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  company: text("company").notNull(),
  position: text("position").notNull(),
  location: text("location"),
  startDate: text("start_date").notNull(),
  endDate: text("end_date"),
  description: text("description"),
  achievements: text("achievements").array(),
  technologies: text("technologies").array(),
  icon: text("icon").default("briefcase"),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  technologies: text("technologies").array(),
  features: text("features").array(),
  icon: text("icon").default("code"),
});

export const publications = pgTable("publications", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  authors: text("authors").array(),
  journal: text("journal"),
  description: text("description"),
  keywords: text("keywords").array(),
});

export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(),
  name: text("name").notNull(),
  level: integer("level").default(5),
  icon: text("icon"),
});

export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  degree: text("degree").notNull(),
  field: text("field"),
  institution: text("institution").notNull(),
  location: text("location"),
  startYear: text("start_year"),
  endYear: text("end_year"),
  grade: text("grade"),
  icon: text("icon").default("graduation-cap"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertExperienceSchema = createInsertSchema(experiences);
export const insertProjectSchema = createInsertSchema(projects);
export const insertPublicationSchema = createInsertSchema(publications);
export const insertSkillSchema = createInsertSchema(skills);
export const insertEducationSchema = createInsertSchema(education);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Experience = typeof experiences.$inferSelect;
export type Project = typeof projects.$inferSelect;
export type Publication = typeof publications.$inferSelect;
export type Skill = typeof skills.$inferSelect;
export type Education = typeof education.$inferSelect;
